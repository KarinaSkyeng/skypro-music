"use client";
import { PlaylistContent } from "@components/PlaylistContent/PlaylistContent";
import styles from "./MainCentralblock.module.css";
import { FilterButtons } from "@components/FilterButtons/FilterButtons";
import { TrackType } from "../../types/tracks";
import { Search } from "@components/Search/Search";

type MainCentralblockProps = {
  tracks: TrackType[];
  error: string | null;
};

export const MainCentralblock = ({ tracks, error }: MainCentralblockProps) => {
  return (
    <div className={styles.mainCenterblock}>
      <Search />
      <h2 className={styles.centerblockH2}>Треки</h2>
      {error ? (
        <div className={styles.errorMessage}>{error}</div>
      ) : (
        <FilterButtons tracks={tracks} />
      )}
      <PlaylistContent tracks={tracks} />
    </div>
  );
};
