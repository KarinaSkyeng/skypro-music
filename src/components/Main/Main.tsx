import styles from "./Main.module.css";
import { Nav } from "@components/Nav/Nav";
import { MainSidebar } from "@components/MainSidebar/MainSidebar";
import { MainCentralblock } from "@components/MainCetralblock/MainCentralblock";
import { getTracks } from "../../api/apiTrack";
import { TrackType } from "../../types/tracks";


export const Main = async () => {
  let tracks: TrackType[] = []
  let err: string | null = null
  try {
    tracks = await getTracks();
    console.log(tracks)
  } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
        err = error.message
      }
  }

  return (
    <main className={styles.main}>
      <Nav />
      <MainCentralblock />
      <MainSidebar />
    </main>
  );
}
