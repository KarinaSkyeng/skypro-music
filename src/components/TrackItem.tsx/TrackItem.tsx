import styles from "./TrackItem.module.css";

export const TrackItem = ({ track }) => (
  <div className={styles.playlistItem}>
    <div className={styles.track}>
      <div className={styles.trackTitle}>
        <div className={styles.trackTitleImage}>
          <svg className={styles.trackTitleSvg}>
            <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
          </svg>
        </div>
        <div className={styles.trackTitleText}>
          <a className={styles.trackTitleLink} href={track.link}>
            {track.title}{" "}
            <span className={styles.trackTitleSpan}>{track.span}</span>
          </a>
        </div>
      </div>
      <div className={styles.trackAuthor}>
        <a className={styles.trackAuthorLink} href={track.authorLink}>
          {track.author}
        </a>
      </div>
      <div className={styles.trackAlbum}>
        <a className={styles.trackAlbumLink} href={track.albumLink}>
          {track.album}
        </a>
      </div>
      <div className={styles.trackTime}>
        <svg className={styles.trackTimeSvg}>
          <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
        </svg>
        <span className={styles.trackTimeText}>{track.time}</span>
      </div>
    </div>
  </div>
);
