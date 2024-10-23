"use client";

import Image from "next/image";
import styles from "./themeToggle.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);

  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={{
        backgroundColor: theme === "dark" ? "white" : "#0f172a",
      }}
    >
      <Image src="/moon.png" alt="Moon Icon" width={14} height={14} />
      <div
        className={styles.ball}
        style={{
          left: theme === "dark" ? "2px" : "23px", // '23px' a jobb oldali vég
          backgroundColor: theme === "dark" ? "#0f172a" : "white",
        }}
      ></div>
      <Image src="/sun.png" alt="Sun Icon" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
