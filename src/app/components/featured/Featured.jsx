import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, OTTO-MOBILE itt van!</b> Fedezd fel a sztoriaimat és a kreatív öteleteimet.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>CimCIMCIMCIMCIMCIMCIM.</h1>
          <p className={styles.postDesc}>
           Ez lesz majd a posztnak a leírása.Ez lesz majd a posztnak a leírása. Ez lesz majd a posztnak a leírása.Ez lesz majd a posztnak a leírása.Ez lesz majd a posztnak a leírása.Ez lesz majd a posztnak a leírása.Ez lesz majd a posztnak a leírása.Ez lesz majd a posztnak a leírása.Ez lesz majd a posztnak a leírása.Ez lesz majd a posztnak a leírása.Ez lesz majd a posztnak a leírása.Ez lesz majd a posztnak a leírása.Ez lesz majd a posztnak a leírása.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;