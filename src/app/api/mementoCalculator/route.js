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

export async function POST(request) {
  const apiUrl = "https://api-gateway.skymavis.com/graphql/axie-marketplace";

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

    const response = await fetchData(apiUrl,rate);
    const exchangeRate = response.data.exchangeRate.eth.usd;

    const Materials = `
      query MyQuery {
        erc1155Tokens(tokenType: Material) {
          results {
            minPrice
            imageUrl
            name
            tokenAddress
            tokenId
            tokenType
          }
        }
      }
    `;

    const responseMaterials = await fetchData(apiUrl,Materials);
    const Materialsdata = responseMaterials.data.erc1155Tokens.results.map(
      (result) => 
        {
          return{
            name: result.name,
            tokenId: result.tokenId,
            tokenType: result.tokenType,
            imageUrl: result.imageUrl,
            minprinceEth: (result.minPrice / 1e18).toFixed(8),
            minprinceUsd: ((result.minPrice / 1e18) * exchangeRate).toFixed(5),
          }
        }
      )



    // Retorna todos los resultados paginados
    return NextResponse.json(Materialsdata);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
