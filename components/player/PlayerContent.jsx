import React from "react";
import { Slider as PlayerSlider } from "@/components/ui/playerSlider";
import { useAudio } from "react-use";

const PlayerContent = () => {
  const [audio, state, controls, ref] = useAudio({
    src: null, //"/music/50meru - Canopus.mp4",
    autoPlay: true,
  });

  return (
    <div className="h-full w-full relative">
      <div className=" absolute top-[-16px] w-full">
        <PlayerSlider />
      </div>
      {audio}
    </div>
  );
};

export default PlayerContent;
