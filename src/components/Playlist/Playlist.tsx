import styles from "./Playlist.module.css";
import { TrackItem } from "@/components/TrackItem/TrackItem";

export const Playlist = ({ tracks }) => (
  <div className={styles.centerblockContent}>
    <div className={styles.contentTitle}>
      <div className={styles.playlistTitleCol}>Трек</div>
      <div className={styles.playlistTitleCol}>Исполнитель</div>
      <div className={styles.playlistTitleCol}>Альбом</div>
      <div className={styles.playlistTitleCol}>
        <svg className={styles.playlistTitleSvg}>
          <use xlinkHref="/img/icon/sprite.svg#icon-watch"></use>
        </svg>
      </div>
    </div>
    <div className={styles.contentPlaylist}>
      {tracks.map((track, index) => (
        <TrackItem key={index} track={track} />
      ))}
    </div>
  </div>
);
