"use client";
import React from "react";
import { Card, Typography, Box, Divider } from "@mui/joy";
import Image from "next/image";

// Componente para una tarjeta individual de cada ítem
const ItemCard = ({ item }) => {
  if (!item) return null;

  return (
    <Card
      variant="outlined"
      sx={{
        width: 250,
        padding: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {/* Nombre del ítem */}
      <Typography level="h4" fontWeight="bold" mb={1}>
        {item.name}
      </Typography>

      {/* Imagen del ítem */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100px",
          marginBottom: 2,
        }}
      >
        <Image
          src={item.img.src}
          alt={item.name}
          width={75}
          height={75}
          style={{ objectFit: "contain" }}
          unoptimized={true}
        />
      </Box>

      {/* Receta, si el ítem la tiene */}
      {item.recipe && item.recipe.items.length > 0 && (
        <>
          <Typography fontWeight="bold" mb={1}>
            Recipe
          </Typography>

          {/* Lista de ingredientes de la receta */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1,
              width: "100%",
              paddingX: 1, // Espacio horizontal
            }}
          >
            {item.recipe.items.map((recipeItem, index) => (
              <Box
                key={index}
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
                  src={recipeItem.img.src}
                  alt={recipeItem.name}
                  width={20}
                  height={20}
                  style={{ objectFit: "contain" }}
                  unoptimized={true}
                />
                <Typography level="body2" textAlign="center">
                  {recipeItem.name} x{recipeItem.quantity}
                </Typography>
                <Box display="flex" alignItems="center" gap={0.5} sx={{ paddingLeft: 1 }}>
                  <Image
                    src="https://cdn.skymavis.com/ronin/2020/erc20/0x0b7007c13325c48911f73a2dad5fa5dcbf808adc/logo.png"
                    alt="USD"
                    width={15}
                    height={15}
                    unoptimized={true}
                  />
                  <Typography level="body2" textAlign="center">
                    ${recipeItem.priceUsd}
                  </Typography>
                </Box>
              </Box>
            ))}

            {/* Fee de la receta */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                justifyContent: "center",
                width: "100%",
                paddingX: 1, // Espacio horizontal
              }}
            >
              <Image
                src="https://cdn.skymavis.com/ronin/2020/erc20/0x97a9107c1793bc407d6f527b77e7fff4d812bece/logo.png"
                alt="Axs"
                width={20}
                height={20}
                style={{ objectFit: "contain" }}
                unoptimized={true}
              />
              <Typography level="body2" textAlign="center">
                Fee
              </Typography>
              <Box display="flex" alignItems="center" gap={0.5} sx={{ paddingLeft: 1 }}>
                <Image
                  src="https://cdn.skymavis.com/ronin/2020/erc20/0x0b7007c13325c48911f73a2dad5fa5dcbf808adc/logo.png"
                  alt="USD"
                  width={15}
                  height={15}
                  unoptimized={true}
                />
                <Typography level="body2" textAlign="center">
                  ${item.recipe.fee}
                </Typography>
              </Box>
            </Box>
          </Box>
        </>
      )}

      {/* Divider y costo total al final */}
      <Box sx={{ width: "100%", marginTop: "auto" }}>
        <Divider sx={{ marginY: 1 }} />
        <Box display="flex" alignItems="center" gap={0.5} justifyContent="center">
          <Typography fontWeight="bold">Cost:</Typography>
          <Image
            src="https://cdn.skymavis.com/ronin/2020/erc20/0x0b7007c13325c48911f73a2dad5fa5dcbf808adc/logo.png"
            alt="USD"
            width={15}
            height={15}
            unoptimized={true}
          />
          <Typography fontWeight="bold">${item.recipe.total}</Typography>
        </Box>
      </Box>
    </Card>
  );
};

// Componente que muestra la lista completa de tarjetas
const ItemList = ({ items }) => (
  <Box
    sx={{
      display: "flex",
      gap: 2,
      flexWrap: "wrap",
    }}
  >
    {items.map((item, index) => (
      <ItemCard key={index} item={item} />
    ))}
  </Box>
);

export default ItemList;
