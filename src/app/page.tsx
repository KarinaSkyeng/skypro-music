import { Bar } from "@components/Bar/Bar";
import styles from "./page.module.css";
import { Main } from "@components/Main/Main";
import { TrackType } from "../types/tracks";
import { getTracks } from "../api/apiTrack";

export default async function Home() {
  let tracks: TrackType[] = [];
  let errorMessage = "";

  try {
    tracks = await getTracks();
  } catch (error: unknown) {
    if (error instanceof Error) {
      errorMessage = "Возникли проблемы при загрузке треков: " + error.message;
    } else {
      errorMessage = "Неизвестная ошибка";
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Main tracks={tracks} error={errorMessage} />
        <Bar />
        <footer className="footer"></footer>
      </div>
    </div>
  );
}