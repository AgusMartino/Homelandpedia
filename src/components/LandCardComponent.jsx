import * as React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/joy';
import Image from 'next/image';

const LandCard = ({ land }) => {
  return (
    <Card variant="outlined" sx={{ maxWidth: 250, margin: 'auto'}}>
      {/* Imagen del terreno */}
      <Image
        src={land.cdmImage}
        alt={`Land plot at ${land.col}, ${land.row}`}
        width={250}
        height={250}
        style={{ borderRadius: '8px' }}
      />

      <CardContent>
        {/* Tipo de terreno y token ID */}
        <Typography level="h2" fontSize="lg" mb={1}>
          Land Type: {land.landType}
        </Typography>

        {/* Coordenadas */}
        <Typography level="body2" mt={1}>
          Coordinates: {land.col}, {land.row}
        </Typography>

        {/* Precio en ETH y USD */}
        <Box sx={{ display: "flex", gap: 0.5 }}>
          <Image
            src="https://cdn.skymavis.com/ronin/2020/erc20/0xc99a6a985ed2cac1ef41640596c5a5f9f4e19ef5/logo.png"
            alt="Eth"
            width={20}
            height={20}
          />
          <Typography level="body2">
            {land.minprinceEth}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 0.5 }}>
          <Image
            src="https://cdn.skymavis.com/ronin/2020/erc20/0x0b7007c13325c48911f73a2dad5fa5dcbf808adc/logo.png"
            alt="Usd"
            width={20}
            height={20}
          />
          <Typography level="body2">
            {land.minprinceUsd}
          </Typography>
        </Box>

        {/* Datos adicionales de la parcela */}
        <Box sx={{ display: "flex", gap: 1, mt: 1  }}>
            <Image
              src="https://cdn.axieinfinity.com/marketplace-website/asset-icon/homeland-building.png"
              alt="Usd"
              width={25}
              height={25}
            />
            <Typography level="body2">
            Buildings: {land.plot_data.number_of_buildings}
            </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
            <Image
              src="https://cdn.axieinfinity.com/marketplace-website/asset-icon/axie-tab-icon.png"
              alt="Usd"
              width={25}
              height={25}
            />
          <Typography level="body2">
            Workers Axies: {land.plot_data.number_of_workers}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 1, mt: 1  }}>
            <Image
              src="https://cdn.axieinfinity.com/marketplace-website/asset-icon/homeland-altar-atia.png"
              alt="Usd"
              width={25}
              height={25}
            />
            <Typography level="body2">
            Altar of Atia Level: {land.plot_data.townhall_level}
            </Typography>
        </Box>

        {/* Botón para ver más detalles */}
        <Box mt={2} textAlign="center">
          <Button
            component="a"
            href={land.url}
            target="_blank"
            rel="noopener noreferrer"
            variant="solid"
          >
            View on Marketplace
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default LandCard;
