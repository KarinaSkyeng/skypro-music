import { useState } from 'react';
import { TrackType } from '../../types/tracks';
import { getUniqueValues } from '../../utils/getUniqueValues';
import styles from './FilterButtons.module.css';
import { DropMenu } from './DropMenu';

type FilterButtonsProps = {
  tracks: TrackType[];
};

type Filter = {
  name: string;
  property: keyof TrackType | 'year';
};

const filters: Filter[] = [
  { name: 'исполнителю', property: 'author' },
  { name: 'жанру', property: 'genre' },
  { name: 'году выпуска', property: 'year' },
];

export function FilterButtons({ tracks }: FilterButtonsProps) {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  function handleChangeFilter(filterName: string) {
    setActiveFilter(prevFilter => (prevFilter === filterName ? null : filterName));
  }

  function getUniqueValuesByFilter(filter: Filter): string[] {
    if (filter.property === 'year') {
      return ['По умолчанию', 'Сначала новые', 'Сначала старые'];
    }
    return getUniqueValues(tracks, filter.property);
  }

  function getTrackCount(filter: Filter): number {
    return getUniqueValuesByFilter(filter).length;
  }

  return (
    <div className={styles.centerblockFilter}>
      <div className={styles.filterTitle}>Искать по:</div>
      {filters.map(filter => (
        <div key={filter.name} className={styles.filterWrapper}>
          <div
            className={`${styles.filterButton} ${activeFilter === filter.name ? styles.active : ''}`}
            onClick={() => handleChangeFilter(filter.name)}
          >
            {filter.name}
          </div>
          {activeFilter === filter.name && (
            <DropMenu list={getUniqueValuesByFilter(filter)} trackCount={getTrackCount(filter)} />
          )}
        </div>
      ))}
    </div>
  );
}
