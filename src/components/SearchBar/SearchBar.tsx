import styles from './SearchBar.module.css';

export const SearchBar = () => (
  <div className={styles.centerblockSearch}>
    <svg className={styles.searchSvg}>
      <use xlinkHref="/img/icon/sprite.svg#icon-search"></use>
    </svg>
    <input
      className={styles.searchText}
      type="search"
      placeholder="Поиск"
      name="search"
    />
  </div>
);
