import styles from "./page.module.css";
import { TrackType } from "@/types/tracks";
import { getTracks } from "@/api/apiTrack";
import { MainCentralblock } from "@/components/MainCentralblock/MainCentralblock";

export default async function Home() {
  let tracks: TrackType[] = [];
  let errorMessage = "";

  try {
    tracks = await getTracks();
  } catch (error: unknown) {
    errorMessage =
      error instanceof Error
        ? "Возникли проблемы при загрузке треков: " + error.message
        : "Неизвестная ошибка";
  }

  return (
    <>
      {errorMessage ? (
        <div className={styles.error}>{errorMessage}</div>
      ) : (
        <MainCentralblock tracks={tracks} title={"Все треки"} />
      )}
    </>
  );
}