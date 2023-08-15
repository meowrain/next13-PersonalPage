import Image from "next/image";
import heroimg from "/public/heroimg.webp";
import styles from "./page.module.css";
import Button from "../components/button/button";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>MeowRainのHome</h1>
        <p className={styles.desc}>
          Turning your Idea into Reality, We bring together the teams from the
          global tech industry
        </p>
        <Button text="项目喵~" url="/projects"></Button>
      
      </div>

      <div className={styles.item}>
        <Image src={heroimg} alt="Main Page Picture" className={styles.img} />
      </div>
    </div>
  );
}
