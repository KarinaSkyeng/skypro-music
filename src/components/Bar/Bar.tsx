import { Player } from "@components/Player/Player";
import styles from "./Bar.module.css";
import { Volume } from "@components/Volume/Volume";
import { TrackType } from "../../types/tracks";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { formatTime } from "../../utils/formatTime";
import { ProgressBar } from "@components/ProgressBar/ProgressBar";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setIsPlaying, setNextTrack } from "../../store/features/authSlice";

export function Bar() {
  const audioRef = useRef<HTMLAudioElement>(null);  
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isLoop, setIsLoop] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.5);
  const duration = audioRef.current?.duration || 0;
  const { currentTrack: track, isPlaying } = useAppSelector(
    (state) => state.playlist
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      if (track) {
        console.log('Track file:', track.track_file);
        audio.src = track.track_file;

        const handleError = (e: Event) => {
          console.error('Error loading audio file', e);
        };
  
        audio.addEventListener('error', handleError);

        audio.play().catch(err => console.error(err)); // Исправлено
      dispatch(setIsPlaying(true));

      return () => {
        audio.removeEventListener('error', handleError);
      };
      }
    }
  }, [track, dispatch]);

  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      audio.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    const audio = audioRef.current;

    const handleEnded = () => {
      dispatch(setNextTrack());
    };

    if (audio) {
      audio.addEventListener("ended", handleEnded);
    }

    return () => {
      if (audio) {
        audio.removeEventListener("ended", handleEnded);
      }
    };
  }, [track, dispatch]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(err => console.error(err));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  if (!track) {
    return null;
  }

  function togglePlay() {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        dispatch(setIsPlaying(false));
      } else {
        audioRef.current.play();
        dispatch(setIsPlaying(true));
      }
    }
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
    if (audioRef.current) {
      audioRef.current.volume = Number(e.target.value);
    }
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
