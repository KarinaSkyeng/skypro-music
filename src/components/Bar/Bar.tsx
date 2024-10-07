import { Player } from "@components/Player/Player";
import styles from "./Bar.module.css";
import { Volume } from "@components/Volume/Volume";
import { TrackType } from "../../types/tracks";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { formatTime } from "../../utils/formatTime";
import { ProgressBar } from "@components/ProgressBar/ProgressBar";

type BarProps = {
  track: TrackType;
};

export function Bar({ track }: BarProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isLoop, setIsLoop] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.5);
  const duration = audioRef.current?.duration || 0;

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [track]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  function togglePlay() {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
    setIsPlaying((prev) => !prev);
  }

  function seekAudio(event: ChangeEvent<HTMLInputElement>) {
    if (audioRef.current) {
      audioRef.current.currentTime = Number(event.target.value);
    }
  }

  function handleLoop() {
    if (audioRef.current) {
      audioRef.current.loop = !isLoop;
      setIsLoop((prevState) => !prevState);
    }
  }

  function handleVolumeChange(e: ChangeEvent<HTMLInputElement>) {
    setVolume(Number(e.target.value));
  }

  function handleTrackEnded() {
    if (!isLoop && audioRef.current) {
      audioRef.current.currentTime = 0;
      setIsPlaying(false); // Останавливаем воспроизведение, если не включен цикл
    }
  }

  return (
    <div className={styles.bar}>
      <div className={styles.barContent}>
        <div className={styles.barTimer}>
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>
        <ProgressBar
          max={duration}
          value={currentTime}
          step={0.01}
          onChange={seekAudio}
        />
        <div className={styles.barPlayerBlock}>
          <audio
            ref={audioRef}
            src={track.track_file}
            onTimeUpdate={(e) => {
              setCurrentTime(e.currentTarget.currentTime);
            }}
            onEnded={handleTrackEnded}
          />
          <Player
            track={track}
            togglePlay={togglePlay}
            isPlaying={isPlaying}
            handleLoop={handleLoop}
            isLoop={isLoop}
          />
          <Volume
            value={volume}
            onChange={handleVolumeChange} />
        </div>
      </div>
    </div>
  );
}
