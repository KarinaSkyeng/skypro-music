
import { TrackItem } from "@components/TrackItem.tsx/TrackItem";
import styles from "./Playlist.module.css";
import { TrackType } from "../../types/tracks";

type PlaylistProps = {
  tracks: TrackType[];
  setTrack: (track: TrackType) => void;
}

export function Playlist({ tracks, setTrack }: PlaylistProps) {
  return (
    <div className={styles.contentPlaylist}>
      {tracks.map((track) => (
        <TrackItem key={track._id} track={track} onClick={() => setTrack(track)} />
      ))}
    </div>
  );
}
