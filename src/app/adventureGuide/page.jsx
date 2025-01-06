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
        Axie Homeland Adventure System
      </Typography>

      <Typography level="body1" sx={{ textAlign: "center" }}>
        Used to sell food and equipment to the listed axies who can participate
        in the weekly leaderboard.
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
        <Typography level="h3" sx={{ marginBottom: 2 }}>
          Introducing basic concepts
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            marginBottom: 2,
          }}
        >
          {/* Círculo */}
          <Box
            sx={{
              width: "6px",
              height: "6px",
              backgroundColor: "white",
              borderRadius: "50%",
              flexShrink: 0,
            }}
          />
          <Typography level="body2">Axie Classes in the Passive Adventure Mode</Typography>
        </Box>
        

        {/* Imagen */}
        <Box
          component="img"
          src="/image/adventure.jpg" // Cambia esto por la ruta correcta
          alt="Adventure Interface"
          sx={{
            width: "800px",
            height: "500px",
            borderRadius: 8,
            marginBottom: 2
          }}
        />

        <Typography level="body1" sx={{ marginBottom: 2 }}>
          The class of each Axie you own will be the one used in the Axie Adventure. This means you can strategically build your team based on your Axies classes, adding a fresh layer of strategy and customization to your gameplay
        </Typography>
        
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            marginBottom: 2,
          }}
        >
          {/* Círculo */}
          <Box
            sx={{
              width: "6px",
              height: "6px",
              backgroundColor: "white",
              borderRadius: "50%",
              flexShrink: 0,
            }}
          />
          <Typography level="body2">Interface Guie</Typography>
        </Box>
        {/* Imagen */}
        <Box
          component="img"
          src="/image/adventureGuie.jpg" // Cambia esto por la ruta correcta
          alt="Adventure Interface"
          sx={{
            width: "100%",
            height: "500px",
            borderRadius: 8,
            marginBottom: 2
          }}
        />

        {/* Detalles */}
        <Card sx={{ marginBottom: 3 }}>
          <CardContent>
            {[
              "1. Equipment - Used to sell all the equipment to the axie. Depending on the level of your survivor shop, you will have more slots to sell more equipment",
              "2. Consumables - Used to sell all the consumables to the axie. Depending on the level of your consumer shop, you will have more slots to sell more food, potions or shells",
              "3. Battle Tickets - Used to send axies on an adventure. One ticket means that you can send One axie. Depending on the level of the plot and the shops, the time in which you obtain battle tickets decreases and the maximum amount you can have increases.",
              "4. Select if you want to send only one axie or in a team of three axies",
              "5. Stress Limit - Reflecting the Axie mental state in battle. The battle will end once this stat hits 0",
              "6. Health - Health value of the Axie. When this stat hits 0, the axie will be defeated",
              "7. Energy - The Axie need this resource to use their skill",
              "8. Power - The Axie overall ability to deal damage. Affecting Attack/Magic Attack and Energy",
              "9. Endurance - Axie ability to endure all incoming attacks. Affecting HP, Defense, and All Resistance",
              "10. Dexterity - The ability to create serious strikes. Affecting Accuracy and Critical Chance",
              "11. Agility - A shadow on the battlefield, always one step ahead. Affecting Attack Speed and Dodge",
              "12. Stats - You can view the Axie statistics",
              "13. Initial Floor - You can select in which floor the axie starts the adventure. It is always advisable to start on the first floor.",
              "14. Start Counter - When you press the button, you start the count to the 20 runs to the weekly leaderboard",
              "15. Send - When you press the send button, you will send the axie with the equipment to the adventure",
              "16. Enlist - Use to select the axies that you will use for the Adventure",
            ].map((text, index) => (
              <Typography level="body2" sx={{ marginBottom: 1 }} key={index}>
                {text}
              </Typography>
            ))}
          </CardContent>
        </Card>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            marginBottom: 2,
          }}
        >
          {/* Círculo */}
          <Box
            sx={{
              width: "6px",
              height: "6px",
              backgroundColor: "white",
              borderRadius: "50%",
              flexShrink: 0,
            }}
          />
          <Typography level="body2">Managing NFT Axies</Typography>
        </Box>

        <Typography level="body1" sx={{ marginBottom: 2 }}>
          Axies can be sent to battle in an adventure while being assigned as workers. But while these axies are in an adventure, AXP will not be given from the other activities (i.e. as a worker). It will only earn AXP from the adventure.
        </Typography>
        <Typography level="body1" sx={{ marginBottom: 2 }}>
          To enlist the axies, press the button enlist if you have some axies or press the button of Adventure station in the expand menu and see the video guie
        </Typography>
        <Box
            sx={{
              width: "100%",
              maxWidth: "1200px",
              height: { xs: "auto", md: "700px" },
              backgroundColor: "neutral.100",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "lg",
              borderRadius: "lg",
              overflow: "hidden",
              marginBottom: 3
            }}
        >
          <video controls style={{ width: "100%", height: "100%", borderRadius: "8px" }}>
            <source src="/image/EnlistAxie.mp4" type="video/mp4" />
            Tu navegador no soporta la reproducción de videos.
          </video>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            marginBottom: 2,
          }}
        >
          {/* Círculo */}
          <Box
            sx={{
              width: "6px",
              height: "6px",
              backgroundColor: "white",
              borderRadius: "50%",
              flexShrink: 0,
            }}
          />
          <Typography level="body2">Axie Adventure Mechanics</Typography>
        </Box>

        <Typography level="body1" sx={{ marginBottom: 2 }}>
          Sending your Axies on an adventure is simple, but gearing them up for success is where the real preparation begins! Equip your Axies to maximize their performance and clear as many stages as possible.
        </Typography>
        <Typography level="body1" sx={{ marginBottom: 2 }}>
          After sending your Axies on an adventure, you'll need to wait until they finish their current battles before you can send them out again.
        </Typography>
        <Box
            sx={{
              width: "100%",
              maxWidth: "1200px",
              height: { xs: "auto", md: "700px" },
              backgroundColor: "neutral.100",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "lg",
              borderRadius: "lg",
              overflow: "hidden",
              marginBottom: 3
            }}
        >
          <video controls style={{ width: "100%", height: "100%", borderRadius: "8px" }}>
            <source src="/image/AxieAdventure.mp4" type="video/mp4" />
            Tu navegador no soporta la reproducción de videos.
          </video>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            marginBottom: 2,
          }}
        >
          {/* Círculo */}
          <Box
            sx={{
              width: "6px",
              height: "6px",
              backgroundColor: "white",
              borderRadius: "50%",
              flexShrink: 0,
            }}
          />
          <Typography level="body2">Axie Combat Level</Typography>
        </Box>

        <Typography level="body1" sx={{ marginBottom: 2 }}>
          Your Axies combat level will align with its core level, affecting both its combat stats and adventure fatigue (more about adventure fatigue below).
        </Typography>
        <Typography level="body1" sx={{ marginBottom: 2 }}>
          Combat levels will be capped based on the Atia Level of the plot. For example, if a plot has an Atia Level of 2, the combat level is capped at 10. This means a level 60 Axie will be treated as level 10 in combat stats within that plot.
        </Typography>
        {/* Imagen */}
        <Box
          component="img"
          src="/image/adventure2.jpg" // Cambia esto por la ruta correcta
          alt="Adventure Interface"
          sx={{
            width: "100%",
            height: "500px",
            borderRadius: 8,
            marginBottom: 2
          }}
        />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            marginBottom: 2,
          }}
        >
          {/* Círculo */}
          <Box
            sx={{
              width: "6px",
              height: "6px",
              backgroundColor: "white",
              borderRadius: "50%",
              flexShrink: 0,
            }}
          />
          <Typography level="body2">Axie Adventure Fatigue</Typography>
        </Box>

        <Typography level="body1" sx={{ marginBottom: 2 }}>
          Adventure fatigue functions like a stamina mechanic, limiting how often players can use an Axie in the Passive Adventure each day.
        </Typography>
        <Typography level="body1" sx={{ marginBottom: 2 }}>
          The amount of adventure fatigue an Axie can have depends on its core level. The higher an Axies core level, the more adventures it can do daily. The fatigue will be reset at 00:00 UTC
        </Typography>
        {/* Imagen */}
        <Box
          component="img"
          src="/image/adventure3.jpg" // Cambia esto por la ruta correcta
          alt="Adventure Interface"
          sx={{
            width: "100%",
            height: "500px",
            borderRadius: 8,
            marginBottom: 2
          }}
        />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            marginBottom: 2,
          }}
        >
          {/* Círculo */}
          <Box
            sx={{
              width: "6px",
              height: "6px",
              backgroundColor: "white",
              borderRadius: "50%",
              flexShrink: 0,
            }}
          />
          <Typography level="body2">Evolved Rating and Combat Quality</Typography>
        </Box>

        <Typography level="body1" sx={{ marginBottom: 2 }}>
          your Axies combat quality will be determined by its evolved rating. Evolved ratings is a score system that is given to an axie when they have been evolved, with different collectible Axie types receiving different ratings. This also means MOAR utility for collectible axie!
        </Typography>
        <Typography level="body1" sx={{ marginBottom: 2 }}>
          Evolved ratings come in two types: Base Ratings and Part Evolved Ratings.
        </Typography>
        <Typography level="body1" sx={{ marginBottom: 2 }}>
          Base Ratings: This is a one-time score given to a specific type of Collectible Axie without having any parts evolved.
        </Typography>
        <Typography level="body1" sx={{ marginBottom: 2 }}>
          Part Evolved Ratings: This score depends on the types and number of collection parts an Axie has evolved.
        </Typography>
        {/* Imagen */}
        <Box
          component="img"
          src="/image/adventure4.jpg" // Cambia esto por la ruta correcta
          alt="Adventure Interface"
          sx={{
            width: "700px",
            height: "700px",
            borderRadius: 8,
            marginBottom: 2
          }}
        />
        <Typography level="body1" sx={{ marginBottom: 2 }}>
          You will be able to se the rarity of your axie with the Tool:
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
            <Link href="/axieAdventureCalculator" passHref legacyBehavior>
              <a 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ margin: "0 8px" }} // Margen de 8px a los lados
              >
                Axie Adventure Calculator
              </a>
            </Link>
          </Typography>
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            marginBottom: 2,
          }}
        >
          {/* Círculo */}
          <Box
            sx={{
              width: "6px",
              height: "6px",
              backgroundColor: "white",
              borderRadius: "50%",
              flexShrink: 0,
            }}
          />
          <Typography level="body2">Power Rate & Account/Plot Progression</Typography>
        </Box>

        <Typography level="body1" sx={{ marginBottom: 2 }}>
          In Axie Adventure, each axie will have a Power Rate, which represents the axies strength based on its current stats for the Adventure. These stats are an accumulation of the axies basic attributes from its level, combat quality multiplier, and the equipment assigned to it.
        </Typography>
        <Typography level="body1" sx={{ marginBottom: 2 }}>
          For every axie sent on an adventure with a Power Rate of at least 200,000, the account and plot progress bar will increase by one point (with a maximum of 7).
        </Typography>
        {/* Imagen */}
        <Box
          component="img"
          src="/image/adventure5.jpg" // Cambia esto por la ruta correcta
          alt="Adventure Interface"
          sx={{
            width: "100%",
            height: "500px",
            borderRadius: 8,
            marginBottom: 2
          }}
        />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            marginBottom: 2,
          }}
        >
          {/* Círculo */}
          <Box
            sx={{
              width: "6px",
              height: "6px",
              backgroundColor: "white",
              borderRadius: "50%",
              flexShrink: 0,
            }}
          />
          <Typography level="body2">Battle Tickets</Typography>
        </Box>

        <Typography level="body1" sx={{ marginBottom: 2 }}>
          Aside from needing NFT Axies, players will also need battle tickets to send their Axies on Adventure. Each plot will have battle tickets that regenerate over time. Each time players send an Axie on a Passive Adventure, a battle ticket will be used.
        </Typography>
        <Typography level="body1" sx={{ marginBottom: 2 }}>
          The capacity and recovery time for battle tickets depend on the plot type and the Account/Plot Progression.
        </Typography>
        {/* Imagen */}
        <Box
          component="img"
          src="/image/adventure6.jpg" // Cambia esto por la ruta correcta
          alt="Adventure Interface"
          sx={{
            width: "800px",
            height: "100px",
            borderRadius: 8,
            marginBottom: 2
          }}
        />

      </Box>
    </Box>
  );
}
