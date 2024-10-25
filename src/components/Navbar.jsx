"use client";
import React from "react";
import Link from "next/link";
import {
  Sheet,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  Dropdown,
} from "@mui/joy";
import { House, Store } from "lucide-react";

/* const DropdownMenu = ({ label, links }) => {
  return (
    <Dropdown>
      <MenuButton variant="plain">{label}</MenuButton>
      <Menu variant="plain">
        {links.map((link) => (
          <MenuItem key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </MenuItem>
        ))}
      </Menu>
    </Dropdown>
  );
}; */

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
      }}
    >
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
    </Sheet>
  );
};

export default Navbar;
