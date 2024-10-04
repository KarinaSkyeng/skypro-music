
import { TrackItem } from "@/components/TrackItem.tsx/TrackItem";
import styles from "./Playlist.module.css";
import { TrackType } from "@/types/tracks";

type PlaylistProps = {
  tracks: TrackType[];
}

export function Playlist({ tracks }: PlaylistProps) {
  return (
    <div className={styles.contentPlaylist}>
      {tracks.map((track) => (
        <TrackItem track={track} key={track._id} tracks={tracks} />
      ))}
    </div>
  );
}
