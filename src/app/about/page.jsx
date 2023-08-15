import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "../../components/btn/button";
export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://pic.ziyuan.wang/2023/08/12/8e83e9eafaff2.png"
          fill={true}
          alt="dsfasdfd"
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>MeowRain</h1>

          <h2 className={styles.imgDesc}>A student</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>关于我</h1>
          <p className={styles.desc}>
            大家好，我是MeowRain 　今年20岁了，读大二。 　热爱开源！
            <br />
            目前掌握javascript,typescript,python,c/c++,java,dart等多门语言helloworld的编写！
            <br />
            <br />
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>我们的QQ群</h1>
          <p className={styles.desc}>
            群号：887940241
            <br />
          </p>
          <Button text="Contact" url="/contact" />
        </div>
      </div>
    </div>
  );
}
