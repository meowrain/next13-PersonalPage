"use client"
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

async function getNeko() {
  const res = await fetch("https://nekos.best/api/v2/neko", {
    cache: "no-store",
  });
  const json = await res.json();
  return json.results[0];
}

function Photo() {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    async function fetchImageData() {
      const data = await getNeko();
      setImageData(data);
    }
    fetchImageData();
  }, []);

  if (!imageData) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ width: "300px" }}>
      <div className={styles.imageContainer}>
        <Image
          src={imageData.url}
          alt=""
          width={300}
          height={500}
          className={styles.img}
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Artist: {imageData.artist_name}</h1>
        <p className={styles.desc}>
          <Link href={imageData.source_url}>🔗Link</Link>
        </p>
      </div>
    </div>
  );
}

export default function Blog() {
  return (
    <>
      <h1 className={styles.title}>Random Neko Waifu</h1>
      <div className={styles.container}>
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
      </div>
    </>
  );
}
