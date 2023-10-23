import styles from "./page.module.css";
import Header from "../components/Header/header";
import "./globals.css";
import { Box, Container } from "@mui/material";
import ImageLogo from "@/components/ImageLogo/imageLogo";

export default function Home() {
  return (
    <main className={styles.main}>
      <Container maxWidth="xl">
        <Header />
      </Container>
      <Box sx={{ width: "100%", display: "flex" }}>
        <Box className={styles.textContent}>
          <Box>
            <h1>Oi, eu sou o</h1>
            <span>Vini</span>
            <h2>Desenvolvedor Full-Stack</h2>
          </Box>
        </Box>
        <Box>
          <ImageLogo />
        </Box>
      </Box>
    </main>
  );
}
