"use client";

import React from "react";
import { PlaylistContent } from "@/components/PlaylistContent/PlaylistContent";
import styles from "@/components/MainCentralblock/MainCentralblock.module.css";
import { FilterButtons } from "@/components/FilterButtons/FilterButtons";
import { TrackType } from "@/types/tracks";
import { useAppDispatch } from "@/store/store";
import { useEffect } from "react";
import { setInitialPlaylist } from "@/store/features/authSlice"

type MainCentralblockProps = {
  tracks: TrackType[];
  title: string;
};

export const MainCentralblock = ({ tracks, title }: MainCentralblockProps) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setInitialPlaylist(tracks));
  }, [tracks, dispatch]);
  return (
    <>
      <h2 className={styles.centerblockH2}>{title}</h2>
      {<FilterButtons />}
      <PlaylistContent tracks={tracks} />
    </>
  );
};
