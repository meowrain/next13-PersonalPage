import React from "react";
import styles from "./button.module.css";
import Link from "next/link";
const MyButton = ({ text, url,click}) => {
  return (
    <Link href={url}>
      <button className={styles.container} onClick={click}>
        {text}
      </button>
    </Link>
  );
};

export default MyButton;
