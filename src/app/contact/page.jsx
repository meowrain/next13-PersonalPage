"use client"
import {useState} from "react"
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "../../components/Button/button";
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = ()=>{
    const emailSubject = "邮件主题";
    const emailBody = `发件人姓名：${name}%0D%0A发件人邮箱：${email}%0D%0A留言内容：${message}`;
    const mailtoLink = `mailto:meowrain@126.com?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;
    window.open(mailtoLink, "_blank");
    // 清空表单字段
    setName("");
    setEmail("");
    setMessage("");
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>留言喵~(￣▽￣)~*</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="https://pic.ziyuan.wang/2023/07/18/404e16dddd6e7.png"
            alt=""
            fill={true}
            className={styles.image}
          ></Image>
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="您的名字喵~" className={styles.input} value={name} onChange={(e)=>setName(e.target.value)}/>
          <input type="text" placeholder="您的邮箱喵~" className={styles.input} value={email} onChange={(e)=>setEmail(e.target.value)} />
          <textarea
            className={styles.textArea}
            placeholder="Ciallo～(∠・ω< )⌒☆ 在这里留言喵~"
            cols="30"
            rows="10"
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
          ></textarea>
          <Button url="#" text="咻！发射~" click={handleSubmit}></Button>
          {/* <button onClick={handleSubmit}>Submit</button> */}
        </form>
      </div>
    </div>
  );
}
