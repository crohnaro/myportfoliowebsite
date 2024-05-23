"use client";

import styles from "./header.module.css";
import "../../app/globals.css";
import Image from "next/image";
import logo from "../../assets/Logos SVG/Ativo 4.svg";
import Link from "next/link";
import { Button, Drawer, ThemeProvider, createTheme } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import React from "react";

export default function Header() {
  const theme = createTheme({
    components: {
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: "#111111",
            padding: 50,
            gap: 20,
          },
        },
      },
    },
  });

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <ThemeProvider theme={theme}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <Image
            src={logo}
            width={0}
            height={0}
            style={{ width: "100%", height: "auto" }}
          ></Image>
        </div>
        <div className={styles.menuLinksContainer}>
          <div className={styles.menuLinks}>
            <Link className={styles.menuLink} href="#">
              Home
            </Link>
            <Link className={styles.menuLink} href="#">
              Sobre
            </Link>
            <Link className={styles.menuLink} href="#">
              Portfólio
            </Link>
            <Link className={styles.menuLink} href="#">
              Contatos
            </Link>
          </div>
          
          <Button onClick={toggleDrawer(true)}>
            <MenuRoundedIcon className={styles.menuHamburguer} />
          </Button>
          <Drawer
            sx={{ color: "#111111" }}
            className={styles.drawer}
            anchor="right"
            open={open}
            onClose={toggleDrawer(false)}
          >
            <Link className={styles.menuLink} href="#">
              Home
            </Link>
            <Link className={styles.menuLink} href="#">
              Sobre
            </Link>
            <Link className={styles.menuLink} href="#">
              Portfólio
            </Link>
            <Link className={styles.menuLink} href="#">
              Contatos
            </Link>
          </Drawer>
        </div>
      </header>
    </ThemeProvider>
  );
}
