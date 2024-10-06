import React from "react";
import styles from "./card.module.css"
import Image from "next/image";
import Link from "next/link";

const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>03.10.2024. - </span>
                    <span className={styles.category}>CULTURE</span>
                </div>
                <Link href="/">
                    <h1>Poszt cim</h1>
                </Link>
                <p className={styles.desc}>Posztnak a leiiiiiiirása.</p>
                <Link href="/" className={styles.link}>Olvass Tovább</Link>
            </div>
        </div>
    )
}

export default Card;


