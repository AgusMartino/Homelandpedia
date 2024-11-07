"use client";
import { useState } from "react";
import { Box, Typography, Card, Button, Input } from '@mui/joy';
import Image from 'next/image';
import axios from 'axios';
import { Star, Infinity } from "lucide-react";

export default function AxpTable() {
  const [axieId, setAxieId] = useState('');
  const [axie, setAxie] = useState(null);
  const [result, setResult] = useState(false);
  const [alertAxie, setAlertAxie] = useState(false);
  const [loading, setLoading] = useState(false);
  const [combatItem, setCombatItem] = useState(null); // Estado para datos de combate

  async function fetchDataAxie(body) {
    try {
      const res = await axios.post(`${window.location.origin}/api/getAxiePoints`, body);
      const fetchedAxie = res.data;

      if (fetchedAxie) {
        const item = getCombatDataByPoints(fetchedAxie.pointsAxie);
        setCombatItem(item); // Se establece combatItem aquí directamente
        setResult(true);
        setAlertAxie(false);
        setAxie(fetchedAxie);
      } else {
        setAxie(null);
        setResult(false);
        setAlertAxie(true);
      }
    } catch (error) {
      console.error(error);
      setAxie(null);
      setAlertAxie(true);
    } finally {
      setLoading(false);
    }
  }

  // Datos del combate según la calidad y puntos
  const combatData = [
    { quality: 'Normal', stars: 1, modifier: 1.00, color: '#6d6969', points: 0 },
    { quality: 'Elite', stars: 1, modifier: 1.10, color: '#1e00ff', points: 1 },
    { quality: 'Elite', stars: 2, modifier: 1.20, color: '#1e00ff', points: 2 },
    { quality: 'Epic', stars: 1, modifier: 1.35, color: '#9e0089', points: 3 },
    { quality: 'Epic', stars: 2, modifier: 1.45, color: '#9e0089', points: 4 },
    { quality: 'Epic', stars: 3, modifier: 1.55, color: '#9e0089', points: 5 },
    { quality: 'Legendary', stars: 1, modifier: 1.75, color: '#fbff00', points: 6 },
    { quality: 'Legendary', stars: 2, modifier: 1.85, color: '#fbff00', points: 7 },
    { quality: 'Legendary', stars: 3, modifier: 1.95, color: '#fbff00', points: 8 },
    { quality: 'Legendary', stars: 4, modifier: 2.05, color: '#fbff00', points: 9 },
    { quality: 'Mythical', stars: 1, modifier: 2.30, color: '#cc0000', points: 10 },
    { quality: 'Mythical', stars: 2, modifier: 2.40, color: '#cc0000', points: 11 },
    { quality: 'Mythical', stars: 3, modifier: 2.50, color: '#cc0000', points: 12 },
    { quality: 'Mythical', stars: 4, modifier: 2.60, color: '#cc0000', points: 13 },
    { quality: 'Mythical', stars: 5, modifier: 2.70, color: '#cc0000', points: 14 },
    { quality: 'Divine+', stars: 'infinite', modifier: '+0.15', color: 'linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet)', points: 15 },
  ];

  const getCombatDataByPoints = (points) => {
    return combatData.find(item => 
      item.points === points || (item.quality === 'Divine+' && points > 14)
    );
  };

  const handleCalculatePoints = async () => {
    setLoading(true);
    await fetchDataAxie({ axieId });
  };

  return (
      <Box sx={{ padding: 2 }}>
        {/* Sección para calcular AXP faltante */}
        <Box sx={{ width: '100%', marginBottom: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Typography level="h2" component="h2" sx={{ marginBottom: 2, textAlign: 'center' }}>
            Calculate Adventure Points
          </Typography>
          <Input
            placeholder="Axie ID"
            value={axieId}
            onChange={(e) => setAxieId(e.target.value)}
            sx={{ marginBottom: 2, width: '300px' }} // Ajusta el tamaño del input
          />
          <Button
            variant="outlined"
            onClick={handleCalculatePoints}
            disabled={loading}
            sx={{ width: '200px' }} // Ajusta el tamaño del botón
          >
            {loading ? 'Loading...' : 'Calculate Points'}
          </Button>
          {alertAxie && (
            <Typography align="center" sx={{ color: "#ff0000", mb: 2 }}>
              * The axie was not found *
            </Typography>
          )}

          {/* Mostrar la imagen del Axie si se encontró */}
          {result && (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 3,
                marginBottom: 3,
                position: 'relative', // Necesario para las estrellas sobre el borde
              }}
            >
              <Card
                sx={{
                  p: 1,
                  position: 'relative', // Necesario para posicionar el pseudo-elemento correctamente
                  alignContent: 'center',
                  justifyContent: 'center',
                  borderRadius: '16px', // Bordes redondeados de la tarjeta
                  border: combatItem.quality !== 'Divine+' ? `3px solid ${combatItem.color}` : 'none', // Borde normal para otras calidades
                  '&::before': combatItem.quality === 'Divine+' && {
                    content: '""',
                    position: 'absolute',
                    top: '-3px',
                    left: '-3px',
                    right: '-3px',
                    bottom: '-3px',
                    borderRadius: '16px', // Redondea las esquinas del borde
                    background: combatItem.color, // Color de fondo degradado
                    backgroundImage: combatItem.color, // Si es un degradado, úsalo aquí
                    zIndex: -1, // Envía el pseudo-elemento detrás del contenido
                  },
                }}
              >
                <Image
                  src={axie.img}
                  alt="Imagen de axie"
                  width={300}
                  height={300}
                  style={{ objectFit: 'contain'}}
                />
                {/* Estrellas sobre el borde superior de la tarjeta */}
                {combatItem && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: '-12px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        gap: 0.5,
                        zIndex: 1,
                        backgroundColor: combatItem.quality === 'Divine+' ? 'transparent' : combatItem.color,
                        backgroundImage: combatItem.quality === 'Divine+' ? combatItem.color : 'none',
                        padding: '2px 10px',
                        borderRadius: '10px',
                      }}
                    >
                    {combatItem.stars === 'infinite' ? (
                      <Infinity 
                        size={20} 
                        stroke="silver"     // Contorno gris para la estrella
                        strokeWidth={2}    // Grosor del contorno
                        sx={{
                          boxShadow: `
                            inset 1px 1px 3px rgba(255, 255, 255, 0.5),   /* Sombra interna clara */
                            inset -1px -1px 3px rgba(0, 0, 0, 0.5)        /* Sombra interna oscura */
                          `,
                          filter: `
                            drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.5))   /* Sombra externa oscura */
                          `,
                        }}
                      /> // Estrella "infinita" con color plateado
                    ) : (
                      Array.from({ length: combatItem.stars }).map((_, i) => (
                        <Star 
                          key={i} 
                          size={20} 
                          fill="silver"       // Relleno gris para la estrella
                          stroke="silver"     // Contorno gris para la estrella
                          strokeWidth={2}    // Grosor del contorno
                          sx={{
                            boxShadow: `
                              inset 1px 1px 3px rgba(255, 255, 255, 0.5),   /* Sombra interna clara */
                              inset -1px -1px 3px rgba(0, 0, 0, 0.5)        /* Sombra interna oscura */
                            `,
                            filter: `
                              drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.5))   /* Sombra externa oscura */
                            `,
                          }}
                        />
                      ))
                    )}
                  </Box>
                )}
                {/* Información debajo de la imagen */}
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column', // Asegura que los elementos estén en columna
                    alignItems: 'center',    // Centra los elementos en el eje horizontal
                    justifyContent: 'center', // Centra los elementos en el eje vertical
                  }}
                >
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    Quality: {combatItem.quality}
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    Type: {axie.Type || 'Normal'} {/* Si axie.type es vacío, coloca "Normal" */}
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    Points: {axie.pointsAxie || 0} {/* Si axie.points es vacío, coloca "0" */}
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    {`Stats Modifier: ${combatItem.modifier}`} {/* Muestra el modificador de stats */}
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    Level: {axie.level} {/* Muestra el modificador de stats */}
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    Fatigue: {axie.fatigue} {/* Muestra el modificador de stats */}
                  </Typography>
                </Box>
              </Card>
            </Box>
          )}
        </Box>
      </Box>
  );
}
