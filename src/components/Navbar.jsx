"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import AxieHomeland from '@/img/AxieInfinityHomeland.jpg';

import {
  Sheet,
  IconButton,
  Box,
  Typography,
  Menu,
  MenuItem,
} from "@mui/joy";

import { House, Store, FlameKindling, Heart, BookOpenText, School, Axe, ClockArrowUp, Swords, WalletMinimal, Anvil  } from "lucide-react";

const Navbar = () => {
  const [menuAnchor, setMenuAnchor] = useState(null);

  const toggleMenu = (event) => {
    if (menuAnchor) {
      setMenuAnchor(null);
    } else {
      setMenuAnchor(event.currentTarget);
    }
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  const handleIconClick = () => {
    // Cierra el menú si está abierto
    if (menuAnchor) {
      setMenuAnchor(null);
    }
  };

  return (
    <Sheet
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 1,
        gap: 1,
        height: "10vh",
        position: "relative",
      }}
    >
      {/* Imagen a la izquierda */}
      <Box
        sx={{
          position: "absolute",
          left: "16px",
          height: "80%",
        }}
      >
        <Image
          src={AxieHomeland}
          alt="Logo"
          width={75}
          height={75}
          unoptimized={true}
        />
      </Box>

      {/* Botones centrados */}
      <Link href="/" passHref>
        <IconButton title="Home" onClick={handleIconClick}>
          <House />
        </IconButton>
      </Link>
      <Link href="/market" passHref>
        <IconButton title="Marketplace" onClick={handleIconClick}>
          <Store />
        </IconButton>
      </Link>
      <Link href="/mementoCalculator" passHref>
        <IconButton title="Calculate Memento" onClick={handleIconClick}>
          <FlameKindling />
        </IconButton>
      </Link>
      <Link href="/forgeCalculator" passHref>
        <IconButton title="Calculate Memento" onClick={handleIconClick}>
          <Anvil />
        </IconButton>
      </Link>

      {/* Menú de Opciones */}
      <IconButton title="Wiki" onClick={toggleMenu}>
        <BookOpenText />
      </IconButton>
      <Menu
        anchorEl={menuAnchor}
        open={Boolean(menuAnchor)}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <MenuItem onClick={handleMenuClose}>
          <Link href="/buildings" passHref>
            <Box display="flex" alignItems="center" gap={1}>
              <School />
              <Typography>Building</Typography>
            </Box>
          </Link>
        </MenuItem>
{/*         <MenuItem onClick={handleMenuClose}>
          <Box display="flex" alignItems="center" gap={1}>
            <Axe />
            <Typography>Axe</Typography>
          </Box>
        </MenuItem> */}
      </Menu>
      <Link href="/axpCalculator" passHref>
        <IconButton title="Axp Calculator" onClick={handleIconClick}>
          <ClockArrowUp />
        </IconButton>
      </Link>
      <Link href="/axieAdventureCalculator" passHref>
        <IconButton title="Axie Adventure Calculator" onClick={handleIconClick}>
          <Swords />
        </IconButton>
      </Link>
      <Link href="/evolvedCalculator" passHref>
        <IconButton title="Axie Adventure Calculator" onClick={handleIconClick}>
          <WalletMinimal />
        </IconButton>
      </Link>

      {/* Sección de soporte y donación */}
      <Box
        sx={{
          position: "absolute",
          right: "16px",
          height: "80%",
        }}
      >
        <Box sx={{ display: "flex", gap: 0.5, alignItems: "center", marginRight: 10 }}>
          <Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
            <Typography variant="body2">
              Support
            </Typography>
          </Box>
          <Heart />
        </Box>
        <Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
          <Typography variant="body2">
            Donate to agusxcala.ron
          </Typography>
        </Box>
      </Box>
    </Sheet>
  );
};

export default Navbar;
