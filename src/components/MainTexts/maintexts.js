import { Box } from "@mui/material";

import styles from "./maintexts.module.css";

export default function MainTexts() {
  return (
    <Box data-scroll-section className={styles.textContent}>
      <Box>
        <h1 data-scroll data-scroll-speed="1">
          OI, EU SOU O
        </h1>
        <span data-scroll data-scroll-speed="2">
          Vini
        </span>
        <h2 data-scroll data-scroll-speed="1">DESENVOLVEDOR FULL-STACK_</h2>
      </Box>
      <Box>
        <p>
          Olá! Sou Vinicios, Professor e Software Engineer. Possuo conhecimento
          em diversas tecnologias e experiência em UX/UI. Acredito firmemente
          que a paixão aliada ao empenho são essenciais para concretizar ideias.
        </p>
      </Box>
      <Box sx={{ display: "flex", gap: "12px" }}>
        <button className={styles.hireMe}>ME CONTRATE</button>
        <button className={styles.getInTouch}>ENTRE EM CONTATO</button>
      </Box>
    </Box>
  );
}
