"use client";
import Link from 'next/link';
import { Box, Typography, Card, CardContent } from "@mui/joy";

export default function gemaInterface() {
  return (
    <Box sx={{ padding: 4, maxWidth: 1000, margin: "0 auto", justifyContent: "center", alignContent: "center", alignItems: "center", display: "flex", flexDirection: "column", }}>
      {/* Subtítulo */}
      <Typography level="h2" sx={{ marginBottom: 2 }}>
        Ancient Coin
      </Typography>

      {/* Imagen */}
      <Box
        component="img"
        src="/image/ancientcoin.jpg" // Cambia esto por la ruta de tu imagen
        alt="interface"
        sx={{
          width: "100px",
          height: "100px",
          borderRadius: 8,
          marginBottom: 4,
        }}
      />

      <Box sx={{ textAlign: 'left' }}>
        <Typography level="body1" sx={{ marginBottom: 1 }}>
          Ancient coin is a in-game token that can be use to mint mAXS, re-roll moonfall quest or change your Land property
        </Typography>

        <Typography level="body3" sx={{ marginBottom: 1 }}>
          Conversion rate for Ancient Coins into mAXS will always be 1:1
        </Typography>

        <Typography level="body3" sx={{ marginBottom: 1 }}>
          Ancient Coins can be earned as a reward every time players complete a normal task like gathering, crafting, achieving victory in battle, Moonfall, and more, including quests and events.
        </Typography>
      </Box>

      <Typography level="h2" sx={{ marginTop: 3 ,marginBottom: 1 }}>
        How to Earn Ancient Coins
      </Typography>

      <Box sx={{ textAlign: 'left' }}>
        <Typography level="body1" sx={{ marginBottom: 2 }}>
          The Token Loop expands the spectrum for Homeland potential earnings via active gameplay -- introducing steady ways to earn tokens. 
          To better understand the earnings concept, let is divide them into two main earning mechanics: Normal Earning and Special Earning.
        </Typography>
        <Typography level="h4" sx={{marginBottom: 1 }}>
          Normal Earning
        </Typography>
        <Typography level="body1" sx={{ marginBottom: 1 }}>
          Normal earning is a type of token earning mechanism that rewards users for standard actions in the game. 
          Whether it is gathering, producing, or crafting, each qualified action contributes to a steady flow of earnings.
        </Typography>
        <Typography level="body1" sx={{ marginBottom: 3 }}>
          Normal Earnings are capped daily. The daily normal earning cap limit of Ancient Coins for each Land plot is determined by nature type. 
          This means that the potential mAXS rewards that can be normally earned on a daily basis vary based on which plot types are owned or delegated. 
          The cap limit for each plot is shown below:
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: "50%", marginBottom: 2 }}>
          {/* Header */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', borderBottom: '1px solid', pb: 1 }}>
            <Typography sx={{ flex: 1 }}>Nature Type</Typography>
            <Typography sx={{ flex: 1 }}>Ancient Coins Daily Capacity for Normal Earning</Typography>
          </Box>

          {/* Rows */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid', pb: 1 }}>
            <Typography sx={{ flex: 1 }}>Genesis</Typography>
            <Typography sx={{ flex: 1 }}>17,495</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid', pb: 1 }}>
            <Typography sx={{ flex: 1 }}>Mystic</Typography>
            <Typography sx={{ flex: 1 }}>878</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid', pb: 1 }}>
            <Typography sx={{ flex: 1 }}>Arctic</Typography>
            <Typography sx={{ flex: 1 }}>396</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid', pb: 1 }}>
            <Typography sx={{ flex: 1 }}>Forest</Typography>
            <Typography sx={{ flex: 1 }}>139</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography sx={{ flex: 1 }}>Savannah</Typography>
            <Typography sx={{ flex: 1 }}>43</Typography>
          </Box>
        </Box>
        <Typography level="body1" sx={{ marginBottom: 2 }}>
          For more information go to
          <Typography
            component="span"
            sx={{
              color: "inherit", // Hereda el color del texto del contenedor
              textDecoration: "none", // Quita el subrayado por defecto
              "&:hover": {
                textDecoration: "underline", // Subraya al pasar el cursor
                color: "#808080", // Cambia el color al grisado
              },
            }}
          >
            <Link href="/landTypes" passHref legacyBehavior>
              <a 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ margin: "0 8px" }} // Margen de 8px a los lados
              >
                Lands Types
              </a>
            </Link>
          </Typography>
        </Typography>
        
        <Typography level="h4" sx={{marginBottom: 1 }}>
          Special Earning
        </Typography>
        <Typography level="body1" sx={{ marginBottom: 1 }}>
          Special earning is a type of token earning mechanism that is not affected by the Daily Cap and is only rewarded from special actions/events/triggers such as Moonfall and through events.
        </Typography>
        <Typography level="body1" sx={{ marginBottom: 1 }}>
          The amount of token rewarded from special earnings is not affected by the plots daily cap of normal earnings and will have its own cap/prize pool depending on the specific mechanics. More information in
          <Typography
            component="span"
            sx={{
              color: "inherit", // Hereda el color del texto del contenedor
              textDecoration: "none", // Quita el subrayado por defecto
              "&:hover": {
                textDecoration: "underline", // Subraya al pasar el cursor
                color: "#808080", // Cambia el color al grisado
              },
            }}
          >
            <Link href="/moonfallSystem" passHref legacyBehavior>
              <a 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ margin: "0 8px" }} // Margen de 8px a los lados
              >
                Moonfall Reward System
              </a>
            </Link>
          </Typography>  
        </Typography>
      </Box>

      <Typography level="h2" sx={{ marginTop: 3 ,marginBottom: 1 }}>
        How to Mint mAXS
      </Typography>

      <Box sx={{ textAlign: 'left' }}>
        <Typography level="body1" sx={{ marginBottom: 1 }}>
          In order to mint mAXS, you will need to exchange Ancient Coins.
        </Typography>

        <Typography level="body3" sx={{ marginBottom: 1 }}>
          This has a minimum of 100 mAXS and a limit of 3,000,000 mAXS per exchange. You can make an exchange once every 30 minutes.
        </Typography>

        <Typography level="body3" sx={{ marginBottom: 1 }}>
          Follow the steps below to exchange your Ancient Coins and mint mAXS:
        </Typography>

        <Typography level="h4" sx={{marginBottom: 1 }}>
          Step 1. Go to the Earning Logs menu, and go to the Lockbox by pressing the icon below.
        </Typography>

        {/* Imagen */}
        <Box
          component="img"
          src="/image/step1AncientCoin.jpg" // Cambia esto por la ruta de tu imagen
          alt="interface"
          sx={{
            width: "700px",
            height: "400px",
            borderRadius: 8,
            marginBottom: 4,
          }}
        />

        <Typography level="h4" sx={{marginBottom: 1 }}>
          Step 2. Set the amount of mAXS that you would like to Exchange with your Ancient Coins.
        </Typography>

        {/* Imagen */}
        <Box
          component="img"
          src="/image/step2AncientCoin.jpg" // Cambia esto por la ruta de tu imagen
          alt="interface"
          sx={{
            width: "400px",
            height: "500px",
            borderRadius: 8,
            marginBottom: 4,
          }}
        />

        <Typography level="h4" sx={{marginBottom: 1 }}>
          Step 3. Confirm the amount on the Exchange Token popup window.
        </Typography>

        {/* Imagen */}
        <Box
          component="img"
          src="/image/step3AncientCoin.jpg" // Cambia esto por la ruta de tu imagen
          alt="interface"
          sx={{
            width: "700px",
            height: "400px",
            borderRadius: 8,
            marginBottom: 4,
          }}
        />

        <Typography level="body3" sx={{ marginBottom: 1 }}>
          You will be able to see all your mAXS that have been verified and minted in the In-game Exchange Log situated next to the Token Exchange section. 
          Also you will see when you can able to claim the mAXS minted
        </Typography>

        {/* Imagen */}
        <Box
          component="img"
          src="/image/step4AncientCoin.jpg" // Cambia esto por la ruta de tu imagen
          alt="interface"
          sx={{
            width: "700px",
            height: "400px",
            borderRadius: 8,
            marginBottom: 4,
          }}
        />

        <Typography level="body3" sx={{ marginBottom: 1 }}>
          To claim the mAXS minted you will go to Claim tokens and you will see the AXS or mAXS that you can claim at the moment.
        </Typography>

        {/* Imagen */}
        <Box
          component="img"
          src="/image/step5AncientCoin.jpg" // Cambia esto por la ruta de tu imagen
          alt="interface"
          sx={{
            width: "700px",
            height: "400px",
            borderRadius: 8,
            marginBottom: 4,
          }}
        />

        {/* Imagen */}
        <Box
          component="img"
          src="/image/step6AncientCoin.jpg" // Cambia esto por la ruta de tu imagen
          alt="interface"
          sx={{
            width: "700px",
            height: "400px",
            borderRadius: 8,
            marginBottom: 4,
          }}
        />

        
      </Box>
    </Box>
  );
}

