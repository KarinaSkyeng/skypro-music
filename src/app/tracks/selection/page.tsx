"use client";

import { getSelectionTracks, getTracks } from "@/api/apiTrack";
import { MainCentralblock } from "@/components/MainCentralblock/MainCentralblock";
import { TrackType } from "@/types/tracks";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SelectionPage() {
  const { id } = useParams<{ id: string }>();
  const [selectionTracks, setSelectionTracks] = useState<TrackType[]>([]);
  const [selectionName, setSelectionName] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const allTracks: TrackType[] = await getTracks();
        const tracks = await getSelectionTracks(id);

        const res = allTracks.filter((track) =>
          tracks.items.includes(track._id)
        );

        setSelectionName(tracks.name);
        setSelectionTracks(res);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [id]);

  console.log(selectionTracks); 

  return <MainCentralblock tracks={selectionTracks} title={selectionName} />;
}