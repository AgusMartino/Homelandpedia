import { NextResponse } from "next/server";
import cocochocogif from '@/img/Cocochoco.gif'
import Premiumcocochocogif from '@/img/PremiumCocochoco.gif'
import Supercocochocogif from '@/img/SuperCocochoco.gif'
import DarkFlamegif from '@/img/DarkFlame.gif'
import mementoAqua from '@/img/aquatic.gif'
import mementoPlant from '@/img/plant.gif'

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

    const consumable = `
      query MyQuery {
        erc1155Tokens(tokenType: Consumable) {
          results {
            name
            imageUrl
            description
            minPrice
            tokenId
          }
        }
      }
    `;

    const responseConsumable = await fetchData(apiUrl, consumable)

    const ArrayConsumable = responseConsumable.data.erc1155Tokens.results.map(
      (result) => 
      {
        console.log('map OK 1')
        return{
          name: result.name,
          img: result.imageUrl,
          priceUsd: Number((result.minPrice / 1e18) * exchangeRate).toFixed(4),
          priceEth: Number(result.minPrice / 1e18).toFixed(8),
          tokenId: result.tokenId,
          recipe: {
            items: [],
            fee: "",
            total:""
          }
        }
      }
    )

    const material = `
      query MyQuery {
        erc1155Tokens(tokenType: Material, tokenIds: ["1112396529664","1116691496960"]) {
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

    const responseMaterial = await fetchData(apiUrl, material)
    const FinalMaterials = responseMaterial.data.erc1155Tokens.results.map(
      (result) => {
        console.log('map OK 2')
        return{
          name: result.name,
          img: result.imageUrl,
          minprinceEth: (result.minPrice / 1e18).toFixed(8),
        }

      }
    )

    const mementoAquaPriceEth = FinalMaterials.find(material => material.name === "Aquatic Memento")?.minprinceEth
    console.log('info', mementoAquaPriceEth)
    const mementoPlantPriceEth = FinalMaterials.find(material => material.name === "Plant Memento")?.minprinceEth
    console.log('info', mementoPlantPriceEth)
    const cocochocoPriceEth = ArrayConsumable.find(consumable => consumable.name === "Cocochoco")?.priceEth
    console.log('info', cocochocoPriceEth)
    const PremiumCocochocoPriceEth = ArrayConsumable.find(consumable => consumable.name === "Premium Cocochoco")?.priceEth
    console.log('info', PremiumCocochocoPriceEth)
    console.log('eth', exchangeRate)


    ArrayConsumable.forEach(element => {

      if(element.name == "Cocochoco"){
        element.img = cocochocogif
      }
      if(element.name == "Premium Cocochoco"){
        element.img = Premiumcocochocogif
      }
      if(element.name == "Super Cocochoco"){
        element.img = Supercocochocogif
        element.recipe.items = [
          {
            name:"Premium Cocochoco",
            img: Premiumcocochocogif,
            quantity:10,
            priceUsd: (PremiumCocochocoPriceEth * 10 * exchangeRate).toFixed(4),
            priceEth: (PremiumCocochocoPriceEth * 10).toFixed(4)
          },
          {
            name:"Cocochoco",
            img: cocochocogif,
            quantity:40,
            priceUsd: ((cocochocoPriceEth) * 40 * exchangeRate).toFixed(4),
            priceEth: ((cocochocoPriceEth) * 40).toFixed(4)
          }
        ]
        element.recipe.fee = 2.5
        element.recipe.total = (
          (PremiumCocochocoPriceEth * 10 * exchangeRate) +
          (cocochocoPriceEth * 40 * exchangeRate) +
          1.5
        ).toFixed(4);
      }
      if(element.name == "Dark Flame"){
        element.img = DarkFlamegif
        element.recipe.items = [
          {
            name:"Premium Cocochoco",
            img: Premiumcocochocogif,
            quantity: 2,
            priceUsd: (((PremiumCocochocoPriceEth) * 2) * exchangeRate).toFixed(4),
            priceEth: ((PremiumCocochocoPriceEth) * 2).toFixed(4)
          },
          {
            name:"Plant Memento",
            img: mementoPlant,
            quantity: 100,
            priceUsd: ((mementoPlantPriceEth * 100) * exchangeRate).toFixed(4),
            priceEth: (mementoPlantPriceEth * 100).toFixed(4)
          },
          {
            name:"Aquatic Memento",
            img: mementoAqua,
            quantity: 50,
            priceUsd: ((mementoAquaPriceEth * 50) * exchangeRate).toFixed(4),
            priceEth: (mementoAquaPriceEth * 50).toFixed(4)
          }
        ]
        element.recipe.fee = 1.5
        element.recipe.total = (
          (mementoAquaPriceEth * 50 * exchangeRate) +
          (mementoPlantPriceEth * 100 * exchangeRate) +
          (PremiumCocochocoPriceEth * 2 * exchangeRate) +
          1.5
        ).toFixed(4);
      }
    })


    


    // Retorna todos los resultados paginados
    return NextResponse.json(ArrayConsumable);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}