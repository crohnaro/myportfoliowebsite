'use client'

import BlackholeVideo from "@/components/BlackHoleVideo/blackholevideo";
import Header from "@/components/Header/header";
import ImageLogo from "@/components/ImageLogo/imageLogo";
import MainTexts from "@/components/MainTexts/maintexts";
import { Box, Container } from "@mui/material";

import styles from './HeroPage.module.css'
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

export default function HeroPage() {
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
    <main ref={scrollRef}>
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
