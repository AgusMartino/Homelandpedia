import { speedDialActionClasses } from "@mui/material";
import { RESPONSE_LIMIT_DEFAULT } from "next/dist/server/api-utils";
import { NextResponse } from "next/server";
import { title } from "process";

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
          class
          id
          parts {
            class
            id
            name
            type
            stage
            specialGenes
          }
          axpInfo {
            level
          }
          title
        }
      }
    `;

    const responseAxie = await fetchData(apiUrl, axie);

    let points = 0
    let typeAxie = ""
    let fatigueAxie = 0




    responseAxie.data.axie.parts.forEach(element => {
      const stage = element.stage
      const specialGenes = element.specialGenes

      if(stage == 2){
        if(specialGenes == null){
          points = points + 1
        }
        if(specialGenes == "Mystic"){
          points = points + 4
          typeAxie = "Mystic"
        }
        if(specialGenes == "Japan"){
          points = points + 2
          typeAxie = "Japan"
        }
        if(specialGenes == "Summer2022"){
          points = points + 2
          if(typeAxie == ""){
            typeAxie = "Summer"
          }
        }
        if(specialGenes == "Xmas"){
          points = points + 2
          typeAxie = "Xmas"
        }
        if(specialGenes == "Shiny"){
          points = points + 3
          typeAxie = "Shiny"
        }
        if(specialGenes == "Bionic"){
          points = points + 5
        }
      } else{
        if(specialGenes == "Mystic"){
          typeAxie = "Mystic"
        }
        if(specialGenes == "Japan"){
          typeAxie = "Japan"
        }
        if(specialGenes == "Summer2022"){
          if(typeAxie == ""){
            typeAxie = "Summer"
          }
        }
        if(specialGenes == "Xmas"){
          typeAxie = "Xmas"
        }
        if(specialGenes == "Shiny"){
          typeAxie = "Shiny"
        }
      }
    });

    if(typeAxie == "" && responseAxie.data.axie.title == "Origin"){
      points = points + 11
      typeAxie = responseAxie.data.axie.title
    }
    if(typeAxie == "" && responseAxie.data.axie.title == "MEO Corp" || responseAxie.data.axie.title == "MEO Corp II"){
      points = points + 8
      typeAxie = responseAxie.data.axie.title
    }
    if(typeAxie == "" && responseAxie.data.axie.title == "Agamogenesis"){
      points = points + 15
      typeAxie = responseAxie.data.axie.title
    }
    if(typeAxie == "Shiny" && responseAxie.data.axie.title == ""){
      points = points + 3
    }
    if(typeAxie == "Xmas" && responseAxie.data.axie.title == ""){
      points = points + 3
    }
    if(typeAxie == "Summer" && responseAxie.data.axie.title == ""){
      points = points + 1
    }
    if(typeAxie == "Japan" && responseAxie.data.axie.title == ""){
      points = points + 2
    }
    if(typeAxie == "Mystic" && responseAxie.data.axie.title == "Origin"){
      points = points + 12
    }

    if(responseAxie.data.axie.axpInfo.level <= 19){
      fatigueAxie = 3
    }else if(responseAxie.data.axie.axpInfo.level <= 29){
      fatigueAxie = 4
    }else if(responseAxie.data.axie.axpInfo.level <= 39){
      fatigueAxie = 5
    }else if(responseAxie.data.axie.axpInfo.level <= 49){
      fatigueAxie = 6
    }else if(responseAxie.data.axie.axpInfo.level <= 59){
      fatigueAxie = 7
    }else if(responseAxie.data.axie.axpInfo.level == 60){
      fatigueAxie = 8
    }

    const Axie = {
      Id: axieId,
      parts: responseAxie.data.axie.parts,
      class: responseAxie.data.axie.class,
      level: responseAxie.data.axie.axpInfo.level,
      Type: typeAxie,
      pointsAxie: points,
      fatigue: fatigueAxie,
      img: "https://axiecdn.axieinfinity.com/axies/"+axieId+"/axie/axie-full-transparent.png"
    }



    return NextResponse.json(Axie);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
