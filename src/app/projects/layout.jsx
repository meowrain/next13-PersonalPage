import React from 'react'
import styles from "./page.module.css"
export default function Layout({children}) {
  return (
    <div>
        <h1 className={styles.mainTitle}>我の项目</h1>
        {children}
    </div>
  )
}
