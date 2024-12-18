import React from "react";
import { Typography, Box, Card, CardContent } from "@mui/joy";
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
      <Box                 
        display="flex"
        alignItems="center"
        justifyContent="center"
        px={1} // Padding horizontal para darle espacio al contenido dentro del borde
        sx={{
          border: '1px solid #ccc', // Color y estilo del borde
          borderRadius: '30px', // Bordes redondeados en los lados
          height: '100%', // Altura para que el borde tenga forma rectangular
          mt: 2,
          mb: 4
        }}
      >
        <Typography color="neutral" level="h1" variant="plain">
          Lands Types
        </Typography>
      </Box>

      {/* Columnas con imágenes y descripciones */}
      <Box sx={{ display: 'flex', gap: 4, mb: 4 }}>
        {/* Columna izquierda */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Card variant="outlined" sx={{ display: 'flex', width: 600, height: 325 }}>
            <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
              {/* Imagen SavannahIcon y título Savannah */}
              <Box display="flex" alignItems="center">
                <Image
                  src={SavannahIcon}
                  alt="SavannahIcon"
                  width={50}
                  height={50}
                  unoptimized={true}
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
                  unoptimized={true}
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
                  unoptimized={true}
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
                Savannah plots are the cheapest and most readily available to play with. This is ideal if you are new to the game and do not know how to play.
              </Typography>
              <Typography>
                Many players use Savannah plot to store their resources. Despite the price of this land, it is great for crafting weapons, armor, rings. On this land you can earn up to 0.043 AXS daily.
              </Typography>
            </CardContent>
          </Card>
          <Card variant="outlined" sx={{ display: 'flex', width: 600, height: 340  }}>
            <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
              {/* Imagen ArticIcon y título Artic */}
              <Box display="flex" alignItems="center">
                <Image
                  src={ArticIcon}
                  alt="ArticIcon"
                  width={50}
                  height={50}
                  unoptimized={true}
                />
                <Box
                  sx={{
                    background: 'linear-gradient(90deg, #bbbfbb, #000)',
                    padding: '4px 12px',
                    borderRadius: '20px', // Bordes circulares en los costados
                    display: 'flex',
                    alignItems: 'center',
                    marginLeft: '8px',
                    flexGrow: 1, // Permite que este contenedor se expanda para ocupar espacio
                  }}
                >
                  <Typography color="neutral" level="h4" variant="plain">
                    Artic
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
                  unoptimized={true}
                />
                <Typography color="neutral" variant="plain" sx={{ marginLeft: '4px' }}>
                  0.396
                </Typography>
              </Box>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
              {/* Columna 1: Imagen */}
              <Box display="flex" flexDirection="column" alignItems="left" width="150px">
                <Image
                  src={Artic}
                  alt="Artic"
                  width={100}
                  height={100}
                  unoptimized={true}
                />
              </Box>

              {/* Columna 2: Primera y segunda flecha con texto */}
              <Box display="flex" flexDirection="column" alignItems="left" sx={{marginLeft: 4}}>
                <Box display="flex" alignItems="left">
                  <ArrowUp color="#00ff11" />
                  <Typography>-10% all crafting duration</Typography>
                </Box>
                <Box display="flex" alignItems="left" mt={1}>
                  <ArrowUp color="#00ff11" />
                  <Typography>-10% upgrade duration</Typography>
                </Box>
              </Box>

              {/* Columna 3: Tercera flecha con texto */}
              <Box display="flex" alignItems="left">
                <ArrowUp color="#00ff11" />
                <Typography>+10% spawn of ore deposits</Typography>
              </Box>
            </Box>
            <CardContent>
              <Typography>
                Arctic plot is considered to be the most favorable to buy. You will be able to craft on it 10% faster than usual. Also, most arctic plots are closer to the node (the center with high level trees).
              </Typography>
              <Typography>
                On this plot you can earn up to 0.396 AXS daily. This plot also gives you +20% chance to get Moonfall ticket.
              </Typography>
            </CardContent>
          </Card>
        </Box>

        {/* Columna derecha */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Card variant="outlined" sx={{ display: 'flex', width: 600, height: 325 }}>
            <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
              {/* Imagen ForestIcon y título ForestI */}
              <Box display="flex" alignItems="center">
                <Image
                  src={ForestIcon}
                  alt="ForestIcon"
                  width={50}
                  height={50}
                  unoptimized={true}
                />
                <Box
                  sx={{
                    background: 'linear-gradient(90deg, #2bda2b, #000)',
                    padding: '4px 12px',
                    borderRadius: '20px', // Bordes circulares en los costados
                    display: 'flex',
                    alignItems: 'center',
                    marginLeft: '8px',
                    flexGrow: 1, // Permite que este contenedor se expanda para ocupar espacio
                  }}
                >
                  <Typography color="neutral" level="h4" variant="plain">
                    Forest
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
                  unoptimized={true}
                />
                <Typography color="neutral" variant="plain" sx={{ marginLeft: '4px' }}>
                  0.139
                </Typography>
              </Box>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
              {/* Columna 1: Imagen */}
              <Box display="flex" flexDirection="column" alignItems="left" width="150px">
                <Image
                  src={Forest}
                  alt="Forest"
                  width={100}
                  height={100}
                  unoptimized={true}
                />
              </Box>

              {/* Columna 2: Primera y segunda flecha con texto */}
              <Box display="flex" flexDirection="column" alignItems="left" sx={{marginLeft: 4}}>
                <Box display="flex" alignItems="left" mt={1}>
                  <ArrowUp color="#00ff11" />
                  <Typography>-18.5% agriculture</Typography>
                </Box>
                <Box display="flex" alignItems="left" mt={1}>
                  <ArrowUp color="#00ff11" />
                  <Typography>-17% consumable</Typography>
                </Box>
                <Box display="flex" alignItems="left" mt={1}>
                  <ArrowUp color="#00ff11" />
                  <Typography>-15% agriculture structure</Typography>
                </Box>
              </Box>

              {/* Columna 3: Tercera flecha con texto */}
              <Box display="flex" flexDirection="column" alignItems="left">
                <Box display="flex" alignItems="left" mt={1}>
                  <ArrowUp color="#00ff11" />
                  <Typography>+20% spawn of lumber</Typography>
                </Box>
                <Box display="flex" alignItems="left" mt={1}>
                  <ArrowDown color="#ff0000" />
                  <Typography>+15% metalwork</Typography>
                </Box>
                <Box display="flex" alignItems="left" mt={1}>
                  <ArrowDown color="#ff0000" />
                  <Typography>+10% equipment crafting</Typography>
                </Box>
              </Box>
            </Box>
            <CardContent>
              <Typography>
                Forest plot is a good option for a starter. Quick spawn of the tree will allow you to sell it and accumulate gold quickly.
              </Typography>
              <Typography>
                On this plot you can earn up to 0.139 AXS daily. This plot also gives you +10% chance to get Moonfall ticket.
              </Typography>
            </CardContent>
          </Card>
          <Card variant="outlined" sx={{ display: 'flex', width: 600, height: 340  }}>
            <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
              {/* Imagen MysticIcon y título Mystic */}
              <Box display="flex" alignItems="center">
                <Image
                  src={MysticIcon}
                  alt="MysticIcon"
                  width={50}
                  height={50}
                  unoptimized={true}
                />
                <Box
                  sx={{
                    background: 'linear-gradient(90deg, #b316df, #000)',
                    padding: '4px 12px',
                    borderRadius: '20px', // Bordes circulares en los costados
                    display: 'flex',
                    alignItems: 'center',
                    marginLeft: '8px',
                    flexGrow: 1, // Permite que este contenedor se expanda para ocupar espacio
                  }}
                >
                  <Typography color="neutral" level="h4" variant="plain">
                    Mystic
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
                  unoptimized={true}
                />
                <Typography color="neutral" variant="plain" sx={{ marginLeft: '4px' }}>
                  0.878
                </Typography>
              </Box>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
              {/* Columna 1: Imagen */}
              <Box display="flex" flexDirection="column" alignItems="left" width="150px">
                <Image
                  src={Mystic}
                  alt="Mystic"
                  width={100}
                  height={100}
                  unoptimized={true}
                />
              </Box>

              {/* Columna 2: Primera y segunda flecha con texto */}
              <Box display="flex" flexDirection="column" alignItems="left" sx={{marginLeft: 4}}>
                <Box display="flex" alignItems="left" mt={1}>
                  <ArrowUp color="#00ff11" />
                  <Typography>-15% all crafting duration</Typography>
                </Box>
                <Box display="flex" alignItems="left" mt={1}>
                  <ArrowUp color="#00ff11" />
                  <Typography>-10% respawn material duration</Typography>
                </Box>
                <Box display="flex" alignItems="left" mt={1}>
                  <ArrowUp color="#00ff11" />
                  <Typography>+20% chance spawn stone deposit</Typography>
                </Box>
              </Box>

              {/* Columna 3: Tercera flecha con texto */}
              <Box display="flex" flexDirection="column" alignItems="left">
                <Box display="flex" alignItems="left" mt={1}>
                  <ArrowUp color="#00ff11" />
                  <Typography>-18% all production duration</Typography>
                </Box>
                <Box display="flex" alignItems="left" mt={1}>
                  <ArrowUp color="#00ff11" />
                  <Typography>-12.5% upgrade duration</Typography>
                </Box>
              </Box>
            </Box>
            <CardContent>
              <Typography>
                Mystic plot is one of the most expensive. By purchasing this plot you have a better chance of winning prizes in events, which will reduce your APR time.
              </Typography>
              <Typography>
                On this plot you can earn up to 0.878 AXS daily. This plot also gives you +30% chance to get Moonfall ticket.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>

      {/* Imagen inferior con descripción */}
      <Card variant="outlined" sx={{ display: 'flex', width: 600, height: 340  }}>
        <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
          {/* Imagen GenesisIcon y título Genesis */}
          <Box display="flex" alignItems="center">
            <Image
              src={GenesisIcon}
              alt="GenesisIcon"
              width={50}
              height={50}
              unoptimized={true}
            />
            <Box
              sx={{
                background: 'linear-gradient(90deg, #3c7fec, #000)',
                padding: '4px 12px',
                borderRadius: '20px', // Bordes circulares en los costados
                display: 'flex',
                alignItems: 'center',
                marginLeft: '8px',
                flexGrow: 1, // Permite que este contenedor se expanda para ocupar espacio
              }}
              >
              <Typography color="neutral" level="h4" variant="plain">
                Genesis
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
                unoptimized={true}
              />
              <Typography color="neutral" variant="plain" sx={{ marginLeft: '4px' }}>
                17.495
              </Typography>
            </Box>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="left" width="100%">
            {/* Columna 1: Imagen */}
            <Box display="flex" flexDirection="column" alignItems="left" width="150px">
              <Image
                src={Genesis}
                alt="Genesis"
                width={100}
                height={100}
                unoptimized={true}
              />
            </Box>

            {/* Columna 2: Primera y segunda flecha con texto */}
            <Box display="flex" flexDirection="column" alignItems="center">
              <Box display="flex" alignItems="center" mt={1} ml={6}>
                <ArrowUp color="#00ff11" />
                <Typography>-25% for all properties</Typography>
              </Box>
            </Box>
          </Box>
          <CardContent>
            <Typography>
              Genesis plot is the most expensive in the game. They are very limited and sometimes they are not even available for sale. And their price can be as high as 100 ETH.
            </Typography>
            <Typography>
              On this plot you can earn up to 17.495 AXS daily. This plot also gives you +50% chance to get Moonfall ticket.
            </Typography>
          </CardContent>
        </Card>
    </main>
  );
};

export default Inicio;