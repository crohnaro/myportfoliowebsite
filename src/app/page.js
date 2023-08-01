import styles from "./page.module.css";
import Header from "../components/Header/header";
import "./globals.css";
import { Container } from "@mui/material";

export default function Home() {
  return (
    <main className={styles.main}>
      <Container maxWidth='xl'>
        <Header />
      </Container>
    </main>
  );
}
