import { PlaylistContent } from "@/components/PlaylistContent/PlaylistContent";
import styles from "@/components/MainCentralblock/MainCentralblock.module.css";
import { FilterButtons } from "@/components/FilterButtons/FilterButtons";
import { TrackType } from "@/types/tracks";
//import { Search } from "@/components/Search/Search";

type MainCentralblockProps = {
  tracks: TrackType[];
  title: string;
};

export const MainCentralblock = ({ tracks, title }: MainCentralblockProps) => {
  return (
    <>
      <h2 className={styles.centerblockH2}>{title}</h2>
      <FilterButtons />
      <PlaylistContent tracks={tracks} />
    </>
  );
};
