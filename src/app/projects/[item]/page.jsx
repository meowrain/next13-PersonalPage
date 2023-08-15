import React from "react";
import styles from "./page.module.css";
import Button from "../../../components/btn/button";
import Image from "next/image";
export default function Category({ params }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.item}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, veniam! Magni voluptates beatae, provident perspiciatis fuga blanditiis velit vero ipsum aspernatur nam quo illum natus fugit atque dignissimos corporis neque!</p>
          <Button text="See More" url="#"></Button>
        </div>
        <div className={styles.imgContainer}>
          <Image src="" alt="" fill={true} className={styles.img}></Image>
        </div>

      </div>

      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, veniam! Magni voluptates beatae, provident perspiciatis fuga blanditiis velit vero ipsum aspernatur nam quo illum natus fugit atque dignissimos corporis neque!</p>
          <Button text="See More" url="#"></Button>
        </div>
        <div className={styles.imgContainer}>
          <Image src="" alt="" fill={true} className={styles.img}></Image>
        </div>

      </div>

      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, veniam! Magni voluptates beatae, provident perspiciatis fuga blanditiis velit vero ipsum aspernatur nam quo illum natus fugit atque dignissimos corporis neque!</p>
          <Button text="See More" url="#"></Button>
        </div>
        <div className={styles.imgContainer}>
          <Image src="" alt="" fill={true} className={styles.img}></Image>
        </div>

      </div>
    </div>
  );
}
