import { TrackType } from "@/types/tracks";
import styles from "./PlaylistItem.module.css";
import { TrackItem } from "../TrackItem.tsx/TrackItem";

type PlaylistItemProps = {
  tracks: TrackType[];
}

export function PlaylistItem({ tracks }: PlaylistItemProps) {
  return (
    <div className={styles.contentPlaylist}>
      {tracks.map((track) => (
        <TrackItem track={track} key={track._id} tracks={tracks} />
      ))}
    </div>
  ); 
}