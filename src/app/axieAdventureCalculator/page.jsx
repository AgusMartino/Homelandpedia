"use client";
import { useState } from "react";
import { Box, Typography, Card, Button, Input } from '@mui/joy';
import Image from 'next/image';
import axios from 'axios';
import { Star, Infinity } from "lucide-react";
import bloodlust from '@/img/adventurs/bloodlust.jpg'
import rampageStrike from '@/img/adventurs/rampageStrike.jpg'
import anemoiBless from '@/img/adventurs/anemoiBless.jpg'
import battleCry from '@/img/adventurs/battleCry.jpg'
import bermudaVortex from '@/img/adventurs/bermudaVortex.jpg'
import darkRitual from '@/img/adventurs/darkRitual.jpg'
import error_666 from '@/img/adventurs/error_666.jpg'
import fatedDeath from '@/img/adventurs/fatedDeath.jpg'
import gl1tch_8 from '@/img/adventurs/gl1tch_8.jpg'
import greenBluwark from '@/img/adventurs/greenBluwark.jpg'
import nighdall from '@/img/adventurs/nighdall.jpg'
import sacredOath from '@/img/adventurs/sacredOath.jpg'
import sirensSong from '@/img/adventurs/sirensSong.jpg'
import sootingDawn from '@/img/adventurs/sootingDawn.jpg'
import systemRecharge from '@/img/adventurs/systemRecharge.jpg'
import wingsBlande from '@/img/adventurs/wingsBlande.jpg'
import powerAmplifier from '@/img/adventurs/powerAmplifier.jpg'
import blockedImg from '@/img/adventurs/blocked.jpg'
import { SolarPower } from "@mui/icons-material";

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

  const combatAbilities =[
    {name:"Bloodlust", class:"Beast", description:"Become Berserk, Increase Physical Attack by 50%, Attack Speed by 20% ande decrease Defense By 50% for 5PT, cannot use Item", points:"0", img: bloodlust, type:"Active"},
    {name:"Rampage Strike", class:"Beast", description:"50% chance to deal 2 Normal Attacks instead of 1", points:"3", img: rampageStrike, type:"Passive"},
    {name:"Siren's Song", class:"Aquatic", description:"Deal 250% Magical Attack to a random enemy and decrease their magical Resistance to x0.8 for 2PT", points:"0", img: sirensSong, type:"Active"},
    {name:"Bermuda Vortex", class:"Aquatic", description:"Deal 400% Magical Attack to all enemies and decrease their Magical Resisance to x0.6 for 3PT", points:"3", img: bermudaVortex, type:"Active"},
    {name:"Green Bulwark", class:"Plant", description:"Increase all allies' Defense(Including self) by 20% for 3PT, 50% chance to Stun a ramdom enemie for 1PT", points:"0", img: greenBluwark, type:"Active"},
    {name:"Sacred Oath", class:"Plant", description:"Taunt all enemy, Increase your Defense by 50% and decrease the targets' Physical Attack by 30% for 3PT", points:"3", img: sacredOath, type:"Active"},
    {name:"Wings Blande", class:"Bird", description:"Deal 2 Normal Attacks, each to a random enemy ", points:"0", img: wingsBlande, type:"Active"},
    {name:"Anemoi Bless", class:"Bird", description:"Increase Attack Speed by 50% and increase Critical Chance by 20% for 5TT", points:"3", img: anemoiBless, type:"Active"},
    {name:"Fated Death", class:"Reptile", description:"Deal 160% Physical Attack to 2 random enemies", points:"0", img: fatedDeath, type:"Active"},
    {name:"Battle cry", class:"Reptile", description: "Deal 200% Physical Attack to all enemies and Stun them for 1PT", points:"3", img: battleCry, type:"Active"},
    {name:"System Recharge", class:"Bug", description:"Refresh cooldown of a random Reusable item or Skill of a random ally except for own skills", points:"0", img: systemRecharge, type:"Active"},
    {name:"Power amplifier", class:"Bug", description:"Increase all alies' Critical Damage by 50 for 5PT", points:"3", img: powerAmplifier, type:"Active"},
    {name:"Soothing Dawn", class:"Dawn", description:"Heal 150% Magic Attack as HP to self or an ally with the lowest currunt HP", points:"0", img: sootingDawn, type:"Active"},
    {name:"Clarity Light", class:"Dawn", description:"Increase Dodge by 25 if there is no body equipment", points:"3", img: powerAmplifier, type:"Passive"},
    {name:"Solar Flare", class:"Dawn", description:"Increase Physiscal Attack by 200% if there is no weapon equipment", points:"4", img: powerAmplifier, type:"Passive"},
    {name:"NightFall", class:"Dusk", description:"Deal 100% Magical Attack to all enemies, have 40% chance to decrease all Attack, Defense, and Magic Resistance by 20% for 5PT", points:"0", img: nighdall, type:"Active"},
    {name:"Dark Ritual", class:"Dusk", description:"Deal 120% Magical Attack to all enemies. 20% chance to inflict them with any of these debuffs: Stun, Rage, Blind, Paralyze for 2PT", points:"3", img: darkRitual, type:"Active"},
    {name:"ERROR_666", class:"Mech", description:"Get Overheat, have 10% chance to deal 100% Physical Attack to a random ally. Otherwise will stop taking any action in this turn", points:"0", img: error_666, type:"Active"},
    {name:"GL1TCH_8", class:"Mech", description:"Deal 300% Physical Attack to a random enemy, have 10% chance to cause an ally to be Paralyzed for 1PT", points:"2", img: gl1tch_8, type:"Active"},
    {name:"PROTOCOL_444", class:"Mech", description:"Create a Shield that blocks damage equal to 200% Physical Attack", points:"5", img: gl1tch_8, type:"Active"},
  ]

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
            gap: 2,
            marginTop: 3,
            marginBottom: 3,
            position: 'relative',
          }}
        >
          {/* Card existente */}
          <Card
            sx={{
              p: 1,
              position: 'relative',
              alignContent: 'center',
              justifyContent: 'center',
              borderRadius: '16px',
              border: combatItem.quality !== 'Divine+' ? `3px solid ${combatItem.color}` : 'none',
            }}
          >
            <Image src={axie.img} alt="Imagen de axie" width={300} height={300} style={{ objectFit: 'contain' }} />
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
                  padding: '2px 10px',
                  borderRadius: '10px',
                }}
              >
                {combatItem.stars === 'infinite' ? (
                  <Infinity size={20} stroke="silver" strokeWidth={2} />
                ) : (
                  Array.from({ length: combatItem.stars }).map((_, i) => (
                    <Star key={i} size={20} fill="silver" stroke="silver" strokeWidth={2} />
                  ))
                )}
              </Box>
            )}
            {/* Información debajo de la imagen */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                Quality: {combatItem.quality}
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                Type: {axie.Type || 'Normal'}
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                Points: {axie.pointsAxie || 0}
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                {`Stats Modifier: ${combatItem.modifier}`}
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                Level: {axie.level}
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                Fatigue: {axie.fatigue}
              </Typography>
            </Box>
          </Card>

          {/* Nueva Card que mapea el array de items */}
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 4 }}>
            {/* Tarjeta Principal */}
            <Card
              sx={{
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                alignItems: 'center',
                borderRadius: '16px',
                width: '100%',
                maxWidth: 800,
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                Combat Abilities
              </Typography>

              {/* Contenedor de tarjetas internas para las habilidades de combate */}
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap', // Permite que las tarjetas se ubiquen una al lado de otra y se ajusten al ancho disponible
                  gap: 2,          // Espacio entre las tarjetas
                  justifyContent: 'center',
                  width: '100%',
                }}
              >
                {combatAbilities
                  .filter(item => item.class === axie.class) // Asegura que las habilidades coincidan con la clase del Axie
                  .map((item, index) => {
                    const qualityData = combatData.find(quality => quality.points === parseInt(item.points));

                    // Verificar si el item está bloqueado o no
                    const isBlocked = parseInt(item.points) > axie.pointsAxie; // Se bloquea si los puntos son mayores a los de Axie

                    return (
                      <Card
                        key={index}
                        sx={{
                          p: 2,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2,
                          borderRadius: '12px',
                          border: '1px solid gray',
                          position: 'relative',
                          width: 200, // Ancho de cada tarjeta de habilidad
                        }}
                      >
                        {/* Lado izquierdo: imagen de bloqueado si está bloqueado, estrellas y Unlock */}
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <Typography
                              sx={{
                                fontWeight: 'bold',
                                color: isBlocked ? 'gray' : 'green', // Grisar el texto de Unlock si está bloqueado
                              }}
                            >
                              Unlock
                            </Typography>
                            <Box
                              sx={{
                                display: 'flex',
                                gap: 0.5,
                                padding: '4px 8px',
                                borderRadius: '8px',
                                backgroundColor: qualityData ? qualityData.color : 'gray',
                              }}
                            >
                              {Array.from({ length: qualityData?.stars || 1 }).map((_, i) => (
                                <Star key={i} size={20} fill="silver" stroke="silver" strokeWidth={2} />
                              ))}
                            </Box>
                          </Box>

                          {/* Imagen del item o imagen "Blocked" */}
                          <Image
                            src={isBlocked ? blockedImg : item.img} // Mostrar la imagen de bloqueado si está bloqueado
                            alt={isBlocked ? 'Blocked' : item.description}
                            width={60}
                            height={60}
                            style={{ objectFit: 'contain', marginTop: '8px' }}
                          />
                        </Box>

                        {/* Lado derecho: tipo y descripción */}
                        <Box sx={{ flex: 1 }}>
                          <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'gray' }}>
                            {item.name}
                          </Typography>
                          <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'gray' }}>
                            {item.type}
                          </Typography>
                          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                            Description: {item.description}
                          </Typography>
                        </Box>
                      </Card>
                    );
                  })}
              </Box>
            </Card>
          </Box>
        </Box>
      )}
    </Box>
  </Box>
  );
}
