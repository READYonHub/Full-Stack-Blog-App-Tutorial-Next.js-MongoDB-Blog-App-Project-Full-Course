import React from 'react';
import styles from './menu.module.css';
import Link from 'next/link';
import Image from 'next/image';
import MenuPosts from '../menuPosts/MenuPosts';
import MenuCategories from '../menuCategories/MenuCategories';

const Menu = () => {
  return (
    <div className={styles.container}>

      {/* menu első rész */}
      <h2 className={styles.subtitle}>Felkapottak</h2>
      <h1 className={styles.title}>Legnépszerűbb</h1>
      <MenuPosts withImage={false} />

      {/* menu második rész */}
      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />
      {/* menu harmadik rész */}
      <h2 className={styles.subtitle}>Chose by the editor</h2>
      <h1 className={styles.title}>Editors Pick</h1>
      <MenuPosts withImage={true} />
    </div>
  )
}

export default Menu
