import { TopSong } from "@/types";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import PlayListCard from "./PlayListCard";

interface SongListCarouselProps {
  title: string;
  subTitle?: string;
  Thumbnail?: React.ReactNode;
  songListTop10?: TopSong[];
}

const SongListCarousel: React.FC<SongListCarouselProps> = ({
  title,
  subTitle,
  Thumbnail,
  songListTop10,
}) => {
  return (
    <div className="w-full">
      <Carousel>
        <div className="flex flex-row justify-between items-end my-2">
          <article className="flex flex-row gap-3">
            {Thumbnail}
            <div className="flex flex-col justify-center">
              <div>
                {subTitle && (
                  <div className=" text-neutral-500">{subTitle}</div>
                )}
              </div>
              <div className="text-[34px] font-bold leading-[34px] ">
                {title}
              </div>
            </div>
          </article>
          <div className="relative left-[-45px]">
            <div className="absolute bottom-[20px]">
              <CarouselPrevious className="right-2" />
              <CarouselNext className=" left-2" />
            </div>
          </div>
        </div>
        <CarouselContent className="mt-4">
          {songListTop10?.map((playlist, index) => {
            return (
              <CarouselItem
                key={index}
                className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
              >
                <PlayListCard playlist={playlist} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default SongListCarousel;
