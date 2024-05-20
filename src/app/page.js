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
        <Box sx={{ display: "flex" }}>
          <Box className={styles.textContent}>
            <Box>
              <h1>OI, EU SOU O</h1>
              <span>Vini</span>
              <h2>DESENVOLVEDOR FULL-STACK_</h2>
            </Box>
            <Box>
              <p>
                Olá! Sou Vinicios, Professor e Software Engineer. Iniciei minha
                trajetória na área de Infraestrutura e Redes, mas durante a
                faculdade de Sistemas de Informação, descobri minha afinidade
                pelo desenvolvimento. Curso atualmente Pós Graduação em
                Engenharia de Software. Possuo conhecimento em diversas
                tecnologias e experiência em UX/UI. Acredito firmemente que a
                paixão aliada ao empenho são essenciais para concretizar ideias.
                Estou entusiasmado para contribuir e realizar um trabalho de
                qualidade em equipe. Espero podermos colaborar juntos!!
              </p>
            </Box>
          </Box>
          <Box>
            <ImageLogo />
          </Box>
        </Box>
    </main>
  );
}
