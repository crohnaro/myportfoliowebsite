import styles from "./header.module.css";
import "../../app/globals.css";
import Image from "next/image";
import logo from "../../assets/Logos SVG/Ativo 4.svg";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Image
          src={logo}
          width={0}
          height={0}
          style={{ width: "100%", height: "auto" }}
        ></Image>
      </div>
      <div className={styles.menuLinksContainer}>
        <Link className={styles.menuLink} href="#">Home</Link>
        <Link className={styles.menuLink} href="#">Sobre</Link>
        <Link className={styles.menuLink} href="#">Portfólio</Link>
        <Link className={styles.menuLink} href="#">Contatos</Link>
      </div>
    </header>
  );
}
