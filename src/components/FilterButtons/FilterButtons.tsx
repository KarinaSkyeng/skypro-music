import styles from './FilterButtons.module.css';

export const FilterButtons = () => (
  <div className={styles.centerblockFilter}>
    <div className={styles.filterTitle}>Искать по:</div>
    <div className={`${styles.filterButton} ${styles.buttonAuthor}`}>исполнителю</div>
    <div className={`${styles.filterButton} ${styles.buttonYear}`}>году выпуска</div>
    <div className={`${styles.filterButton} ${styles.buttonGenre}`}>жанру</div>
  </div>
);
