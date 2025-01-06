"use client";
import Link from "next/link";
import { Box, Typography, Card, CardContent } from "@mui/joy";

export default function GemaInterface() {
  return (
    <Box
      sx={{
        padding: 4,
        maxWidth: 1000,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: 3, // Espaciado uniforme entre elementos
        alignItems: "center", // Todo centrado por defecto
      }}
    >
      {/* Subtítulo */}
      <Typography level="h2" sx={{ marginBottom: 1, textAlign: "center" }}>
        How to Generate Gold
      </Typography>

      <Typography level="h3" sx={{ textAlign: "center" }}>
        It is one of the most important resources in the game because with it you can buy materials, objects and level up structures.
      </Typography>

      {/* Sección alineada a la izquierda */}
      <Box
        sx={{
          width: "100%", // Para asegurar que use todo el ancho disponible
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start", // Alineación a la izquierda
          textAlign: "left",
          paddingLeft: 2, // Espaciado opcional a la izquierda
        }}
      >
        <Typography level="h4" sx={{ marginBottom: 2 }}>
          1 - Sell Equipment and Consumables to Axies in the Passive Adventure
        </Typography>
        
        <Typography level="body1" sx={{ marginBottom: 2 }}>
          You will be able to sell equipment and consumables to the axies in exchange for gold, depending on the level and rarity of the equipment and consumable, you will get more or less gold and in the same way if the shops are high or low level.
        </Typography>

        {/* Imagen */}
        <Box
          component="img"
          src="/image/gold.jpg" // Cambia esto por la ruta correcta
          alt="Adventure Interface"
          sx={{
            width: "100%",
            height: "500px",
            borderRadius: 8,
            marginBottom: 2
          }}
        />

        <Typography level="h3" sx={{ marginBottom: 2 }}>
          2 - Complete the Daily and Weekly quest
        </Typography>
        
        <Typography level="body1" sx={{ marginBottom: 2 }}>
          When you complete the daily quest, if you have a Forest Land you will gerenate approximately 1500 of gold all the days, and 6600 of gold all the weeks
        </Typography>
        
        <Box
          component="img"
          src="/image/gold2.jpg" // Cambia esto por la ruta correcta
          alt="Adventure Interface"
          sx={{
            width: "100%",
            height: "500px",
            borderRadius: 8,
            marginBottom: 2
          }}
        />

        <Typography level="h3" sx={{ marginBottom: 2 }}>
          3 - Participate in the Adventure Leaderboard
        </Typography>
        
        <Typography level="body1" sx={{ marginBottom: 2 }}>
          This leader lasts a week, where based on the floors that the teams or axies go through, it generates points and places you in the leader, weekly rewards are given in all of them, they provide gold based on what position you were in
        </Typography>
        
        <Box
          component="img"
          src="/image/gold3.jpg" // Cambia esto por la ruta correcta
          alt="Adventure Interface"
          sx={{
            width: "100%",
            height: "500px",
            borderRadius: 8,
            marginBottom: 2
          }}
        />
        <Box
          component="img"
          src="/image/gold4.jpg" // Cambia esto por la ruta correcta
          alt="Adventure Interface"
          sx={{
            width: "100%",
            height: "500px",
            borderRadius: 8,
            marginBottom: 2
          }}
        />

        <Typography level="h3" sx={{ marginBottom: 2 }}>
          4 - Sell Material and Equipment in the Auction House
        </Typography>
        
        <Typography level="body1" sx={{ marginBottom: 2 }}>
          The Auction House is where materials and equipment are sold. Here you can search for the most needed materials such as platinum dust or iron. This way, apart from doing the Moonfall missions, we will be able to dedicate ourselves to gathering or producing these materials to obtain more gold.
        </Typography>
        
        <Box
          component="img"
          src="/image/gold5.jpg" // Cambia esto por la ruta correcta
          alt="Adventure Interface"
          sx={{
            width: "100%",
            height: "500px",
            borderRadius: 8,
            marginBottom: 2
          }}
        />

        <Typography level="body1" sx={{ marginBottom: 2 }}>
          We can also obtain more materials (double or triple) if we use the alchemist to lower their rarity and sell in larger quantities. In case you see that there is no difference in selling one rarity and the other
        </Typography>

        <Box
          component="img"
          src="/image/gold6.jpg" // Cambia esto por la ruta correcta
          alt="Adventure Interface"
          sx={{
            width: "100%",
            height: "500px",
            borderRadius: 8,
            marginBottom: 2
          }}
        />
        
      </Box>
    </Box>
  );
}
