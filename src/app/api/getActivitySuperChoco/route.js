import { NextResponse } from "next/server";
import meoToken from '@/img/meo-token.jpg'


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
  const apiUrl = "https://graphql-gateway.axieinfinity.com/graphql";

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

    function formatTimestampToDateTime(timestamp) {
      // Si el timestamp está en segundos, convertirlo a milisegundos
      if (timestamp.toString().length === 10) {
        timestamp *= 1000;
      }
    
      const date = new Date(timestamp);
    
      // Obtener los componentes de la fecha
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Meses comienzan en 0
      const day = String(date.getDate()).padStart(2, '0');
    
      // Obtener los componentes de la hora
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
    
      // Formato personalizado
      return `${year}-${month}-${day} ${hours}:${minutes}`;
    }

    const superChoco = `
      query MyQuery {
        tokenActivities(
          activityFilter: {tokenType: Consumable, tokenId: "3"}
          includedActivities: SettleListing
        ) {
          results {
            actionId
            actionName
            data {
              ... on MatchOrder {
                settleQuantity
                settlePrice
                matcherProfile {
                  name
                  accountId
                }
                makerProfile {
                  name
                  accountId
                }
              }
            }
            timestamp
          }
        }
      }
    `;

    const responseActivitySuperChoco = await fetchData(apiUrl, superChoco)

    const ActivitySuperChoco = responseActivitySuperChoco.data.tokenActivities.results.map(
      (result) => 
      {
        return{
          actionId: result.actionId,
          img: meoToken,
          quantity: result.data.settleQuantity,
          priceEth: Number(result.data.settlePrice / 1e18).toFixed(8),
          priceUsd: Number((result.data.settlePrice / 1e18) * exchangeRate).toFixed(8),
          buyName: result.data.matcherProfile.name,
          sellName: result.data.makerProfile.name,
          date: formatTimestampToDateTime(result.timestamp)
        }
      }
    )

    // Retorna todos los resultados paginados
    return NextResponse.json(ActivitySuperChoco);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}