import { speedDialActionClasses } from "@mui/material";
import { RESPONSE_LIMIT_DEFAULT } from "next/dist/server/api-utils";
import { NextResponse } from "next/server";
import { title } from "process";
import aquaticGif from '@/img/aquatic.gif';
import beastGif from '@/img/beast.gif';
import birdGif from '@/img/bird.gif';
import bugGif from '@/img/bug.gif';
import dawnGif from '@/img/dawn.gif'
import duskGif from '@/img/dusk.gif';
import mechGif from '@/img/mech.gif';
import plantGif from '@/img/plant.gif';
import reptileGif from '@/img/reptile.gif';
import radiantGif from '@/img/radiant.gif';


/**src="https://cdn.axieinfinity.com/marketplace-website/asset-icon/part-icons/beast-eyes.png" */
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
        let img = ""
        if (result.name === 'Dawn Memento') {
          result.imageUrl = dawnGif;
        } else if (result.name === 'Beast Memento') {
          result.imageUrl = beastGif;
        } else if (result.name === 'Bug Memento') {
          result.imageUrl = bugGif;
        } else if (result.name === 'Bird Memento') {
          result.imageUrl = birdGif;
        } else if (result.name === 'Plant Memento') {
          result.imageUrl = plantGif;
        } else if (result.name === 'Aquatic Memento') {
          result.imageUrl = aquaticGif;
        } else if (result.name === 'Reptile Memento') {
          result.imageUrl = reptileGif;
        } else if (result.name === 'Mech Memento') {
          result.imageUrl = mechGif;
        } else if (result.name === 'Dusk Memento') {
          result.imageUrl = duskGif;
        } else if (result.name === 'Radiant Spirit Shell') {
          result.imageUrl = radiantGif;
        }
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



    let quatityMementosNeed = 0
    let quatityMementosNeedInstant = 0
    let evolvedQuantity = 0
    let fee = ""

    responseAxie.data.axie.parts.forEach(element => {
      if(element.stage == 2){
        evolvedQuantity += 1
      }
    });

    if(evolvedQuantity == 0){
      quatityMementosNeed = 100
      quatityMementosNeedInstant = 200
      fee = 2
    }else if(evolvedQuantity == 1){
      quatityMementosNeed = 200
      quatityMementosNeedInstant = 400
      fee = 4
    }else if(evolvedQuantity == 2){
      quatityMementosNeed = 300
      quatityMementosNeedInstant = 600
      fee = 8
    }else if(evolvedQuantity == 3){
      quatityMementosNeed = 450
      quatityMementosNeedInstant = 900
      fee = 12
    }else if(evolvedQuantity == 4){
      quatityMementosNeed = 675
      quatityMementosNeedInstant = 1350
      fee = 18
    }else if(evolvedQuantity == 5){
      quatityMementosNeed = 1013
      quatityMementosNeedInstant = 2025
      fee = 27
    }

    const Axie = {
      Id: axieId,
      parts: responseAxie.data.axie.parts,
      class: responseAxie.data.axie.class,
      level: responseAxie.data.axie.axpInfo.level,
      Type: responseAxie.data.axie.type,
      img: `https://axiecdn.axieinfinity.com/axies/${axieId}/axie/axie-full-transparent.png`,
    };
    
    // Asignar el resultado de map a Axie.parts
    Axie.parts = Axie.parts.map((element) => {
      let memento = null;
      let spiritShell = null;
      let image = "https://cdn.axieinfinity.com/marketplace-website/asset-icon/part-icons/" + 
            element.class.toLowerCase() + "-" + 
            element.type.toLowerCase() + ".png";
      if (element.stage === 1) {
        const partClass = `${element.class} Memento`;
        memento = Materialsdata.find(material => material.name === partClass);
    
        if (element.specialGenes) {
          spiritShell = Materialsdata.find(material => material.name === "Radiant Spirit Shell");
        }
      }
    
      return {
        class: element.class,
        id: element.id,
        name: element.name,
        img: image,
        type: element.type,
        stage: element.stage,
        specialGenes: element.specialGenes,
        evolved: element.stage === 1 && memento ? {
          mementoName: memento.name,
          mementoImg: memento.imageUrl,
          mementoPriceEth: memento?.minprinceEth || 0,
          mementoPriceUsd: memento?.minprinceUsd || 0,
          mementosQuantity: quatityMementosNeed,
          mementosQuantityInsta: quatityMementosNeedInstant,
          feeEvolved: fee,
          spiritShellNeed: spiritShell
        } : {
          message: "This part is already evolved",
        },
      };
    });

    return NextResponse.json(Axie);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
