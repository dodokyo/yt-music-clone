import { Playlist } from "@/types";
import React from "react";

interface PlayListCarouselProps {
  title: string;
  subTitle?: string;
  Thumnail?: React.ReactNode;
  playlistArray?: Playlist[];
}

const PlayListCarousel: React.FC<PlayListCarouselProps> = ({
  title,
  subTitle,
  Thumnail,
  playlistArray,
}) => {
  return (
    <div>
      {/* PlayListCarousel
      {Thumnail}
      {title} - {subTitle}
      {JSON.stringify(playlistArray)} */}
    </div>
  );
};

export default PlayListCarousel;
