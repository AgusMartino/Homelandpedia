"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AxieHomeland from "@/img/AxieInfinityHomeland.jpg";

import {
  Sheet,
  IconButton,
  Box,
  Typography,
  Menu,
  MenuItem,
} from "@mui/joy";

import {
  House,
  Store,
  FlameKindling,
  Heart,
  BookOpenText,
  School,
  Axe,
  ClockArrowUp,
  Swords,
  WalletMinimal,
  Anvil,
  TvMinimal,
  HandCoins,
  PiggyBank,
  ArchiveRestore,
  Bolt,
  TreePalm,
  PencilRuler,
} from "lucide-react";

const Navbar = () => {
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menu, event) => {
    if (menu === activeMenu) {
      setMenuAnchor(null);
      setActiveMenu(null);
    } else {
      setMenuAnchor(event.currentTarget);
      setActiveMenu(menu);
    }
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
    setActiveMenu(null);
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

      <Link href="/" passHref>
        <IconButton title="Home">
          <House />
        </IconButton>
      </Link>

      {/* Menú Wiki */}
      <IconButton
        title="Wiki"
        onClick={(e) => toggleMenu("wiki", e)}
      >
        <BookOpenText />
        <Typography sx={{ ml: 1 }}>Wiki</Typography>
      </IconButton>
      {activeMenu === "wiki" && (
        <Menu
          anchorEl={menuAnchor}
          open={activeMenu === "wiki"}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>
            <Link href="/landTypes" passHref>
              <Box display="flex" alignItems="center" gap={1}>
                <TreePalm />
                <Typography>Land Types</Typography>
              </Box>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link href="/gameInterface" passHref>
              <Box display="flex" alignItems="center" gap={1}>
                <TvMinimal />
                <Typography>Game Interface</Typography>
              </Box>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link href="/basicMechanics" passHref>
              <Box display="flex" alignItems="center" gap={1}>
                <Bolt />
                <Typography>Basic Mechanics</Typography>
              </Box>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link href="/ancientCoinEarning" passHref>
              <Box display="flex" alignItems="center" gap={1}>
                <HandCoins />
                <Typography>Ancient Coin Earning</Typography>
              </Box>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link href="/moonfallSystem" passHref>
              <Box display="flex" alignItems="center" gap={1}>
                <ArchiveRestore />
                <Typography>Moonfall Reward System</Typography>
              </Box>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link href="/buildings" passHref>
              <Box display="flex" alignItems="center" gap={1}>
                <School />
                <Typography>Building</Typography>
              </Box>
            </Link>
          </MenuItem>
        </Menu>
      )}

      {/* Menú Tools */}
      <IconButton
        title="Tools"
        onClick={(e) => toggleMenu("tools", e)}
      >
        <PencilRuler />
        <Typography sx={{ ml: 1 }}>Tools</Typography>
      </IconButton>
      {activeMenu === "tools" && (
        <Menu
          anchorEl={menuAnchor}
          open={activeMenu === "tools"}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>
            <Link href="/market" passHref>
              <Box display="flex" alignItems="center" gap={1}>
                <Store />
                <Typography>Market</Typography>
              </Box>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link href="/mementoCalculator" passHref>
              <Box display="flex" alignItems="center" gap={1}>
                <FlameKindling />
                <Typography>Calculate Mementos</Typography>
              </Box>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link href="/forgeCalculator" passHref>
              <Box display="flex" alignItems="center" gap={1}>
                <Anvil />
                <Typography>Forge Calculator</Typography>
              </Box>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link href="/axpCalculator" passHref>
              <Box display="flex" alignItems="center" gap={1}>
                <ClockArrowUp />
                <Typography>Axp Calculator</Typography>
              </Box>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link href="/axieAdventureCalculator" passHref>
              <Box display="flex" alignItems="center" gap={1}>
                <Swords />
                <Typography>Axie Adventure Calculator</Typography>
              </Box>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link href="/evolvedCalculator" passHref>
              <Box display="flex" alignItems="center" gap={1}>
                <WalletMinimal />
                <Typography>Axie Evolved Calculator</Typography>
              </Box>
            </Link>
          </MenuItem>
        </Menu>
      )}

      {/* Sección de soporte y donación */}
      <Box
        sx={{
          position: "absolute",
          right: "16px",
          height: "80%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 0.5,
            alignItems: "center",
            marginRight: 10,
          }}
        >
          <Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
            <Typography variant="body2">Support</Typography>
          </Box>
          <Heart />
        </Box>
        <Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
          <Typography variant="body2">Donate to agusxcala.ron</Typography>
        </Box>
      </Box>
    </Sheet>
  );
};

export default Navbar;
