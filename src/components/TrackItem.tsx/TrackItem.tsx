"use client";

import { setCurrentTrack } from "@/store/features/authSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { TrackType } from "@/types/tracks";
import { formatTime } from "@/utils/formatTime";
import styles from "./TrackItem.module.css";
import cn from "classnames";

type TrackItemProps = {
  track: TrackType;
  tracks: TrackType[];
}

export function TrackItem({ track, tracks }: TrackItemProps) {
  const { name, author, album, duration_in_seconds } = track;
  const dispatch = useAppDispatch();
  const { currentTrack, isPlaying } = useAppSelector((state) => state.playlist);

  function handleSelectTrack() {
    dispatch(setCurrentTrack({ currentTrack: track, playlist: tracks }));
  }

  const conditionCurrentTrack = currentTrack?._id === track._id;
  return (
    <div className={styles.playlistItem} onClick={handleSelectTrack}>
      <div className={styles.playlistTrack}>
        <div className={styles.trackTitle}>
          <div className={styles.trackTitleImage}>
            <svg className={styles.trackTitleSvg}>
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
            </svg>
          </div>
          {conditionCurrentTrack && (
            <div
              className={cn(styles.blinkedMark, { [styles.active]: isPlaying })}
            ></div>
          )}
        </div>
        <div className={styles.trackAuthor}>
        <span className={styles.trackAuthorLink}>
            {author}
          </span>
        </div>
        <div className={styles.trackAlbum}>
        <span className={styles.trackAlbumLink}>
            {album}
          </span>
        </div>
        <div>
          <svg className={styles.trackTimeSvg}>
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </svg>
          <span className={styles.trackTimeText}>
            {formatTime(duration_in_seconds)}
          </span>
        </div>
      </div>
    </div>
  );
}
  
