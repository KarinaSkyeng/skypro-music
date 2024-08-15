
import { PlaylistItem } from "@components/PlaylistItem/PlaylistItem";
import styles from "./PlaylistContent.module.css";
import { Playlist } from "@components/Playlist/Playlist";

export function PlaylistContent() {
  return (
    <div className={styles.centerblockContent}>
      <PlaylistItem />
      <Playlist />
    </div>
  );
}