"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ConsumableCardComponent from "@/components/ConsumableCardComponent";
import ConsumableCardComponentCost from "@/components/ConsumableCardComponentCost";
import darkflamegif from '@/img/DarkFlame.gif'
import supercocochoco from '@/img/SuperCocochoco.gif'
import { Box, CircularProgress, Typography} from "@mui/joy";
import Image from "next/image";
import { TriangleAlert  } from "lucide-react";

function App() {
  const [consumables, setDataConsumable] = useState([]);
  const [ActivitySuperChoco, setDataActivitySuperChoco] = useState([]);
  const [ActivityDarkFlame, setDataActivityDarkFlame] = useState([]);
  const [loading, setLoading] = useState(true);


  async function fetchDataConsumable() {
    try {
      const res = await axios.post(`${window.location.origin}/api/getConsumables`);
      setDataConsumable(res.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(true);
    }
  }

  async function fetchDataActivitySuperChoco() {
    try {
      const res = await axios.post(`${window.location.origin}/api/getActivitySuperChoco`);
      setDataActivitySuperChoco(res.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(true);
    }
  }

  async function fetchDataActivityDarkFlame() {
    try {
      const res = await axios.post(`${window.location.origin}/api/getActivityDarkFlame`);
      setDataActivityDarkFlame(res.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(true);
    }
  }

  useEffect(() => {
    fetchDataConsumable();
    fetchDataActivityDarkFlame();
    fetchDataActivitySuperChoco();
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
      

      <Box sx={{ display: 'flex', width: '100vw', boxSizing: 'border-box' }}>
        {/* Columna izquierda: Contenido original */}
        <Box sx={{ width: '50%', padding: 2, boxSizing: 'border-box' }}>
          <Box
            display="flex"
            flexWrap="wrap"
            gap={2}
            justifyContent="center"
            alignItems="center"
            sx={{ width: '100%' }}          
          >
            <Typography level="h4" fontWeight="bold" mb={1}>
              Forgeable Consumable
            </Typography>
          </Box>

          {/* Contenedor para ItemList */}
          <Box
            display="flex"
            flexWrap="wrap"
            gap={2}
            justifyContent="center"
            alignItems="center"
            sx={{ width: '100%' }}
          >
            <ConsumableCardComponentCost items={consumablesWithRecipe} />
          </Box>

          {/* Mensaje de advertencia */}
          <Box
            sx={{
              display: 'flex',
              gap: 0.5,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              marginTop: 2,
            }}
          >
            <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center' }}>
              <TriangleAlert
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Box>
            <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center' }}>
              <Typography variant="body2">
                **The calculation does NOT include a marketplace commission of 4.25%.
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Columna derecha: Cards dinámicas */}
        <Box sx={{ width: '50%', padding: 2, boxSizing: 'border-box' }}>
        <Box
            display="flex"
            flexWrap="wrap"
            gap={2}
            justifyContent="center"
            alignItems="center"
            sx={{ width: '100%' }}          
          >
            <Typography level="h4" fontWeight="bold" mb={1}>
              Activity Details of Last 7 days
            </Typography>
          </Box>

          {/* Primera Card */}
          <Box
            sx={{
              border: '1px solid #ddd',
              borderRadius: 4,
              padding: 2,
              marginBottom: 2,
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                justifyContent: "center",
                width: "100%",
                marginBottom: 4
              }}
            >
              <Image
                src={supercocochoco}
                alt="supercocochoco"
                width={20}
                height={20}
                style={{ objectFit: "contain" }}
              />
              <Typography variant="h6" fontWeight="bold">
                Activity of SuperCocochoco
              </Typography>
            </Box>
            {ActivitySuperChoco.map((item, index) => (
              <Box
                key={`card1-${index}`}
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: 1,
                  padding: 1,
                  borderBottom: '1px solid #ddd',
                }}
              >
                {/* Imagen del objeto */}
                <Box sx={{ width: 20, height: 20, overflow: 'hidden', borderRadius: '4px' }}>
                  <Image src={item.img} width={20} height={20} alt="buy" style={{ width: '100%', height: 'auto' }} />
                </Box>

                {/* Nombre */}
                <Typography sx={{ fontWeight: 'bold'}}>{item.buyName}</Typography>

                {/* Botón Buy */}
                <Box>
                  <Typography style={{ padding: '4px 8px', fontSize: '0.9rem', cursor: 'pointer' }}>
                    bought
                  </Typography>
                </Box>

                {/* Cantidad */}
                <Typography sx={{ fontSize: '0.9rem', color: '#555' }}>x{item.quantity}</Typography>

                {/* ETH */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <Image src="https://cdn.skymavis.com/ronin/2020/erc20/0xc99a6a985ed2cac1ef41640596c5a5f9f4e19ef5/logo.png" width={20} height={20} alt="ETH" style={{ width: 16, height: 16 }} />
                  <Typography sx={{ fontSize: '0.9rem' }}>{item.priceEth}</Typography>
                </Box>

                {/* USD */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <Image src="https://cdn.skymavis.com/ronin/2020/erc20/0x0b7007c13325c48911f73a2dad5fa5dcbf808adc/logo.png" width={20} height={20} alt="USD" style={{ width: 16, height: 16 }} />
                  <Typography sx={{ fontSize: '0.9rem' }}>${item.priceUsd}</Typography>
                </Box>

                {/* Vendedor */}
                <Typography sx={{ fontSize: '0.9rem', color: '#555' }}>From: {item.sellName}</Typography>

                {/* Fecha */}
                <Typography sx={{ fontSize: '0.8rem', color: '#777' }}>At: {item.date}</Typography>
              </Box>
            ))}
          </Box>

          {/* Segunda Card */}
          <Box
            sx={{
              border: '1px solid #ddd',
              borderRadius: 4,
              padding: 2,
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                justifyContent: "center",
                width: "100%",
                marginBottom: 4
              }}
            >
              <Image
                src={darkflamegif}
                alt="DarkFlame"
                width={20}
                height={20}
                style={{ objectFit: "contain" }}
              />
              <Typography variant="h6" fontWeight="bold">
                Activity of Dark Flame
              </Typography>
            </Box>
            {ActivityDarkFlame.map((item, index) => (
              <Box
              key={`card1-${index}`}
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: 1,
                padding: 1,
                borderBottom: '1px solid #ddd',
              }}
            >
              {/* Imagen del objeto */}
              <Box sx={{ width: 20, height: 20, overflow: 'hidden', borderRadius: '4px' }}>
                <Image src={item.img} alt="buy" width={20} height={20} style={{ width: '100%', height: 'auto' }} />
              </Box>

              {/* Nombre */}
              <Typography sx={{ fontWeight: 'bold'}}>{item.buyName}</Typography>

              <Typography style={{padding: '4px 8px',fontSize: '0.9rem', cursor: 'pointer' }}>
                bought
              </Typography>

              {/* Cantidad */}
              <Typography sx={{ fontSize: '0.9rem', color: '#555' }}>x{item.quantity}</Typography>

              {/* ETH */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Image src="https://cdn.skymavis.com/ronin/2020/erc20/0xc99a6a985ed2cac1ef41640596c5a5f9f4e19ef5/logo.png" width={20} height={20} alt="ETH" style={{ width: 16, height: 16 }} />
                <Typography sx={{ fontSize: '0.9rem' }}>{item.priceEth}</Typography>
              </Box>

              {/* USD */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Image src="https://cdn.skymavis.com/ronin/2020/erc20/0x0b7007c13325c48911f73a2dad5fa5dcbf808adc/logo.png" width={20} height={20} alt="USD" style={{ width: 16, height: 16 }} />
                <Typography sx={{ fontSize: '0.9rem' }}>${item.priceUsd}</Typography>
              </Box>

              {/* Vendedor */}
              <Typography sx={{ fontSize: '0.9rem', color: '#555' }}>From: {item.sellName}</Typography>

              {/* Fecha */}
              <Typography sx={{ fontSize: '0.8rem', color: '#777' }}>At: {item.date}</Typography>
            </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>

  );
}

export default App;
