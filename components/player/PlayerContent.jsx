import React from "react";
import { Slider as PlayerSlider } from "@/components/ui/playerSlider";

const PlayerContent = () => {
  return (
    <div className="h-full w-full relative">
      <div className=" absolute top-[-16px] w-full">
        <PlayerSlider />
      </div>
    </div>
  );
};

export default PlayerContent;
