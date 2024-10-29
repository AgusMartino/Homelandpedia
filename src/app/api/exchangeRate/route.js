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

    const exchangeRate = await fetchData(apiUrl,rate);

    // Retorna todos los resultados paginados
    return NextResponse.json(exchangeRate);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}