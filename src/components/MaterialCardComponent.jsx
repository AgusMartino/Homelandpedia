"use client";
import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/joy";
import Image from "next/image";

const ItemCard = ({ item }) => {
  if (!item) return null;

  return (
    <Card variant="outlined" sx={{ width: 150, padding: 2, height: 275}}>
    {/* Nombre del item */}
    <Typography level="h4" fontWeight="bold" textAlign="center" mb={1}>
      {item.name}
    </Typography>

    {/* Imagen del item usando Next.js Image */}
    <Box display="flex" justifyContent="center" mb={2}>
      <Image
        src={item.imageUrl}
        alt={item.name}
        width={75} // Ancho especificado para optimización de Next.js
        height={75} // Alto especificado para optimización de Next.js
        style={{ height:75 , objectFit: "contain" }}
      />
    </Box>

    {/* Precios en ETH y USD */}
    <CardContent>
      <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
        {/* Precio en ETH */}
        <Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
          <Image
            src="https://cdn.skymavis.com/ronin/2020/erc20/0xc99a6a985ed2cac1ef41640596c5a5f9f4e19ef5/logo.png"
            alt="Eth"
            width={20}
            height={20}
          />
          <Typography>{item.minprinceEth}</Typography>
        </Box>

        {/* Precio en USD */}
        <Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
          <Image
            src="https://cdn.skymavis.com/ronin/2020/erc20/0x0b7007c13325c48911f73a2dad5fa5dcbf808adc/logo.png"
            alt="Usd"
            width={20}
            height={20}
          />
          <Typography level="body2">{item.minprinceUsd}</Typography>
        </Box>
      </Box>
    </CardContent>
  </Card>
  );
};

export default ItemCard;
