import styles from "./page.module.css";
import Header from "../components/Header/header";
import "./globals.css";
import { Container } from "@mui/material";
import ImageLogo from "@/components/ImageLogo/imageLogo";

export default function Home() {
  return (
    <main className={styles.main}>
      <Container maxWidth='xl'>
        <Header />
      </Container>
      <ImageLogo />
    </main>
  );
}
