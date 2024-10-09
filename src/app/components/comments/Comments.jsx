import Link from "next/link";
import styles from "./comments.module.css"
import Image from "next/image";

const Comments = () => {

    const status = "authenticated";

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Comments</h1>
            {status === "authenticated" ? (
                <div className={styles.write}>
                    <textarea placeholder="Write a comment." className={styles.input} />
                    <button className={styles.button}>Send</button>
                </div>
            ) : (
                <Link href="/login">Login to write a comment</Link>
            )}
            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src="/p1.jpeg" alt="" width={50} height={50} className={styles.image} />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>Kaszonyi Comment</span>
                            <span className={styles.date}>2024.10.09.</span>
                        </div>
                    </div>
                    <p className={styles.desc}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.


                    </p>
                </div>
            </div>
        </div>
    );
};

export default Comments;