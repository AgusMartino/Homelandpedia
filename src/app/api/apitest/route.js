import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const fetchData = async (url, query) => {
  const response = await fetch(url, {
    method: "POST",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.API_KEY,
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url}`);
  }
  return response.json();
};

const fetchDataPlot = async (url, plot_ids) => {
  const response = await fetch(url, {
    method: "POST",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.API_KEY,
    },
    body: JSON.stringify({ "plot_ids": plot_ids }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url}`);
  }
  return data;
};

export async function POST(request) {
  const apiUrl = "https://graphql-gateway.axieinfinity.com/graphql";
  const apiUrlPlot = "https://land-api.skymavis.com/insights/public/plots/stats";
  
  const pageSize = 20; // Tamaño de cada página
  const totalSize = 400; // Tamaño total deseado

  try {
    // Consulta para obtener la tasa de cambio
    const rate = `
      query MyQuery {
        exchangeRate {
          ron {
            usd
          }
          eth {
            usd
          }
        }
      }
    `;

    const response = await fetchData(apiUrl, rate);
    const exchangeRate = response.data.exchangeRate.eth.usd;

    //Funcion para timeout
    const sleep = (ms) => {
      return new Promise((resolve) => setTimeout(resolve, ms));
    };

    // Función para calcular el plot_id
    function getPlotId(row, col) {
      return col + 512 + (row + 512) * 1024;
    }

    let allLands = []; // Array para almacenar todos los resultados de las páginas

    // Bucle para paginar, desde from=0 hasta from=380 en incrementos de 20
    for (let from = 0; from < totalSize; from += pageSize) {
      console.log('from:',from)
      const landsQuery = `
        query MyQuery {
          lands(auctionType: All, sort: PriceAsc, size: 20, from: ${from}) {
            results {
              tokenId
              col
              row
              landType
              order {
                currentPrice
              }
            }
            total
          }
        }
      `;

      const landsResponse = await fetchData(apiUrl, landsQuery);

      // Para cada resultado de la página actual, obtenemos los datos del plot y formateamos la respuesta
      const landsMarket = await Promise.all(
        landsResponse.data.lands.results.map(async (result) => {
          const plotId = getPlotId(result.row, result.col);
          const plotData = await fetchDataPlot(apiUrlPlot, [plotId]);

          return {
            tokenId: result.tokenId,
            col: result.col,
            row: result.row,
            landType: result.landType,
            minprinceEth: (result.order.currentPrice / 1e18).toFixed(3),
            minprinceUsd: ((result.order.currentPrice / 1e18) * exchangeRate).toFixed(2),
            plot_data: plotData[0], // Guardamos los datos de la parcela
            cdmImage: `https://cdn.axieinfinity.com/game/lands/land-square/v1/square_${result.col}_${result.row}.png`,
            url: `https://app.axieinfinity.com/marketplace/lands/${result.col}/${result.row}`,
          };
        })
      );

      // Agregar los resultados de la página actual al array total
      allLands = allLands.concat(landsMarket);
      await sleep(250);
    }

    // Retorna todos los resultados paginados
    return NextResponse.json(allLands);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
