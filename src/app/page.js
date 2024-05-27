import styles from "./page.module.css";
import Header from "../components/Header/header";
import "./globals.css";
import { Box, Container } from "@mui/material";
import ImageLogo from "@/components/ImageLogo/imageLogo";
import BlackholeVideo from "@/components/BlackHoleVideo/blackholevideo";



export const metadata = {
  title: "Vini Dev",
  description: "Meu Portfólio",
};

export default function Home() {
  return (
    <main className={styles.main}>
      <Container maxWidth="xl">
        <Header />
      </Container>
      <Container maxWidth="xl">
        <Box className={styles.mainContainer}>
          <Box data-scroll-section className={styles.textContent}>
            <Box>
              <h1 data-scroll data-scroll-speed="1">OI, EU SOU O</h1>
              <span data-scroll data-scroll-speed="3">Vini</span>
              <h2>DESENVOLVEDOR FULL-STACK_</h2>
            </Box>
            <Box>
              <p>
                Olá! Sou Vinicios, Professor e Software Engineer. Possuo conhecimento em diversas
                tecnologias e experiência em UX/UI. Acredito firmemente que a
                paixão aliada ao empenho são essenciais para concretizar ideias.
              </p>
            </Box>
            <Box sx={{ display: "flex", gap: "12px"}}>
              <button className={styles.hireMe}>ME CONTRATE</button>
              <button className={styles.getInTouch}>ENTRE EM CONTATO</button>
            </Box>
          </Box>
          <Box>
            <ImageLogo />
          </Box>
        </Box>
      </Container>
      <BlackholeVideo />
    </main>
  );
}
