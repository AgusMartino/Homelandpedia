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
  const body = await request.json();
  const { axieId } = body;
  const apiUrl = "https://api-gateway.skymavis.com/graphql/axie-marketplace";

  try {
    const axie = `
        query MyQuery {
            axie(axieId: "${axieId}") {
                axpInfo {
                level
                xp
                xpToAscend
                }
                breedCount
                bodyShape
                class
                image
                minPrice
                parts {
                type
                class
                }
                order {
                currentPrice
                currentPriceUsd
                }
            }
        }
    `;

    const responseAxie = await fetchData(apiUrl, axie);

    const finalResponse = {
        axieId: axieId,
        axpinfo: responseAxie.data.axie.axpInfo,
        breedCount: responseAxie.data.axie.breedCount,
        class: responseAxie.data.axie.class,
        img: "https://axiecdn.axieinfinity.com/axies/"+axieId+"/axie/axie-full-transparent.png",
        parts: responseAxie.data.axie.parts,
        priceEth: responseAxie.data.axie.order !== null 
        ? (responseAxie.data.axie.order.currentPrice / 1e18).toFixed(8) 
        : null,
        priceUsd: responseAxie.data.axie.order !== null 
        ? Number(responseAxie.data.axie.order.currentPriceUsd).toFixed(5) 
        : null,
    }

    return NextResponse.json(finalResponse);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
