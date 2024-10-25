import { Rowdies } from "next/font/google";
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

const fetchDataPlot = async (url, query) => {
  const response = await fetch(url, {
    method: "POST",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.API_KEY,
    },
    body: JSON.stringify({"plot_ids": [376217]}),
  });

  const data = await response.json(); // Cambiado a 'text' para inspeccionar
  console.log('Raw response:', data); // Ver el contenido crudo de la respuesta
  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url}`);
  }
  return response.json();
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

    const response = await fetchData(apiUrl,rate);
    const exchangeRate = response.data.exchangeRate.eth.usd;

    const lands = `
      query MyQuery {
        lands(auctionType: Sale, sort: PriceAsc, size: 1) {
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

    const responselands = await fetchData(apiUrl,lands);

    function plot(row, col){
      var b = row 
      var c = col
      var plot_id = c + 512 + (b + 512) * 1024
      var plot = fetchDataPlot(apiUrlPlot, `{"plot_ids": [${plot_id}]}`)
      return plot
    }

    const dataplot1 = fetchDataPlot(apiUrlPlot)

    const landsMarket = responselands.data.lands.results.map(
      (result) => 
        {
          const dataplot = plot(result.row, result.col)
          return {
            tokenId: result.tokenId,
            col: result.col,
            row: result.row,
            landType: result.landType,
            minprinceEth: (result.order.currentPrice / 1e18).toFixed(3),
            minprinceUsd: ((result.order.currentPrice / 1e18) * exchangeRate).toFixed(2),
            plot_id: dataplot,
            cdmImage: "https://cdn.axieinfinity.com/game/lands/land-square/v1/square_"+result.col+"_"+result.row+".png",
            url: "https://app.axieinfinity.com/marketplace/lands/"+result.col+"/"+result.row
          }
        },
    ).sort((a, b) => {
      return a.minprinceUsd - b.minprinceUsd;
    });

    return NextResponse.json(dataplot1);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
