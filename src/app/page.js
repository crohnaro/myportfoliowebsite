'use client'

import styles from "./page.module.css";
import Header from "../components/Header/header";
import "./globals.css";
import { Box, Container } from "@mui/material";
import ImageLogo from "@/components/ImageLogo/imageLogo";
import BlackholeVideo from "@/components/BlackHoleVideo/blackholevideo";
import MainTexts from "@/components/MainTexts/maintexts";

import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";



export default function Home() {

  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);
  return (
    <main ref={scrollRef} >
      <Container maxWidth="xl">
        <Header />
        <Box className={styles.mainContainer}>
          <MainTexts />
          <ImageLogo />
        </Box>
      </Container>
      <BlackholeVideo />
    </main>
  );
}
