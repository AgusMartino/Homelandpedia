"use client";
import React from "react";
import Link from "next/link";
import AxieHomeland from '@/img/AxieInfinityHomeland.jpg';
import Image from 'next/image';
import {
  Sheet,
  IconButton,
  Box,
  Menu,
  MenuButton,
  MenuItem,
  Dropdown,
} from "@mui/joy";
import { House, Store, FlameKindling } from "lucide-react";

const Navbar = () => {
  return (
    <Sheet
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 1,
        gap: 1,
        height: "10vh",
        position: "relative", // Permite posicionar la imagen de manera absoluta
      }}
    >
      {/* Imagen a la izquierda */}
      <Box
        sx={{
          position: "absolute",
          left: "16px", // Ubica la imagen en la esquina izquierda
          height: "80%", // Ajusta la altura de la imagen según el Navbar
        }}
      >
        <Image
          src={AxieHomeland}
          alt="Logo"
          width={75}
          height={75}
        />
      </Box>

      
      {/* Botones centrados */}
      <Link href="/">
        <IconButton>
          <House />
        </IconButton>
      </Link>
      <Link href="/market">
        <IconButton>
          <Store />
        </IconButton>
      </Link>
      <Link href="/mementoCalculator">
        <IconButton>
          <FlameKindling />
        </IconButton>
      </Link>
    </Sheet>
  );
};

export default Navbar;
