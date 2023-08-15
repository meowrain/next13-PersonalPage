import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link'
export default function Projects() {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>喵~在这儿</h1>
      <div className={styles.items}>
        <Link href="https://github.com/meowrain/doc-for-cs" className={styles.item}>
          <span className={styles.title}>doc-for-cs</span>
        </Link>
        <Link href="https://github.com/meowrain/gpt-translator-cli" className={styles.item}>
          <span className={styles.title}>gpt-translator-cli</span>
        </Link>
        <Link href="https://github.com/meowrain/picgo-core-uploader_script" className={styles.item}>
          <span className={styles.title}>picgo-core-uploader_script</span>
        </Link>
      </div>
    </div>
  )
}
