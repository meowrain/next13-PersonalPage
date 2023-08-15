import React from "react";
import Image from "next/image";
import styles from "./footer.module.css";
export default function Footer() {
  return (
    <div>
      <div className={styles.container}>
        😊2023 Meowrain. All rights reserved.
      </div>
      <div>
        <div className={styles.social}>
          <Image src="/1.png" width={15} height={15} className={styles.icon} alt="Meowrain dev" />
          <Image src="/2.png" width={15} height={15} className={styles.icon} alt="Meowrain dev" />
          <Image src="/3.png" width={15} height={15} className={styles.icon} alt="Meowrain dev" />
          <Image src="/4.png" width={15} height={15} className={styles.icon} alt="Meowrain dev" />
        </div>
      </div>
    </div>
  );
}
