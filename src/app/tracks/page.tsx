"use client";

import styles from "./page.module.css";
import { TrackType } from "@/types/tracks";
import { getTracks } from "@/api/apiTrack";
import { MainCentralblock } from "@/components/MainCentralblock/MainCentralblock";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { restoreAuth } from "@/store/features/userSlice";

export default function Home() {
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);
  const router = useRouter();

  const [tracks, setTracks] = useState<TrackType[]>([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      dispatch(restoreAuth({ token }));
    } else if (!isAuthenticated) {
      router.push("/"); // Редирект на главную, если нет токена
    }
  }, [dispatch, isAuthenticated, router]);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const data = await getTracks();
        setTracks(data);
      } catch (error: unknown) {
        setErrorMessage(
          error instanceof Error
            ? "Возникли проблемы при загрузке треков: " + error.message
            : "Неизвестная ошибка"
        );
      }
    };
  
    fetchTracks();
  }, []);

  return (
    <>
      {errorMessage ? (
        <div className={styles.error}>{errorMessage}</div>
      ) : (
        <MainCentralblock tracks={tracks} title={"Все треки"} />
      )}
    </>
  );
}