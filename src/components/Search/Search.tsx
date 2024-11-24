"use client";

import { ChangeEvent, useCallback, useState } from "react";
import styles from "./Search.module.css";
import { useAppDispatch } from "@/store/store";
import { setFilters } from "@/store/features/authSlice";
import cn from "classnames";

export function Search() {
  const [searchString, setSearchString] = useState("");
  const dispatch = useAppDispatch();

  const handleSearch = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSearchString(event.target.value);
      dispatch(setFilters({ searchValue: event.target.value}));
    },
    [dispatch]
  );

  return (
    <div className={cn(styles.centerblockSearch, styles.search)}>
      <svg className={styles.searchSvg}>
        <use xlinkHref="/img/icon/sprite.svg#icon-search"></use>
      </svg>
      <input
        className={styles.searchText}
        type="search"
        placeholder="Поиск"
        name="search"
        value={searchString}
        onChange={handleSearch}
      />
    </div>
  );
}