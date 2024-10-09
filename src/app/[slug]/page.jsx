import Comments from "../components/comments/Comments";
import Menu from "../components/Menu/Menu";
import styles from "./singlePage.module.css"
import Image from "next/image";

const SinglePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>ciiiiiimmmmmmm</h1>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                            <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
                        </div>
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>2024.04.03</span>
                        </div>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description}>
                        <p>dsfffffffffffffffffffffff</p>
                        <h1>fadsdasd</h1>
                        <p>
                            ffffffffffffffffffdsffffffffffffffffffffffffffffffffffdsffffffffffffffffffffffffffffffffffdsffffffffffffffffffffffffffffffffffdsf
                            ffffffffffffffffffdsffffffffffffffffffffffffffffffffffdsffffffffffffffffffffffffffffffffffdsffffffffffffffffffffffffffffffffffdsf
                            ffffffffffffffffffdsffffffffffffffffffffffffffffffffffdsffffffffffffffffffffffffffffffffffdsffffffffffffffffffffffffffffffffffdsf

                        </p>
                    </div>
                    <div className={styles.comment}>
                        <Comments />
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    )
}

export default SinglePage;