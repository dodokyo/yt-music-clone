import { TopSong } from "@/types";
import React from "react";

interface SongCardProps {
  song: TopSong;
}

const SongCard: React.FC<SongCardProps> = ({ song }) => {
  return <div>{song.name}</div>;
};

export default SongCard;
