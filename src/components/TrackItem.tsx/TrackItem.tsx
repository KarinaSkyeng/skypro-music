import { TrackType } from "../../types/tracks";
import styles from "./TrackItem.module.css";

type TrackItemProps = {
  track: TrackType;
}

export function TrackItem({ track }: TrackItemProps) {
  const duration = `${Math.floor(track.duration_in_seconds / 60)}:${track.duration_in_seconds % 60}`;

  return (
    <div className={styles.playlistItem}>
      <div className={styles.playlistTrack}>
        <div className={styles.trackTitle}>
          <div className={styles.trackTitleImage}>
            <svg className={styles.trackTitleSvg}>
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
            </svg>
          </div>
          <div>
            <a className={styles.trackTitleLink} href={track.track_file}>
            {track.name}
            </a>
          </div>
        </div>
        <div className={styles.trackAuthor}>
          <a className={styles.trackAuthorLink} href="http://">
            Nero
          </a>
        </div>
        <div className={styles.trackAlbum}>
          <a className={styles.trackAlbumLink} href="http://">
            Welcome Reality
          </a>
        </div>
        <div>
          <svg className={styles.trackTimeSvg}>
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </svg>
          <span className={styles.trackTimeText}>4:44</span>
        </div>
      </div>
    </div>
  );
}
  
