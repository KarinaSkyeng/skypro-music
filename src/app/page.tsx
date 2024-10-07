"use client";

import { Bar } from "@components/Bar/Bar";
import styles from "./page.module.css";
import { Main } from "@components/Main/Main";
import { TrackType } from "../types/tracks";
import { getTracks } from "../api/apiTrack";
import { useEffect, useState } from "react";

export default function Home() {
  const [track, setTrack] = useState<TrackType>();
  const [tracks, setTracks] = useState<TrackType[]>([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const tracks = await getTracks();
        setTracks(tracks);
      } catch (error) {
        if (error instanceof Error) {
          setErrorMessage(error.message);
        } else {
          setErrorMessage("An unknown error occurred");
        }
      }
    };

    fetchTracks();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {errorMessage ? (
          <div className={styles.error}>{errorMessage}</div>
        ) : (
          <Main tracks={tracks} setTrack={setTrack} />
        )}
        {track && <Bar track={track} />}
        <footer className="footer"></footer>
      </div>
    </div>
  );
}
