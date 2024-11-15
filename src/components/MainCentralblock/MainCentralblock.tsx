import { PlaylistContent } from "@/components/PlaylistContent/PlaylistContent";
import styles from "@/components/MainCentralblock/MainCentralblock.module.css";
import { FilterButtons } from "@/components/FilterButtons/FilterButtons";
import { TrackType } from "@/types/tracks";
//import { Search } from "@/components/Search/Search";

type MainCentralblockProps = {
  tracks: TrackType[];
  title: string;
};

export const MainCentralblock = ({ tracks }: MainCentralblockProps) => {
  return (
    <>
      <h2 className={styles.centerblockH2}>Треки</h2>
      <FilterButtons tracks={tracks} />
      <PlaylistContent tracks={tracks} />
    </>
  );
};
