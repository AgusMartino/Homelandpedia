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
    description: "Used to check Passive Axie Adventure logs",
  },
  {
    image: "/image/axieAdventure.jpg",
    title: "Axie Adventure",
    description: "Used to sell food and equipment to Axie Adventurers",
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
      
      {/* Subtítulo */}
      <Typography level="h1" sx={{ marginBottom: 2 }}>
        Basic Mechanics
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column", // Para alinear los elementos en una columna
          alignItems: "flex-start", // Asegura que todo quede alineado a la izquierda
          gap: 2, // Espaciado entre los elementos
          marginLeft: 4,
          padding: 2, // Añade algo de espacio alrededor
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, marginBottom: 2 }}>
          {/* Círculo */}
          <Box
            sx={{
              width: "12px", // Aseguramos el tamaño del círculo
              height: "12px",
              backgroundColor: "white", // Cambia el color aquí si es necesario
              borderRadius: "50%", // Hace que sea un círculo
              flexShrink: 0,
            }}
          />
          {/* Texto */}
          <Typography level="body2">Building Structure</Typography>
        </Box>

        {/* Imagen */}
        <Box
          component="img"
          src="/image/building.jpg" // Cambia esto por la ruta de tu imagen
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
          src="/image/buildingInterface.jpg" // Cambia esto por la ruta de tu imagen
          alt="interface"
          sx={{
            width: "600px",
            height: "400px",
            borderRadius: 8,
            marginBottom: 4,
          }}
        />

        <Typography level="body1">
          Players can build, upgrade, modify and destroy buildings by clicking the Construction Mode button
        </Typography>
        <Typography level="body1">
          The Altar of Atia and Post Portal structures cannot be destroyed under any circumstance
        </Typography>
        <Typography level="body1" sx={{ marginBottom: 4 }}>
          In order to build or upgrade a structure, players must have enough materials, currency and the investigation level required
        </Typography>

        {/* Imagen */}
        <Box
          component="img"
          src="/image/IconsBuilding.jpg" // Cambia esto por la ruta de tu imagen
          alt="interface"
          sx={{
            width: "400px",
            height: "100px",
            borderRadius: 8,
            marginBottom: 4,
          }}
        />

        {/* Varios Typography */}
        <Card sx={{ marginBottom: 2 }}>
          <CardContent>
            <Typography level="body2">1. Build Mode - For building structures and buildings</Typography>
            <Typography level="body2">2. Road Mode - For creating roads and paths</Typography>
            <Typography level="body2">3. Decorations Mode - For placing decorations</Typography>
            <Typography level="body2">4. Reconstruction Mode - For modifying structure placement</Typography>
          </CardContent>
        </Card>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1, marginBottom: 2 }}>
          {/* Círculo */}
          <Box
            sx={{
              width: "12px", // Aseguramos el tamaño del círculo
              height: "12px",
              backgroundColor: "white", // Cambia el color aquí si es necesario
              borderRadius: "50%", // Hace que sea un círculo
              flexShrink: 0,
            }}
          />
          {/* Texto */}
          <Typography level="body2">Altar of Atia</Typography>
        </Box>

        {/* Imagen */}
        <Box
          component="img"
          src="/image/altarOfAtias.jpg" // Cambia esto por la ruta de tu imagen
          alt="interface"
          sx={{
            width: "400px",
            height: "400px",
            borderRadius: 8,
            marginBottom: 4,
          }}
        />
        <Typography level="body1" sx={{ marginBottom: 1 }}>
          The Altar of Atia is the most important structure in your land plot. You use it to research new structures and structure upgrades that would help greatly in the progression of your land plot
        </Typography>

        {/* Imagen */}
        <Box
          component="img"
          src="/image/investigation.jpg" // Cambia esto por la ruta de tu imagen
          alt="interface"
          sx={{
            width: "700px",
            height: "400px",
            borderRadius: 8,
            marginBottom: 4,
          }}
        />
        <Typography level="body1" sx={{ marginBottom: 1 }}>
          By entering the Altar of Atia, you can choose to research on different aspects of your land plot. Your options are limited by the level of your altar, so make sure to upgrade the altar to progress further in the game
        </Typography>

        {/* Imagen */}
        <Box
          component="img"
          src="/image/investigation2.jpg" // Cambia esto por la ruta de tu imagen
          alt="interface"
          sx={{
            width: "700px",
            height: "400px",
            borderRadius: 8,
            marginBottom: 4,
          }}
        />

        <Box sx={{ display: "flex", alignItems: "center", gap: 1, marginBottom: 2 }}>
          {/* Círculo */}
          <Box
            sx={{
              width: "12px", // Aseguramos el tamaño del círculo
              height: "12px",
              backgroundColor: "white", // Cambia el color aquí si es necesario
              borderRadius: "50%", // Hace que sea un círculo
              flexShrink: 0,
            }}
          />
          {/* Texto */}
          <Typography level="body2">Axie Workers</Typography>
        </Box>

        {/* Imagen */}
        <Box
          component="img"
          src="/image/workers.jpg" // Cambia esto por la ruta de tu imagen
          alt="interface"
          sx={{
            width: "700px",
            height: "400px",
            borderRadius: 8,
            marginBottom: 4,
          }}
        />
        <Typography level="body1" sx={{ marginBottom: 1 }}>
          Axie workers are used for most activities in-game such as building, gathering, and crafting. At the start of the game, players will be given 2 axie workers to start with and more axie workers will be unlocked with higher levels of Altar of Atia and Housing structures. You can see more information in 
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
            <Link href="/buildings" passHref legacyBehavior>
              <a 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ margin: "0 8px" }} // Margen de 8px a los lados
              >
                Buildings
              </a>
            </Link>
          </Typography>
        </Typography>
        <Typography level="body1" sx={{ marginBottom: 1 }}>
          NFT axies can be used in-game. If you haven not set NFT axies yet, you will be using the default axies. You can invite your NFT axies to your land plots via the NFT Axie Management
        </Typography>

        {/* Imagen */}
        <Box
          component="img"
          src="/image/workers2.jpg" // Cambia esto por la ruta de tu imagen
          alt="interface"
          sx={{
            width: "700px",
            height: "100px",
            borderRadius: 8,
            marginBottom: 4,
          }}
        />

        <Box sx={{ display: "flex", alignItems: "center", gap: 1, marginBottom: 2 }}>
          {/* Círculo */}
          <Box
            sx={{
              width: "12px", // Aseguramos el tamaño del círculo
              height: "12px",
              backgroundColor: "white", // Cambia el color aquí si es necesario
              borderRadius: "50%", // Hace que sea un círculo
              flexShrink: 0,
            }}
          />
          {/* Texto */}
          <Typography level="body2">Task Management</Typography>
        </Box>

        <Typography level="body1">
          Task Management allows players to view and manage all the current and pending tasks on the land plot. You can cancel individual tasks, or cancel all ongoing and pending task, through the Task Management window
        </Typography>
        <Typography level="body1" sx={{ marginBottom: 4 }}>
          The Task Management window can be opened by clicking the letter T on the keyboard or pressing the Task Management button located at the bottom of the screen
        </Typography>

        {/* Imagen */}
        <Box
          component="img"
          src="/image/workers3.jpg" // Cambia esto por la ruta de tu imagen
          alt="interface"
          sx={{
            width: "600px",
            height: "400px",
            borderRadius: 8,
            marginBottom: 4,
          }}
        />

        <Card sx={{ marginBottom: 2 }}>
          <CardContent>
            <Typography level="body2">1. Expand/Retract Task Management Menu</Typography>
            <Typography level="body2">2. Idle Axies</Typography>
            <Typography level="body2">3. Working Axies</Typography>
            <Typography level="body2">4. Stuck Axies</Typography>
            <Typography level="body2">5. Open Task Management Page</Typography>
            <Typography level="body2">6. Quick Access</Typography>
          </CardContent>
        </Card>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1, marginBottom: 2 }}>
          {/* Círculo */}
          <Box
            sx={{
              width: "12px", // Aseguramos el tamaño del círculo
              height: "12px",
              backgroundColor: "white", // Cambia el color aquí si es necesario
              borderRadius: "50%", // Hace que sea un círculo
              flexShrink: 0,
            }}
          />
          {/* Texto */}
          <Typography level="body2">Gathering Material</Typography>
        </Box>
        <Typography level="body1" sx={{ marginBottom: 1 }}>
          In Homeland, players can collect various materials from gathering such as wood, stone, ore and more. These can be gathered from the trees and quarries on their land plots, or from various material deposits in the world, including materials from the land plots of other players, as well as public resource nodes
        </Typography>
        <Typography level="body1">
          Important points
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, marginBottom: 1, marginLeft: 4 }}>
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
          <Typography level="body2">
            The further the distance of the material deposits and public resource node from your land plot, the longer it will take for your axies to gather these materials
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, marginBottom: 1, marginLeft: 4  }}>
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
          <Typography level="body2">
            Public resource nodes are indicated as pink squared on the world map
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, marginBottom: 1, marginLeft: 4  }}>
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
          <Typography level="body2">
            Players will need idle/available axies to collect resources
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, marginBottom: 1, marginLeft: 4  }}>
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
          <Typography level="body2">
            Resource deposits have a limit of how much material can be gathered before they are depleted, but will respawn over time
          </Typography>
        </Box>
        <Typography level="body1" sx={{ marginBottom: 1 }}>
          Materials can come in different quality levels, similar to equipment. When using materials in crafting, the higher the quality of the materials you use, the higher the chance to get high quality outputs
        </Typography>
        {/* Imagen */}
        <Box
          component="img"
          src="/image/alchemy.jpg" // Cambia esto por la ruta de tu imagen
          alt="interface"
          sx={{
            width: "200px",
            height: "100px",
            borderRadius: 8,
            marginBottom: 4,
          }}
        />

        <Box sx={{ display: "flex", alignItems: "center", gap: 1, marginBottom: 2 }}>
          {/* Círculo */}
          <Box
            sx={{
              width: "12px", // Aseguramos el tamaño del círculo
              height: "12px",
              backgroundColor: "white", // Cambia el color aquí si es necesario
              borderRadius: "50%", // Hace que sea un círculo
              flexShrink: 0,
            }}
          />
          {/* Texto */}
          <Typography level="body2">Alchemy</Typography>
        </Box>
        {/* Imagen */}
        <Box
          component="img"
          src="/image/alchemy2.jpg" // Cambia esto por la ruta de tu imagen
          alt="interface"
          sx={{
            width: "400px",
            height: "400px",
            borderRadius: 8,
            marginBottom: 4,
          }}
        />

        <Typography level="body1" sx={{ marginBottom: 1 }}>
          Through the power of Alchemy, you can get different rarities of materials that you can use in your production/crafting. You can start using alchemy by building the Alchemy structure shown above
        </Typography>

        <Typography level="body1" sx={{ marginBottom: 1 }}>
        Alchemy has two main features, Combine and Dismantle
        </Typography>

        {/* Imagen */}
        <Box
          component="img"
          src="/image/alchemy3.jpg" // Cambia esto por la ruta de tu imagen
          alt="interface"
          sx={{
            width: "700px",
            height: "400px",
            borderRadius: 8,
            marginBottom: 4,
          }}
        />
        
        <Typography level="body1" sx={{ marginBottom: 1 }}>
          With Combine, you can combine lower quality materials to get a higher quality of that same material. You can use this feature to get higher quality materials for a better chance at higher quality equipment
        </Typography>

        {/* Imagen */}
        <Box
          component="img"
          src="/image/alchemy4.jpg" // Cambia esto por la ruta de tu imagen
          alt="interface"
          sx={{
            width: "700px",
            height: "400px",
            borderRadius: 8,
            marginBottom: 4,
          }}
        />

        <Typography level="body1" sx={{ marginBottom: 1 }}>
          With Dismantle, you can get multiple lower quality materials by dismantling higher quality materials of the same type. This is useful if you are just looking to craft in bigger volume without the need for higher quality outputs
        </Typography>
        
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, marginBottom: 2 }}>
          {/* Círculo */}
          <Box
            sx={{
              width: "12px", // Aseguramos el tamaño del círculo
              height: "12px",
              backgroundColor: "white", // Cambia el color aquí si es necesario
              borderRadius: "50%", // Hace que sea un círculo
              flexShrink: 0,
            }}
          />
          {/* Texto */}
          <Typography level="body2">Producing Items</Typography>
        </Box>
        
        <Typography level="body1" sx={{ marginBottom: 1 }}>
          Producing is a system that processes resources into other types of resources.The resources being produced depends on the structure and blueprint that was used to produce the item
        </Typography>
        <Typography level="body1" sx={{ marginBottom: 1 }}>
          You may customize the production cycle by changing the quality of the material or the number of cycles
        </Typography>

        {/* Imagen */}
        <Box
          component="img"
          src="/image/items1.jpg" // Cambia esto por la ruta de tu imagen
          alt="interface"
          sx={{
            width: "600px",
            height: "400px",
            borderRadius: 8,
            marginBottom: 4,
          }}
        />
        <Card sx={{ marginBottom: 2 }}>
          <CardContent>
            <Typography level="body2">1. Change the quality of input materials</Typography>
            <Typography level="body2">2. Chances of getting different output quality depending on the input materials</Typography>
            <Typography level="body2">3. Change the number of cycles you want the worker axie to make</Typography>
          </CardContent>
        </Card>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1, marginBottom: 2 }}>
          {/* Círculo */}
          <Box
            sx={{
              width: "12px", // Aseguramos el tamaño del círculo
              height: "12px",
              backgroundColor: "white", // Cambia el color aquí si es necesario
              borderRadius: "50%", // Hace que sea un círculo
              flexShrink: 0,
            }}
          />
          {/* Texto */}
          <Typography level="body2">Crafting Items</Typography>
        </Box>
        
        <Typography level="body1" sx={{ marginBottom: 1 }}>
          Players can combine various resources to create new items that can be used for decorative or economic purposes. Investigations are needed for a crafting order and more blueprints will be unlocked with higher Altar levels
        </Typography>
        <Typography level="body1" sx={{ marginBottom: 1 }}>
          Like in production, you can use higher quality input materials to have a higher chance of getting high quality outputs
        </Typography>

        {/* Imagen */}
        <Box
          component="img"
          src="/image/items2.jpg" // Cambia esto por la ruta de tu imagen
          alt="interface"
          sx={{
            width: "600px",
            height: "400px",
            borderRadius: 8,
            marginBottom: 4,
          }}
        />
        <Card sx={{ marginBottom: 2 }}>
          <CardContent>
            <Typography level="body2">1. Change the quality of input materials</Typography>
            <Typography level="body2">2. Chances of getting different output quality depending on the input materials</Typography>
          </CardContent>
        </Card>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, marginBottom: 2 }}>
          {/* Círculo */}
          <Box
            sx={{
              width: "12px", // Aseguramos el tamaño del círculo
              height: "12px",
              backgroundColor: "white", // Cambia el color aquí si es necesario
              borderRadius: "50%", // Hace que sea un círculo
              flexShrink: 0,
            }}
          />
          {/* Texto */}
          <Typography level="body2">Post Portal</Typography>
        </Box>
        <Typography level="body1" sx={{ marginBottom: 1 }}>
          When you have more than one land plot, you will be able to transfer your resources between your plots. To do this, you will need to enable transfer resources from other plots to this plot in the Post Portal for each land plot before you are able to transfer the resources
        </Typography>
        {/* Imagen */}
        <Box
          component="img"
          src="/image/postPortalInterface.jpg" // Cambia esto por la ruta de tu imagen
          alt="interface"
          sx={{
            width: "600px",
            height: "400px",
            borderRadius: 8,
            marginBottom: 4,
          }}
        />
        <Typography level="body1" sx={{ marginBottom: 1 }}>
          Alternatively, you can also enable it through the Resource Transferring menu by going into Plot Settings and enabling its visibility
        </Typography>
        <Box
          component="img"
          src="/image/postPortalInterface2.jpg" // Cambia esto por la ruta de tu imagen
          alt="interface"
          sx={{
            width: "400px",
            height: "400px",
            borderRadius: 8,
            marginBottom: 4,
          }}
        />
        <Box
          component="img"
          src="/image/postPortalInterface3.jpg" // Cambia esto por la ruta de tu imagen
          alt="interface"
          sx={{
            width: "700px",
            height: "400px",
            borderRadius: 8,
            marginBottom: 4,
          }}
        />
        <Typography level="body1" sx={{ marginBottom: 1 }}>
          Each time you transfer items from another plot or receive items purchased through the Auction House, you will need to claim them in the Postal Portal
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, marginBottom: 2 }}>
          {/* Círculo */}
          <Box
            sx={{
              width: "12px", // Aseguramos el tamaño del círculo
              height: "12px",
              backgroundColor: "white", // Cambia el color aquí si es necesario
              borderRadius: "50%", // Hace que sea un círculo
              flexShrink: 0,
            }}
          />
          {/* Texto */}
          <Typography level="body2">Plot Management</Typography>
        </Box>
        <Typography level="body1" sx={{ marginBottom: 1 }}>
        If you own or have been delegated multiple land plots, you will be able to use the Plot Management tool to quickly switch between your land plots
        </Typography>
        <Box
          component="img"
          src="/image/postPortalInterface4.jpg" // Cambia esto por la ruta de tu imagen
          alt="interface"
          sx={{
            width: "700px",
            height: "100px",
            borderRadius: 8,
            marginBottom: 4,
          }}
        />
        <Box
          component="img"
          src="/image/plotManagement.jpg" // Cambia esto por la ruta de tu imagen
          alt="interface"
          sx={{
            width: "700px",
            height: "400px",
            borderRadius: 8,
            marginBottom: 4,
          }}
        />
        <Typography level="body1" sx={{ marginBottom: 1 }}>
          You may also use the Plot Management tool to check the steward, land delegation contract expiry, and progression of your delegated plots
        </Typography>
        <Box
          component="img"
          src="/image/plotManagement4.jpg" // Cambia esto por la ruta de tu imagen
          alt="interface"
          sx={{
            width: "700px",
            height: "100px",
            borderRadius: 8,
            marginBottom: 4,
          }}
        />
        <Box
          component="img"
          src="/image/plotManagement1.jpg" // Cambia esto por la ruta de tu imagen
          alt="interface"
          sx={{
            width: "700px",
            height: "400px",
            borderRadius: 8,
            marginBottom: 4,
          }}
        />
        <Typography level="body1" sx={{ marginBottom: 1 }}>
          Example of list of plots delegated under the Delegated menu
        </Typography>

        <Box
          component="img"
          src="/image/plotManagement2.jpg" // Cambia esto por la ruta de tu imagen
          alt="interface"
          sx={{
            width: "700px",
            height: "400px",
            borderRadius: 8,
            marginBottom: 4,
          }}
        />

        <Typography level="body1" sx={{ marginBottom: 1 }}>
          Example of list of steward under the Delegated Menu
        </Typography>

        <Typography level="body1" sx={{ marginBottom: 1 }}>
          You may open the Plot Management tool by pressing Shift + P on your keyboard, or by clicking the Plot Management button
        </Typography>

        <Box
          component="img"
          src="/image/plotManagement3.jpg" // Cambia esto por la ruta de tu imagen
          alt="interface"
          sx={{
            width: "100px",
            height: "400px",
            borderRadius: 8,
            marginBottom: 4,
          }}
        />

        <Box sx={{ display: "flex", alignItems: "center", gap: 1, marginBottom: 2 }}>
          {/* Círculo */}
          <Box
            sx={{
              width: "12px", // Aseguramos el tamaño del círculo
              height: "12px",
              backgroundColor: "white", // Cambia el color aquí si es necesario
              borderRadius: "50%", // Hace que sea un círculo
              flexShrink: 0,
            }}
          />
          {/* Texto */}
          <Typography level="body2">Resources Transferring</Typography>
        </Box>
        <Typography level="body1" sx={{ marginBottom: 1 }}>
          Players will be able to transfer any item between plots if they own/delegated with multiple land plots. When players have closer land plots, the time it takes for the resource to transfer will be shorter as well
        </Typography>

        <Box
          component="img"
          src="/image/resourceTransfering1.jpg" // Cambia esto por la ruta de tu imagen
          alt="interface"
          sx={{
            width: "700px",
            height: "500px",
            borderRadius: 8,
            marginBottom: 4,
          }}
        />
        <Typography level="body1">
          Relevant details
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, marginBottom: 1, marginLeft: 4 }}>
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
          <Typography level="body2">
            When players attempt to transfer more than one (1) slot of package, the second slot of package will be put queued until the first item is sent to the other plot and the amount of items the player has in the storage will not be reduced until it is being sent away/out of the queue
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, marginBottom: 1, marginLeft: 4  }}>
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
          <Typography level="body2">
            Stewards are able to transfer resources between plots they own and plots that have been delegated to them. However, landlords cannot transfer resources to plots they have delegated to stewards
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

