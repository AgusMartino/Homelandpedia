import { NextResponse } from "next/server";
import { it } from "node:test";


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
  return data;  // Ya no vuelvas a llamar a response.json()
};

export async function POST(request) {
  const apiUrl = "https://graphql-gateway.axieinfinity.com/graphql";
  const apiUrlPlot = "https://land-api.skymavis.com/insights/public/plots/stats";

  try {
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

    const lands = `
      query MyQuery {
        lands(auctionType: Sale, sort: PriceAsc, size: 400) {
          results {
            tokenId
            col
            row
            landType
            order {
              currentPrice
            }
          }
        }
      }
    `;

    const responselands = await fetchData(apiUrl, lands);

    // Función para calcular el plot_id
    function getPlotId(row, col) {
      return col + 512 + (row + 512) * 1024;
    }

    const arrayPlotsId = []
    // Usamos Promise.all para esperar todas las llamadas asincrónicas
    const landsMarket = await Promise.all(
      responselands.data.lands.results.map(async (result) => {
        const plotId = getPlotId(result.row, result.col);
        arrayPlotsId.push(plotId)
        //const dataplot = await fetchDataPlot(apiUrlPlot, [plotId]);

        return {
          tokenId: result.tokenId,
          col: result.col,
          row: result.row,
          landType: result.landType,
          minprinceEth: (result.order.currentPrice / 1e18).toFixed(3),
          minprinceUsd: ((result.order.currentPrice / 1e18) * exchangeRate).toFixed(2),
          plot_data: plotId, // Guardamos el id de la parcela
          cdmImage: `https://cdn.axieinfinity.com/game/lands/land-square/v1/square_${result.col}_${result.row}.png`,
          url: `https://app.axieinfinity.com/marketplace/lands/${result.col}/${result.row}`,
        };
      })
    );
    const dataplot = await fetchDataPlot(apiUrlPlot, arrayPlotsId);

    landsMarket.forEach((item) =>{
      const data = dataplot.find(
        (data) =>
        data.plot_id == item.plot_data
      );
      item.plot_data = data
    })
    //console.log("Array plots id:", dataplot)

    // Retorna la lista de tierras con datos de parcelas
    return NextResponse.json(landsMarket);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
