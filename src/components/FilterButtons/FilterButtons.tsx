"use client";

import { useState } from 'react';
import { TrackType } from '../../types/tracks';
import styles from './FilterButtons.module.css';
import cn from "classnames";

const filterNames: string[] = ["исполнителю", "году выпуска", "жанру"];

type FilterProps = {
  tracks: TrackType[];
};

export function FilterButtons({ tracks }: FilterProps) {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  function handleChangeFilterButton(filterName: string) {
    
  }
  return (
    <div className={styles.centerblockFilter}>
      <div className={styles.filterTitle}>Искать по:</div>
      <div className={cn(styles.filterButton, styles.btnText)}>исполнителю</div>
      <div className={cn(styles.filterButton, styles.btnText)}>
        году выпуска
      </div>
      <div className={cn(styles.filterButton, styles.btnText)}>жанру</div>
    </div>
  );
}
