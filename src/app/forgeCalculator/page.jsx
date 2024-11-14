"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ConsumableCardComponent from "@/components/ConsumableCardComponent";
import ConsumableCardComponentCost from "@/components/ConsumableCardComponentCost";
import { Box, CircularProgress, Typography} from "@mui/joy";
import Image from "next/image";
import { TriangleAlert  } from "lucide-react";

function App() {
  const [consumables, setData] = useState([]);
  const [loading, setLoading] = useState(true);


  async function fetchData() {
    try {
      const res = await axios.post(`${window.location.origin}/api/getConsumables`);
      setData(res.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(true);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading)
    return (
      <div className="grid w-full flex-grow place-content-center mt-10">
        <CircularProgress />
      </div>
    );
  
  // Filtra los consumibles para excluir aquellos que tengan recipe.items vacío
  const consumablesWithRecipe = consumables.filter(item => item.recipe.items.length > 0);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={2}
      sx={{ mt: 2 }}
    >
      {/* Muestra los materiales en tarjetas */}
      <Box
        display="flex"
        flexWrap="wrap"
        gap={2}
        justifyContent="center"
        alignItems="center"
        sx={{ width: '100vw', boxSizing: 'border-box' }}
      >
        {consumables.map((item) => {
          // Cambia la URL de la imagen en base al nombre del item
          // Renderiza el componente con la imagen actualizada
          return <ConsumableCardComponent key={item.tokenId} item={item} />;
        })}
      </Box>
      

      <Typography level="h4" fontWeight="bold" mb={1}>
        Forgeable Consumable
      </Typography>

      {/* Contenedor para ItemList */}
      <Box
        display="flex"
        flexWrap="wrap"
        gap={2}
        justifyContent="center"
        alignItems="center"
        sx={{ width: '100vw', boxSizing: 'border-box' }}
      >
        <ConsumableCardComponentCost items={consumablesWithRecipe} />
      </Box>

    </Box>

  );
}

export default App;
