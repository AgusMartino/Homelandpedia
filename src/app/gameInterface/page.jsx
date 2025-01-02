"use client";
import Link from 'next/link';
import { Box, Typography, Card, CardContent } from "@mui/joy";

const data = [
  {
    image: "/image/earning.jpg",
    title: "Earning Logs",
    description: "Used to check your earning logs and convert into AXS",
  },
  {
    image: "/image/adventureStation.jpg",
    title: "Adventure Station",
    description: "Used to sell food and equipment to Axie Adventurers",
  },
  {
    image: "/image/axieAdventure.jpg",
    title: "Axie Adventure",
    description: "Used to check Passive Axie Adventure logs",
  },
  {
    image: "/image/storage.jpg",
    title: "Storage Content",
    description: "Used to manage your storage/warehouse inventory",
  },
  {
    image: "/image/bag.jpg",
    title: "Player s Bag",
    description: "Used to go to the player s inventory",
  },
  {
    image: "/image/auctionHouse.jpg",
    title: "Auction House",
    description: "Used to buy and sell materials with other players",
  },
  {
    image: "/image/resource_transfering.jpg",
    title: "Resource Transferring",
    description: "Used to transfer materials between your land plots",
  },
  {
    image: "/image/postPortal.jpg",
    title: "Post Portal",
    description: "Used to manage incoming items bought from other players",
  },
  {
    image: "/image/mailBox.jpg",
    title: "Mailbox",
    description: "Used to check your mailbox",
  },
];

export default function gemaInterface() {
  return (
    <Box sx={{ padding: 4, maxWidth: 1000, margin: "0 auto", justifyContent: "center", alignContent: "center", alignItems: "center", display: "flex", flexDirection: "column", }}>
      {/* Subtítulo */}
      <Typography level="h2" sx={{ marginBottom: 2 }}>
        Interface Guide
      </Typography>

 
      <Typography level="body1" sx={{ marginBottom: 4 }}>
        Basic Interface in the main screen that have the following elements:
      </Typography>

      {/* Imagen */}
      <Box
        component="img"
        src="/image/interface_1.jpg" // Cambia esto por la ruta de tu imagen
        alt="interface"
        sx={{
          width: "100%",
          height: "500px",
          borderRadius: 8,
          marginBottom: 4,
        }}
      />

      {/* Varios Typography */}
      <Card sx={{ marginBottom: 2 }}>
        <CardContent>
          <Typography level="body2">1. Settings And Camara - Used to open the settings menu and to enter camera mode</Typography>
          <Typography level="body2">2. Plot Management - Used to go to plot management page or to quickly switch to a different plot</Typography>
          <Typography level="body2">3. Current Task Panel - Used to manage ongoing tasks for worker axies</Typography>
          <Typography level="body2">4. Newcomer Quest - Used to access the Newcomer Quests page</Typography>
          <Typography level="body2">5. Daily And Weekly Quests - Used to access Daily and Weekly Quests page</Typography>
          <Typography level="body2">6. Construccion Mode - Used to enter construction mode</Typography>
          <Typography level="body2">7. Expand Menu Button - Used to access the menu panel</Typography>
          <Typography level="body2">8. Moonfall Quests - Used to manage ongoing tasks to get moonfall tickets</Typography>
          <Typography level="body2">9. Manage Axies on plots - Used to manage axies in the plot</Typography>
          <Typography level="body2">10. Minimap - Used to navigate your land plot</Typography>
          <Typography level="body2">11. Visualization - Used to manage visualization of the plot or public resources on lunacian</Typography>
        </CardContent>
      </Card>


      {/* Subtítulo */}
      <Typography level="h2" sx={{ marginBottom: 2 }}>
        Structure wheel
      </Typography>

      <Typography level="body1" sx={{ marginBottom: 4 }}>
        When you select a structure, you will have some options:
      </Typography>

      {/* Imagen */}
      <Box
        component="img"
        src="/image/wheel.jpg" // Cambia esto por la ruta de tu imagen
        alt="interface"
        sx={{
          width: "400px",
          height: "400px",
          borderRadius: 8,
          marginBottom: 4,
        }}
      />

      {/* Varios Typography */}
      <Card sx={{ marginBottom: 2 }}>
        <CardContent>
          <Typography level="body2">1. Structure name</Typography>
          <Typography level="body2">2. Information about the structure</Typography>
          <Typography level="body2">3. Move structure</Typography>
          <Typography level="body2">4. Upgrade structure</Typography>
          <Typography level="body2">5. Destroy structure / cancel construction</Typography>
          <Typography level="body2">6. Enter structure</Typography>
          <Typography level="body2">7. Upgrade details</Typography>
        </CardContent>
      </Card>

      {/* Subtítulo */}
      <Typography level="h2" sx={{ marginBottom: 2 }}>
        Hotkeys
      </Typography>

      <Typography level="body1" sx={{ marginBottom: 4 }}>
        Here you can edit your hotkeys or kwon some quickly options to play homeland using only your keyboard by clicking the Customize button in the Hotkey tab of the Account Settings page
      </Typography>

      {/* Imagen */}
      <Box
        component="img"
        src="/image/hotkeys.jpg" // Cambia esto por la ruta de tu imagen
        alt="interface"
        sx={{
          width: "100%",
          height: "500px",
          borderRadius: 8,
          marginBottom: 4,
        }}
      />

      {/* Subtítulo */}
      <Typography level="h2" sx={{ marginBottom: 2 }}>
        Expandable Menu Button
      </Typography>

      {/* Imagen */}
      <Box
        component="img"
        src="/image/menu.jpg" // Cambia esto por la ruta de tu imagen
        alt="interface"
        sx={{
          width: "100px",
          height: "100px",
          borderRadius: 8,
          marginBottom: 4,
        }}
      />
      {/* Imagen */}
      <Box
        component="img"
        src="/image/ExpandMenu.jpg" // Cambia esto por la ruta de tu imagen
        alt="interface"
        sx={{
          width: "500px",
          height: "600px",
          borderRadius: 8,
          marginBottom: 4,
        }}
      />

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, padding: 2 }}>
        {data.map((item, index) => (
          <Card
            key={index}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: 2,
              width: "600px",
              margin: "0 auto",
              boxShadow: "md",
              borderRadius: 8,
            }}
          >
            {/* Imagen a la izquierda */}
            <Box
              component="img"
              src={item.image}
              alt={`Image for ${item.title}`}
              sx={{
                width: 80,
                height: 80,
                borderRadius: 8,
                objectFit: "cover",
                marginRight: 2,
              }}
            />

            {/* Contenido de texto a la derecha */}
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {/* Título */}
              <Typography level="h5" sx={{ fontWeight: "bold", marginBottom: 1 }}>
                {item.title}
              </Typography>

              {/* Descripción */}
              <Typography level="body2" sx={{ color: "text.secondary" }}>
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

