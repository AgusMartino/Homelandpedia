"use client";
import Link from 'next/link';
import { Box, Typography, Card, CardContent } from "@mui/joy";

export default function gemaInterface() {
  return (
    <Box sx={{ padding: 4, maxWidth: 1000, margin: "0 auto", justifyContent: "center", alignContent: "center", alignItems: "center", display: "flex", flexDirection: "column", }}>
      {/* Subtítulo */}
      <Typography level="h2" sx={{ marginBottom: 2 }}>
        Moonfall Reward System
      </Typography>

      {/* Imagen */}
      <Box
        component="img"
        src="/image/moonfall1.jpg" // Cambia esto por la ruta de tu imagen
        alt="interface"
        sx={{
          width: "800px",
          height: "500px",
          borderRadius: 8,
          marginBottom: 4,
        }}
      />

      <Box sx={{ textAlign: 'left' }}>
        <Typography level="body1" sx={{ marginBottom: 1 }}>
          Moonfall is a mechanic in-game where players will gain a very small chance to earn a very large amount of Ancient Coins at once by getting tickets from completing quests such as:
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, marginBottom: 1 }}>
          {/* Círculo */}
          <Box
            sx={{
              width: "6px", // Aseguramos el tamaño del círculo
              height: "6px",
              backgroundColor: "white", // Cambia el color aquí si es necesario
              borderRadius: "50%", // Hace que sea un círculo
              flexShrink: 0,
            }}
          />
          {/* Texto */}
          <Typography level="body2">Selling high rarity equipment to Adventurers.</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, marginBottom: 1 }}>
          {/* Círculo */}
          <Box
            sx={{
              width: "6px", // Aseguramos el tamaño del círculo
              height: "6px",
              backgroundColor: "white", // Cambia el color aquí si es necesario
              borderRadius: "50%", // Hace que sea un círculo
              flexShrink: 0,
            }}
          />
          {/* Texto */}
          <Typography level="body2">Gathering at high-level deposits.</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, marginBottom: 1 }}>
          {/* Círculo */}
          <Box
            sx={{
              width: "6px", // Aseguramos el tamaño del círculo
              height: "6px",
              backgroundColor: "white", // Cambia el color aquí si es necesario
              borderRadius: "50%", // Hace que sea un círculo
              flexShrink: 0,
            }}
          />
          {/* Texto */}
          <Typography level="body2">Producing and crafting high-rarity items.</Typography>
        </Box>
        <Typography level="body1" sx={{ marginBottom: 3 }}>
          The amount that you will earn from Moonfall is a fixed amount, depending on the tier of the chest you get.
        </Typography>

        <Typography level="h3" sx={{ marginBottom: 2 }}>
          Moonfall Chest Tiers
        </Typography>

        <Typography level="body1" sx={{ marginBottom: 3 }}>
          There are 3 different tiers of Moonfall chests that you can win, each containing a different amount of Ancient Coins.
        </Typography>

        <Typography level="h6" sx={{ marginBottom: 2 }}>
          Common Chest
        </Typography>

        <Box
          component="img"
          src="/image/moonfall2.jpg" // Cambia esto por la ruta de tu imagen
          alt="interface"
          sx={{
            width: "100px",
            height: "100px",
            borderRadius: 8,
            marginBottom: 4,
          }}
        />

        <Typography level="body1" sx={{ marginBottom: 1 }}>
          Contains 1,000 Ancient Coins.
        </Typography>

        <Typography level="body1" sx={{ marginBottom: 1 }}>
          Number of chests available depends on unearned rewards from the previous day [up to 200].
        </Typography>

        <Typography level="body1" sx={{ marginBottom: 3 }}>
          Common chests from the previous day will also rollover, making it possible to have more than 200 Common chest available on a given day.
        </Typography>

        <Typography level="h6" sx={{ marginBottom: 2 }}>
          Premium Chest
        </Typography>

        <Box
          component="img"
          src="/image/moonfall3.jpg" // Cambia esto por la ruta de tu imagen
          alt="interface"
          sx={{
            width: "100px",
            height: "100px",
            borderRadius: 8,
            marginBottom: 4,
          }}
        />

        <Typography level="body1" sx={{ marginBottom: 1 }}>
          Contains 5,000 Ancient Coins.
        </Typography>

        <Typography level="body1" sx={{ marginBottom: 3 }}>
          50 Premium Chests are available every day.
        </Typography>

        <Typography level="h6" sx={{ marginBottom: 2 }}>
          Extra Special Chest
        </Typography>

        <Box
          component="img"
          src="/image/moonfall4.jpg" // Cambia esto por la ruta de tu imagen
          alt="interface"
          sx={{
            width: "100px",
            height: "100px",
            borderRadius: 8,
            marginBottom: 4,
          }}
        />

        <Typography level="body1" sx={{ marginBottom: 1 }}>
          Contains 20,000 Ancient Coins.
        </Typography>

        <Typography level="body1" sx={{ marginBottom: 1 }}>
          Only 1 Extra Special Chest is available per day.
        </Typography>

        <Typography level="body1" sx={{ marginBottom: 3 }}>
          You will be have a daily cap of 3 Moonfall chests per plot, with a max of 1 of each tier. 
          This means that the maximum you can get is 1 Special Prize, 1 Premium, and 1 Common chest for each of your plots.
        </Typography>

        <Typography level="h3" sx={{ marginBottom: 2 }}>
          Moonfall Quests and Tickets
        </Typography>

        <Typography level="body1" sx={{ marginBottom: 1 }}>
          In order to have a chance to win a Moonfall chest, you will need to get tickets for each tier first by completing quests on your land plot. 
          To access the Moonfall quests page, click the Moonfall button on the right side of the home screen:
        </Typography>

        <Box
          component="img"
          src="/image/moonfall5.jpg" // Cambia esto por la ruta de tu imagen
          alt="interface"
          sx={{
            width: "120px",
            height: "120px",
            borderRadius: 8,
            marginBottom: 4,
          }}
        />

        <Typography level="body1" sx={{ marginBottom: 1 }}>
          On the Moonfall Quests page, you will then see all the available quests for your land plot. 
          Completing each of these quests will give you a chance to get Moonfall tickets. 
          The harder the quest, the higher your chance of getting a Moonfall ticket.
        </Typography>

        <Box
          component="img"
          src="/image/moonfall6.jpg" // Cambia esto por la ruta de tu imagen
          alt="interface"
          sx={{
            width: "700px",
            height: "400px",
            borderRadius: 8,
            marginBottom: 4,
          }}
        />

        <Typography level="body1" sx={{ marginBottom: 1 }}>
          Quests can also have chance multipliers, further increasing your chances of getting a ticket. 
          You will be able to see these multipliers on top of each quest.
        </Typography>

        <Typography level="body1" sx={{ marginBottom: 1 }}>
          You may refer to the following graphic for the base chance to get a ticket from each quest tier, 
          along with the max multiplier you can get from the quests.
        </Typography>

        <Box
          component="img"
          src="/image/moonfall7.jpg" // Cambia esto por la ruta de tu imagen
          alt="interface"
          sx={{
            width: "600px",
            height: "600px",
            borderRadius: 8,
            marginBottom: 4,
          }}
        />

        <Typography level="h3" sx={{ marginBottom: 2 }}>
          Moonfall Quests Rerolls
        </Typography>

        <Typography level="body1" sx={{ marginBottom: 1 }}>
          To do a reroll of all the quest that you did not complete, click the Reroll button on top of the quest page. You will have 5 Rerolls per day.
        </Typography>

        <Box
          component="img"
          src="/image/moonfall17.jpg" // Cambia esto por la ruta de tu imagen
          alt="interface"
          sx={{
            width: "275px",
            height: "75px",
            borderRadius: 8,
            marginBottom: 4,
          }}
        />

        <Typography level="body1" sx={{ marginBottom: 1 }}>
          But if you need to reroll only one quest you will need to press on the button that will be in the upper right margin of the quest
        </Typography>

        <Box
          component="img"
          src="/image/moonfall18.jpg" // Cambia esto por la ruta de tu imagen
          alt="interface"
          sx={{
            width: "850px",
            height: "200px",
            borderRadius: 8,
            marginBottom: 4,
          }}
        />

        <Typography level="body1" sx={{ marginBottom: 1 }}>
          if you do the 5 daily rerolls and you want to do another, you will need to pay 10 Ancient Coin to reroll the quest or all the unfinished quests
        </Typography>

        <Box
          component="img"
          src="/image/moonfall8.jpg" // Cambia esto por la ruta de tu imagen
          alt="interface"
          sx={{
            width: "600px",
            height: "400px",
            borderRadius: 8,
            marginBottom: 4,
          }}
        />

        <Typography level="h3" sx={{ marginBottom: 2 }}>
          Plot Rarity - Bonus Chance
        </Typography>

        <Typography level="body1" sx={{ marginBottom: 1 }}>
          Higher rarity plots also get a slightly higher chance of getting tickets. 
          The higher the rarity of the land plot, the higher the bonus chance of you getting a ticket.
        </Typography>

        <Box
          component="img"
          src="/image/moonfall9.jpg" // Cambia esto por la ruta de tu imagen
          alt="interface"
          sx={{
            width: "600px",
            height: "350px",
            borderRadius: 8,
            marginBottom: 4,
          }}
        />

        <Typography level="h3" sx={{ marginBottom: 2 }}>
          Moonfall Tickets
        </Typography>

        <Typography level="body1" sx={{ marginBottom: 1 }}>
          Once you finish a quest, clicking the Claim button will give you a chance to get Moonfall tickets. 
          If you have finished multiple quests, you may also click the Claim All button to claim multiple rewards at once.
        </Typography>

        <Box
          component="img"
          src="/image/moonfall10.jpg" // Cambia esto por la ruta de tu imagen
          alt="interface"
          sx={{
            width: "600px",
            height: "600px",
            borderRadius: 8,
            marginBottom: 4,
          }}
        />

        <Typography level="body1" sx={{ marginBottom: 1 }}>
          If you are lucky, you will be able to get a Moonfall ticket, which gives you a chance to win a Moonfall chest. 
          There are three types of Moonfall tickets, each corresponding to the three tier of rewards.
        </Typography>

        <Typography level="h6" sx={{ marginBottom: 2 }}>
          Common Ticket
        </Typography>

        <Box
          component="img"
          src="/image/moonfall11.jpg" // Cambia esto por la ruta de tu imagen
          alt="interface"
          sx={{
            width: "200px",
            height: "100px",
            borderRadius: 8,
            marginBottom: 4,
          }}
        />

        <Typography level="h6" sx={{ marginBottom: 2 }}>
          Premium Ticket
        </Typography>

        <Box
          component="img"
          src="/image/moonfall12.jpg" // Cambia esto por la ruta de tu imagen
          alt="interface"
          sx={{
            width: "200px",
            height: "100px",
            borderRadius: 8,
            marginBottom: 4,
          }}
        />

        <Typography level="h6" sx={{ marginBottom: 2 }}>
          Special Ticket
        </Typography>

        <Box
          component="img"
          src="/image/moonfall13.jpg" // Cambia esto por la ruta de tu imagen
          alt="interface"
          sx={{
            width: "200px",
            height: "100px",
            borderRadius: 8,
            marginBottom: 4,
          }}
        />

        <Typography level="body1" sx={{ marginBottom: 1 }}>
          You can get multiple tickets of the same tier on a single land plot, but you can only win a maximum of 1 chest for each tier.
        </Typography>
        <Typography level="body1" sx={{ marginBottom: 1 }}>
          If you do not win any tickets, you will get Gold instead as reward for completing the quests.
        </Typography>

        <Box
          component="img"
          src="/image/moonfall14.jpg" // Cambia esto por la ruta de tu imagen
          alt="interface"
          sx={{
            width: "700px",
            height: "400px",
            borderRadius: 8,
            marginBottom: 4,
          }}
        />

        <Typography level="h3" sx={{ marginBottom: 2 }}>
          Moonfall Draw
        </Typography>
        <Typography level="body1" sx={{ marginBottom: 1 }}>
          The Moonfall winners are determined at the server reset time [0:00 UTC], 
          and will be randomly chosen from all tickets obtained on the previous day.
        </Typography>
        <Typography level="body1" sx={{ marginBottom: 1 }}>
          This means that if there are less tickets than the available rewards, 
          all ticket holders for that tier are guaranteed to win a Moonfall chest.
        </Typography>
        <Typography level="body1" sx={{ marginBottom: 1 }}>
          When you win, a reward screen will appear showing all the chests you won for all of your plots.
        </Typography>

        <Box
          component="img"
          src="/image/moonfall1.jpg" // Cambia esto por la ruta de tu imagen
          alt="interface"
          sx={{
            width: "700px",
            height: "400px",
            borderRadius: 8,
            marginBottom: 4,
          }}
        />

        <Typography level="body1" sx={{ marginBottom: 1 }}>
          You may also review all your previous winnings along with other previous winners by clicking on the Winning History button on the Moonfall page. 
          This will also show what land plot the Moonfall is won on.
        </Typography>
        <Box
          component="img"
          src="/image/moonfall15.jpg" // Cambia esto por la ruta de tu imagen
          alt="interface"
          sx={{
            width: "300px",
            height: "100px",
            borderRadius: 8,
            marginBottom: 4,
          }}
        />
        <Box
          component="img"
          src="/image/moonfall16.jpg" // Cambia esto por la ruta de tu imagen
          alt="interface"
          sx={{
            width: "700px",
            height: "500px",
            borderRadius: 8,
            marginBottom: 4,
          }}
        />
      </Box>
    </Box>
  );
}

