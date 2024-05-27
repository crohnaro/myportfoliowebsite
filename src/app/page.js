import styles from "./page.module.css";
import Header from "../components/Header/header";
import "./globals.css";
import { Box, Container } from "@mui/material";
import ImageLogo from "@/components/ImageLogo/imageLogo";
import BlackholeVideo from "@/components/BlackHoleVideo/blackholevideo";
import MainTexts from "@/components/MainTexts/maintexts";

export const metadata = {
  title: "Vini Dev",
  description: "Meu Portfólio",
};

export default function Home() {
  return (
    <main>
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
