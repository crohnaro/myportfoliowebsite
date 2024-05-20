import styles from "./page.module.css";
import Header from "../components/Header/header";
import "./globals.css";
import { Box, Button, Container } from "@mui/material";
import ImageLogo from "@/components/ImageLogo/imageLogo";

export default function Home() {
  return (
    <main className={styles.main}>
      <Container maxWidth="xl">
        <Header />
      </Container>
      <Container maxWidth="xl">
        <Box className={styles.mainContainer}>
          <Box className={styles.textContent}>
            <Box>
              <h1>OI, EU SOU O</h1>
              <span>Vini</span>
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
    </main>
  );
}
