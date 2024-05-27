import Image from "next/image";
import mainImage from "../../assets/Vini com elemento back.png";
import styles from "./imageLogo.module.css";

export default function ImageLogo() {
  return (
    <aside data-scroll-section className={styles.mainImageContainer}>
      <div data-scroll data-scroll-speed="4">
        <Image
          className={styles.image}
          src={mainImage}
          width={0}
          height={0}
          style={{ width: "100%", height: "auto" }}
        ></Image>
      </div>
    </aside>
  );
}
