"use client";
import React from "react";
import Link from "next/link";
import AxieHomeland from '@/img/AxieInfinityHomeland.jpg';
import Tooltip from '@mui/material/Tooltip';
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
        <IconButton title="Home">
          <House />
        </IconButton>
      </Link>
      <Link href="/market">
        <IconButton title="Marketplace">
          <Store />
        </IconButton>
      </Link>
      <Link href="/mementoCalculator">
        <IconButton title="Calculate Memento">
          <FlameKindling />
        </IconButton>
      </Link>
    </Sheet>
  );
};

export default Navbar;
