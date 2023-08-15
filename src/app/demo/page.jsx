import styles from "./page.module.css"
import Image from "next/image";
async function getData() {
  const res = await fetch("http://localhost:3000/api/posts",{
    cache: "no-store",
  });
  if(!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
export default async function Demo() {
  const data = await getData();
  console.log(data)
  return (
    <div className={styles.container}>
      <h1>Data from mongodb</h1>
      {data.map(dt=>(
        <div key={dt._id}>
        <p>Title: {dt.title}</p>
        <p>Desc: {dt.desc}</p>
        <p>Content: {dt.content}</p>
        <p>Username: {dt.username}</p>
        <p>ImageLik:{dt.img} </p>
        <Image src={dt.img} width={300} height={300}></Image>
        </div>
      ))}

    </div>
  )
}
