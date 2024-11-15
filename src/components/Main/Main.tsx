import styles from "./Main.module.css";
import { Nav } from "@/components/Nav/Nav";
import { MainSidebar } from "@/components/MainSidebar/MainSidebar";
import { MainCentralblock } from "@/components/MainCentralblock/MainCentralblock";
import { FC } from "react";
import { TrackType } from "@/types/tracks";

type MainProps = {
  tracks: TrackType[];
};

export const Main: FC<MainProps> = ({ tracks }) => {

  return (
    <main className={styles.main}>
      <Nav />
      <MainCentralblock tracks={tracks} title="title"/>
      <MainSidebar />
    </main>
  );
};