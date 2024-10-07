import styles from "./Main.module.css";
import { Nav } from "@components/Nav/Nav";
import { MainSidebar } from "@components/MainSidebar/MainSidebar";
import { MainCentralblock } from "@components/MainCentralblock/MainCentralblock";
import { FC } from "react";
import { TrackType } from "../../types/tracks";

type MainProps = {
  tracks: TrackType[];
  setTrack: (track: TrackType) => void;
};

export const Main: FC<MainProps> = ({ tracks, setTrack }) => {

  return (
    <main className={styles.main}>
      <Nav />
      <MainCentralblock tracks={tracks} setTrack={setTrack}/>
      <MainSidebar />
    </main>
  );
};