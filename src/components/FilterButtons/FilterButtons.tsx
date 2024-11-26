"use client";

import { useState } from 'react';
import styles from './FilterButtons.module.css';
import { FilterItem } from '@/components/FilterItem/FilterItem';
import { useAppSelector } from '@/store/store';
import { filters } from '../FilterItem/data';

export function FilterButtons() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  function handleFilterClick(newFilter: string) {
    setActiveFilter((prev) => (prev === newFilter ? null : newFilter));
  }

  const authorsList = useAppSelector((state) =>
  state.playlist.filterOptions.author);

  const genresList = useAppSelector((state) =>
  state.playlist.filterOptions.genre);

  return (
    <div className={styles.centerblockFilter}>
    <div className={styles.filterTitle}>Искать по:</div>
    
      <FilterItem
        isOpened={activeFilter === filters[0].title ? true : false}
        title={filters[0].title}
        value={filters[0].value}
        handleFilterClick={handleFilterClick}
        filterQuantity={authorsList.length}
      />
      <FilterItem
        isOpened={activeFilter === filters[1].title ? true : false}
        handleFilterClick={handleFilterClick}
        title={filters[1].title}
        value={filters[1].value}
        filterQuantity={genresList.length}
      />
        <FilterItem
        isOpened={activeFilter === filters[2].title ? true : false}
        handleFilterClick={handleFilterClick}
        title={filters[2].title}
        value={filters[2].value}
        filterQuantity={0}
      />
  </div>
);
}
