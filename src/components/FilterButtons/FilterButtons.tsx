import { useState } from 'react';
import { TrackType } from '../../types/tracks';
import { getUniqueValues } from '../../utils/getUniqueValues';
import styles from './FilterButtons.module.css';
import { FilterItem } from '@components/FilterItem/FilterItem';

type FilterButtonsProps = {
  tracks: TrackType[];
};

const filterNames: string[] = ["исполнителю", "году выпуска", "жанру"];

export function FilterButtons({ tracks }: FilterButtonsProps) {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  function handleChangeFilter(filterName: string) {
    setActiveFilter(prevFilter => (prevFilter === filterName ? null : filterName));
  }

  function getUnique(): string[] {
    if (activeFilter === "исполнителю") {
      return getUniqueValues(tracks, "author");
    }

    if (activeFilter === "жанру") {
      return getUniqueValues(tracks, "genre");
    }

    if (activeFilter === "году выпуска") {
      return ["По умолчанию", "Сначала новые", "Сначала старые"];
    }

    return [];
  }

  const uniqueValues = getUnique();

  return (
    <div className={styles.centerblockFilter}>
    <div className={styles.filterTitle}>Искать по:</div>
    {filterNames.map((filterName, index) => (
      <FilterItem
        filterName={filterName}
        key={index}
        isActive={activeFilter === filterName}
        handleChangeFilter={handleChangeFilter}
        list={uniqueValues}
      />
    ))}
  </div>
);
}
