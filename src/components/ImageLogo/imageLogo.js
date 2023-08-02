
import Image from "next/image";
import mainImage from '../../assets/Vini com elemento back.png';
import styles from './imageLogo.module.css'


export default function ImageLogo() {
  return (
    <aside className={styles.mainImageContainer}>
        <Image
          src={mainImage}
          width={0}
          height={0}
          style={{ width: "100%", height: "auto" }}
        ></Image>
    </aside>
  );
}
