"use client";

import { MainCentralblock } from "@/components/MainCentralblock/MainCentralblock";
import { useAppSelector } from "@/store/store";
import { redirect } from "next/navigation";

export default function FavoritePage() {
  const favoriteTracks = useAppSelector((state) => state.playlist.likedTracks);
  const {user} = useAppSelector((state) => state.user);

  if (!user) {
    return redirect("/");
  }
  return <MainCentralblock tracks={favoriteTracks} title={"Мои треки"} />;
}