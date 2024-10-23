import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Otto-Mobil!</b> első posztja.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Első poszt.</h1>
          <p className={styles.postDesc}>
           Itt lesznek az Otto-Mobil autós tesztjei, turisztikája és egyéb finom újdonságok.
          </p>
          <button className={styles.button}>Tovább olvasom!</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;