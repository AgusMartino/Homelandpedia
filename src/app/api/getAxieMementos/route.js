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
  const apiUrl = "https://graphql-gateway.axieinfinity.com/graphql";

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

    let quantities = {
      aquatic: 0,
      beast: 0,
      bird: 0,
      bug: 0,
      dawn: 0,
      dusk: 0,
      mech: 0,
      plant: 0,
      reptile: 0
    };

    responseAxie.data.axie.parts.forEach(element => {
        const classpart = element.class

        if(classpart == "Aquatic"){
          quantities.aquatic = quantities.aquatic + 1
        }else if(classpart == "Beast"){
          quantities.beast = quantities.beast + 1
        }else if(classpart == "Bird"){
          quantities.bird = quantities.bird + 1
        }else if(classpart == "Bug"){
          quantities.bug = quantities.bug + 1
        }else if(classpart == "Dawn"){
          quantities.dawn = quantities.dawn + 1
        }else if(classpart == "Dusk"){
          quantities.dusk = quantities.dusk + 1
        }else if(classpart == "Mech"){
          quantities.mech = quantities.mech + 1
        }else if(classpart == "Plant"){
          quantities.plant = quantities.plant + 1
        }else if(classpart == "Reptile"){
          quantities.reptile = quantities.reptile + 1
        }

    });

    let levelCap = ""

    if(responseAxie.data.axie.axpInfo.level <= 9){
      levelCap = 1
    }else if (responseAxie.data.axie.axpInfo.level <= 19){
      levelCap = 10
    }else if (responseAxie.data.axie.axpInfo.level <= 29){
      levelCap = 20
    }else if (responseAxie.data.axie.axpInfo.level <= 39){
      levelCap = 30
    }else if (responseAxie.data.axie.axpInfo.level <= 49){
      levelCap = 40
    }else if (responseAxie.data.axie.axpInfo.level <= 59){
      levelCap = 50
    }else if (responseAxie.data.axie.axpInfo.level = 60){
      levelCap = 60
    }

    var classAxie = ""
    if(responseAxie.data.axie.class == "Aquatic"){
      classAxie = "aquatic"
    }else if(responseAxie.data.axie.class == "Beast"){
      classAxie = "beast"
    }else if(responseAxie.data.axie.class == "Bird"){
      classAxie = "bird"
    }else if(responseAxie.data.axie.class == "Bug"){
      classAxie = "bug"
    }else if(responseAxie.data.axie.class == "Dawn"){
      classAxie = "dawn"
    }else if(responseAxie.data.axie.class == "Dusk"){
      classAxie = "dusk"
    }else if(responseAxie.data.axie.class == "Mech"){
      classAxie = "mech"
    }else if(responseAxie.data.axie.class == "Plant"){
      classAxie = "plant"
    }else if(responseAxie.data.axie.class == "Reptile"){
      classAxie = "reptile"
    }

    const finalResponse = {
      axieId: axieId,
      img: "https://axiecdn.axieinfinity.com/axies/"+axieId+"/axie/axie-full-transparent.png",
      class: classAxie,
      level: levelCap,
      breed: responseAxie.data.axie.breedCount,
      priceEth: responseAxie.data.axie.order !== null 
      ? (responseAxie.data.axie.order.currentPrice / 1e18).toFixed(8) 
      : null,
      priceUsd: responseAxie.data.axie.order !== null 
      ? Number(responseAxie.data.axie.order.currentPriceUsd).toFixed(5) 
      : null,
      partQuantities: quantities
    }

    return NextResponse.json(finalResponse);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
