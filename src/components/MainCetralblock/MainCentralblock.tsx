import { PlaylistContent } from "@components/PlaylistContent/PlaylistContent";
import styles from "./MainCentralblock.module.css";
import { Search } from "@components/Search/Search";
import { FilterButtons } from "@components/FilterButtons/FilterButtons";

export function MainCentralblock() {
  return (
    <div className={styles.mainCenterblock}>
      <Search />
      <h2 className={styles.centerblockH2}>Треки</h2>
      <FilterButtons />
      <PlaylistContent />
    </div>
  );
}