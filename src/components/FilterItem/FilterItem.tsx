import classNames from "classnames";
import styles from "./FilterItem.module.css";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { order } from "./data";
import { setFilters, setSortTracks } from "@/store/features/authSlice";

type FilterItemType = {
  title: string;
  value: "author" | "genre" | "order";
  handleFilterClick: (newFilter: string) => void;
  isOpened: boolean;
  filterQuantity: number;
};

export function FilterItem({ title, isOpened, handleFilterClick, value, filterQuantity }: FilterItemType) {
  const orderFilter = useAppSelector(
    (state) => state.playlist.filterOptions.order
  );
 const tracksData = useAppSelector((state) =>
    state.playlist.initialPlaylist);

 const dispatch = useAppDispatch();
 const authorsList = useAppSelector((state) =>
    state.playlist.filterOptions.author);
 const genresList = useAppSelector((state) => 
    state.playlist.filterOptions.genre
);

function getFilterList(): string[] {
  if (value !== "order") {
    if (value === "genre") {
      const genreRay = tracksData.map((track) => track.genre);
      const uniqueGenres = [...new Set(genreRay.flat())];
      return uniqueGenres;
    }

    const array = new Set(tracksData?.map((track) => track[value]));
    return Array.from(array);
  }
  return order;
}
function toggleFilter(item: string) {
  if (value === "author") {
    dispatch(
      setFilters({
        author: authorsList.includes(item)
          ? authorsList.filter((el) => el !== item)
          : [...authorsList, item],
      })
    );
  }
  if (value === "genre") {
    dispatch(
      setFilters({
        genre: genresList.includes(item)
          ? genresList.filter((el) => el !== item)
          : [...genresList, item],
      })
    );
  }
}

function handleOrderFilter(item: string) {
  dispatch(setSortTracks(item));
}
  return (
    <>
    <div className={styles.filter}>
       {filterQuantity !== 0 && (
          <div className={styles.filterDot}>{filterQuantity}</div>
        )}
      <div
          onClick={() => handleFilterClick(title)}
          className={classNames(
            styles.filterButton,
            classNames(isOpened ? styles.btnTextActive : styles.btnText)
          )}
      >
        {title}
      </div>
      {isOpened && (
          <ul className={styles.filterItemList}>
            {getFilterList().map((item) => (
              <li
                onClick={
                  value === "order"
                    ? () => handleOrderFilter(item)
                    : () => toggleFilter(item)
                }
                className={classNames(
                  styles.filterItemListItem,
                  {
                    [styles.filterItemListItemActive]:
                      genresList.includes(item),
                  },
                  {
                    [styles.filterItemListItemActive]:
                      authorsList.includes(item),
                  },
                  { [styles.filterItemListItemActive]: orderFilter === item }
                )}
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
    </div>
    </>
  );
}
