import { useState } from 'react';
import { TrackType } from '../../types/tracks';
import { getUniqueValues } from '../../utils/getUniqueValues';
import styles from './FilterButtons.module.css';
//import { FilterItem } from '@components/FilterItem/FilterItem';
import { DropMenu } from './DropMenu';

type FilterButtonsProps = {
  tracks: TrackType[];
}

const filterNames: string[] = ["исполнителю", "жанру", "году выпуска"];

export function FilterButtons({ tracks }: FilterButtonsProps) {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  function handleChangeFilter(filterName: string) {
    setActiveFilter((prevState) => prevState === filterName ? null : filterName);
  }

  function getUnique(filterName: string): string[] {
    if (filterName === "исполнителю") {
      return getUniqueValues(tracks, "author");
    }
    if (filterName === "жанру") {
      return getUniqueValues(tracks, "genre");
    }
    if (filterName === "году выпуска") {
      return ["По умолчанию", "Сначала новые", "Сначала старые"];
    }
    return [];
  }

  const uniqueValues = activeFilter ? getUnique(activeFilter) : [];

  return (
    <div className={styles.centerblockFilter}>
      <div className={styles.filterTitle}>Искать по:</div>
      {filterNames.map((filterName) => (
        <div key={filterName} className={styles.filterWrapper}>
          <div
            className={`${styles.filterButton} ${activeFilter === filterName ? styles.active : ''}`}
            onClick={() => handleChangeFilter(filterName)}
          >
            {filterName}
          </div>
          {activeFilter === filterName && (
            <DropMenu list={uniqueValues} />
          )}
        </div>
      ))}
    </div>
  );
}
