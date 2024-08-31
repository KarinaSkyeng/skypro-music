import styles from "./Main.module.css";
import { Nav } from "@components/Nav/Nav";
import { MainSidebar } from "@components/MainSidebar/MainSidebar";
import { MainCentralblock } from "@components/MainCetralblock/MainCentralblock";
import { getTracks } from "../../api/apiTrack";
import { TrackType } from "../../types/tracks";
import { useEffect, useState } from "react";


export const Main = async () => {
  const [tracks, setTracks] = useState<TrackType[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const fetchedTracks = await getTracks();
        setTracks(fetchedTracks);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('Неизвестная ошибка');
        }
      }
    };

    fetchTracks();
  }, []);

  return (
    <main className={styles.main}>
      <Nav />
      {error ? (
        <div className={styles.error}>{error}</div>
      ) : (
        <>
          <MainCentralblock tracks={tracks} />
          <MainSidebar />
        </>
      )}
    </main>
  );
};
