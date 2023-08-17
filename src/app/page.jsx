import Image from "next/image";
import heroimg from "/public/heroimg.webp";
import styles from "./page.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>MeowRainのHome</h1>
        <p className={styles.desc}>
          Turning your Idea into Reality, We bring together the teams from the
          global tech industry
        </p>
        <Link href="/projects"><button className={styles.btn}>项目喵~</button></Link>
      </div>

      <div className={styles.item}>
        <Image src={heroimg} alt="Main Page Picture" className={styles.img} />
      </div>
    </div>
  );
}
