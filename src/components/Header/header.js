import styles from "./header.module.css";
import "../../app/globals.css";
import Image from "next/image";
import logo from "../../assets/Logos SVG/Ativo 4.svg";

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
      <div></div>
    </header>
  );
}
