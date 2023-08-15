"use client"
import React from 'react'
import Link from 'next/link'
import styles from "./navbar.module.css"
import DarkModeToggle from "../../components/DarkModeToggle/DarkModeToggle"
const links = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 2,
        title: "Projects",
        url: "/projects",
    },
    {
        id: 3,
        title: "Waifu",
        url: "/waifu",
    },
    {
        id: 4,
        title: "About",
        url: "/about"
    },
    {
        id: 5,
        title: "Contact",
        url: "/contact"
    },
];
export default function NavBar() {
  return (
    <div className={styles.container}>
        <Link href="/" className={styles.logo}>MeowRain</Link>
        <div className={styles.links}>
            <DarkModeToggle />
            {links.map(link => (
                <Link className={styles.link} key={link.id} href={link.url}>{link.title}</Link>
            ))}
            {/* <button className={styles.logout} onClick={()=> console.log("Log out")}>Logout</button> */}
        </div>
    </div>
  )
}
