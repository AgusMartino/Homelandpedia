import React from "react";
import { Typography, Box, Card, CardContent } from "@mui/joy";
import AxieHomeland from '@/img/AxieInfinityHomeland.jpg';
import Savannah from '@/img/savannah.jpg';
import Forest from '@/img/forest.jpg';
import Artic from '@/img/artic.jpg';
import Mystic from '@/img/mystic.jpg';
import Genesis from '@/img/genesis.jpg';
import SavannahIcon from '@/img/plotSavannah.jpg';
import ForestIcon from '@/img/plotForest.jpg';
import ArticIcon from '@/img/plotArtic.jpg';
import MysticIcon from '@/img/plotMystic.jpg';
import GenesisIcon from '@/img/plotGenesis.jpg';
import AxsIcon from '@/img/axsLogo.jpg';
import { ArrowUp, ArrowDown } from 'lucide-react';

import Image from 'next/image';

const Inicio = () => {
  return (
    <main className="mx-2 flex flex-col items-center">
      <Typography color="neutral" level="h1" variant="plain">
        <Image
            component="img"
            src={AxieHomeland}
            alt="Axie Homeland"
            width={250}
            height={250}
            style={{ borderRadius: '8px' }}
        />
      </Typography>

      <Box sx={{ mb: 4, textAlign: 'center' }}>
            <Typography color="neutral" level="h1" variant="plain" sx={{ mb: 4 }}>
              Lands Types
            </Typography>
      </Box>

      {/* Columnas con imágenes y descripciones */}
      <Box sx={{ display: 'flex', gap: 4, mb: 4 }}>
        {/* Columna izquierda */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Card variant="outlined" sx={{ display: 'flex', width: 500 }}>
            <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
              {/* Imagen SavannahIcon y título Savannah */}
              <Box display="flex" alignItems="center">
                <Image
                  src={SavannahIcon}
                  alt="SavannahIcon"
                  width={50}
                  height={50}
                />
                <Box
                  sx={{
                    background: 'linear-gradient(90deg, #FF8C00, #000)',
                    padding: '4px 12px',
                    borderRadius: '20px', // Bordes circulares en los costados
                    display: 'flex',
                    alignItems: 'center',
                    marginLeft: '8px',
                    flexGrow: 1, // Permite que este contenedor se expanda para ocupar espacio
                  }}
                >
                  <Typography color="neutral" level="h4" variant="plain">
                    Savannah
                  </Typography>
                </Box>
              </Box>
              {/* AxsIcon y texto en el lado derecho */}
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                px={1} // Padding horizontal para darle espacio al contenido dentro del borde
                sx={{
                  border: '1px solid #ccc', // Color y estilo del borde
                  borderRadius: '20px', // Bordes redondeados en los lados
                  height: '40px', // Altura para que el borde tenga forma rectangular
                }}
              >
                <Image
                  src={AxsIcon}
                  alt="AxsIcon"
                  width={25}
                  height={25}
                />
                <Typography color="neutral" variant="plain" sx={{ marginLeft: '4px' }}>
                  0.043
                </Typography>
              </Box>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Box display="flex" flexDirection="column" alignItems="center" width="100px">
                <Image
                  src={Savannah}
                  alt="Savannah"
                  width={100}
                  height={100}
                />
              </Box>
              <Box display="flex" alignItems="left">
                <ArrowUp color="#00ff11" />-17.5% metalwork
              </Box>
              <Box display="flex" flexDirection="column" alignItems="left">
                <Box display="flex" alignItems="center">
                  <ArrowDown color="#ff0000" />+10% consumable
                </Box>
                <Box display="flex" alignItems="center">
                  <ArrowDown color="#ff0000" />+10% upgrade
                </Box>
              </Box>
            </Box>
            <CardContent>
              <Typography>
                Savannah plots are the cheapest and most readily available to play with. This is ideal if you are new to the game and don't know how to play.
              </Typography>
              <Typography>
              Many players use Savannah plot to store their resources. Despite the price of this land, it is great for crafting weapons, armor, rings. On this land you can earn up to 0.043 AXS daily.
              </Typography>
            </CardContent>
          </Card>
          <Card variant="outlined" sx={{ display: 'flex', width: 500 }}>
            <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
              {/* Imagen ArticIcon y título Artic */}
              <Box display="flex" alignItems="center">
                <Image
                  src={ArticIcon}
                  alt="ArticIcon"
                  width={50}
                  height={50}
                />
                <Box
                  sx={{
                    background: 'linear-gradient(90deg, #bbbfbb, #000)',
                    padding: '4px 12px',
                    borderRadius: '20px', // Bordes circulares en los costados
                    display: 'flex',
                    alignItems: 'center',
                    marginLeft: '8px',
                  }}
                >
                  <Typography color="neutral" level="h4" variant="plain">
                    Artic
                  </Typography>
                </Box>
                {/* AxsIcon y texto en el lado derecho */}
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  px={1} // Padding horizontal para darle espacio al contenido dentro del borde
                  sx={{
                    border: '1px solid #ccc', // Color y estilo del borde
                    borderRadius: '20px', // Bordes redondeados en los lados
                    height: '40px', // Altura para que el borde tenga forma rectangular
                  }}
                >
                  <Image
                    src={AxsIcon}
                    alt="AxsIcon"
                    width={25}
                    height={25}
                  />
                  <Typography color="neutral" variant="plain" sx={{ marginLeft: '4px' }}>
                    0.396
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Image
              component="img"
              src={Artic}
              alt="Artic"
              width={100}
              height={100}
            />
            <CardContent>
              <Typography>Nuestra descripción de la imagen izquierda 2.</Typography>
            </CardContent>
          </Card>
        </Box>

        {/* Columna derecha */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Card variant="outlined" sx={{ display: 'flex', width: 500 }}>
            <Box display="flex" alignItems="center">
              <Image
                src={ForestIcon}
                alt="ForestIcon"
                width={50}
                height={50}
              />
              <Box
                sx={{
                  background: 'linear-gradient(90deg, #2bda2b, #000)',
                  padding: '4px 12px',
                  borderRadius: '20px', // Bordes circulares en los costados
                  display: 'flex',
                  alignItems: 'center',
                  marginLeft: '8px',
                }}
              >
                <Typography color="neutral" level="h4" variant="plain">
                  Forest
                </Typography>
              </Box>
            </Box>
            <Image
              component="img"
              src={Forest}
              alt="Forest"
              width={100}
              height={100}
            />
            <CardContent>
              <Typography>Nuestra descripción de la imagen derecha 1.</Typography>
            </CardContent>
          </Card>
          <Card variant="outlined" sx={{ display: 'flex', width: 500 }}>
            <Box display="flex" alignItems="center">
              <Image
                src={MysticIcon}
                alt="MysticIcon"
                width={50}
                height={50}
              />
              <Box
                sx={{
                  background: 'linear-gradient(90deg, #b316df, #000)',
                  padding: '4px 12px',
                  borderRadius: '20px', // Bordes circulares en los costados
                  display: 'flex',
                  alignItems: 'center',
                  marginLeft: '8px',
                }}
              >
                <Typography color="neutral" level="h4" variant="plain">
                  Mystic
                </Typography>
              </Box>
            </Box>
            <Image
              component="img"
              src={Mystic}
              alt="Msytic"
              width={100}
              height={100}
            />
            <CardContent>
              <Typography>Nuestra descripción de la imagen derecha 2.</Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>

      {/* Imagen inferior con descripción */}
      <Card variant="outlined" sx={{ display: 'flex', width: 600 }}>
        <Box display="flex" alignItems="center">
          <Image
            src={GenesisIcon}
            alt="GenesisIcon"
            width={50}
            height={50}
          />
          <Box
            sx={{
              background: 'linear-gradient(90deg, #3c7fec, #000)',
              padding: '4px 12px',
              borderRadius: '20px', // Bordes circulares en los costados
              display: 'flex',
              alignItems: 'center',
              marginLeft: '8px',
            }}
          >
            <Typography color="neutral" level="h4" variant="plain">
              Genesis
            </Typography>
          </Box>
        </Box>
        <Image
          component="img"
          src={Genesis}
          alt="Genesis"
          width={100}
          height={100}
        />
        <CardContent>
          <Typography>Descripción detallada de la imagen inferior.</Typography>
        </CardContent>
      </Card>
    </main>
  );
};

export default Inicio;
