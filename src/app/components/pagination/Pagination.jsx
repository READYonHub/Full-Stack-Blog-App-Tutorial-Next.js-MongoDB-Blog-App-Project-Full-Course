import React from 'react';
import styles from './pagination.module.css';

const Pagination = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button}>
        Előző
      </button>
      <button className={styles.button}>
        Következő
      </button>
    </div>
  )
}

export default Pagination
