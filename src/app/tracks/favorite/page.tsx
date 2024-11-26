"use client";

import { MainCentralblock } from "@/components/MainCentralblock/MainCentralblock";
import { useAppSelector } from "@/store/store";

export default function FavoritePage() {
  const favoriteTracks = useAppSelector((state) => state.playlist.likedTracks);

  return <MainCentralblock tracks={favoriteTracks} title={"Мои треки"} />;
}