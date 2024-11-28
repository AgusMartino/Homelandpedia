"use client";
import React from "react";
import { Box, Typography, Sheet } from "@mui/joy";
import discord from '@/img/discord.jpg'
import Image from "next/image";

const Footer = () => {
  return (
    <Sheet
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "8px 16px", // Reduce el padding para achicar el alto
        height: "60px", // Puedes ajustar esta altura según sea necesario
        boxShadow: "0 -2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
        <Typography variant="body2" sx={{ marginLeft: "16px" }}>
            Created By: Agusxcala.ron
        </Typography>

        <Typography variant="body2" sx={{ textAlign: "center", flex: 1 }}>
            This site is not an official site from the game developers.
        </Typography>

        <Typography variant="body2" sx={{ textAlign: "center", flex: 1 }}>
          Lunacian Code Coming soon
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", marginRight: "16px" }}>
            <a href="https://discordapp.com/users/586002499450961943" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center" }}>
                <div style={{ borderRadius: "50%", overflow: "hidden", width: 30, height: 30, marginRight: 3 }}>
                <Image
                    src={discord}
                    alt="discord"
                    width={30} // Ajusta el tamaño de la imagen si es necesario
                    height={30} // Ajusta la altura de la imagen si es necesario
                    style={{ objectFit: "cover" }} // Asegura que la imagen cubra todo el contenedor
                    unoptimized={true}
                />
                </div>
                <Typography variant="body2">
                agusxcala
                </Typography>
            </a>
        </Box>
    </Sheet>
  );
};

export default Footer;
