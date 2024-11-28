"use client";
import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/joy";
import Image from "next/image";

const ItemCard = ({ item }) => {
  if (!item) return null;

  return (
    <Card
      variant="outlined"
      sx={{
        width: 150,
        padding: 2,
        height: 275,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {/* Nombre del item con altura fija */}
      <Box sx={{ width: "100%", height: 50, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 1 }}>
        <Typography level="h4" fontWeight="bold" textAlign="center">
          {item.name}
        </Typography>
      </Box>

      {/* Imagen del item usando Next.js Image */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexGrow: 1,
          height: "100px",
        }}
      >
        <Image
          src={item.img}
          alt={item.name}
          width={75}
          height={75}
          style={{ objectFit: "contain" }}
          unoptimized={true}
        />
      </Box>

      {/* Precios en ETH y USD */}
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 0.5,
          padding: 0,
          width: "100%",
        }}
      >
        {/* Precio en ETH */}
        <Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
          <Image
            src="https://cdn.skymavis.com/ronin/2020/erc20/0xc99a6a985ed2cac1ef41640596c5a5f9f4e19ef5/logo.png"
            alt="Eth"
            width={20}
            height={20}
            unoptimized={true}
          />
          <Typography>{item.priceEth}</Typography>
        </Box>

        {/* Precio en USD */}
        <Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
          <Image
            src="https://cdn.skymavis.com/ronin/2020/erc20/0x0b7007c13325c48911f73a2dad5fa5dcbf808adc/logo.png"
            alt="Usd"
            width={20}
            height={20}
            unoptimized={true}
          />
          <Typography level="body2">{item.priceUsd}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
