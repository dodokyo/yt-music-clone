"use client";
import usePlayerState from "@/hooks/usePlayerState";
import React from "react";
import PlayerContent from "./PlayerContent";

const PlayerWrapper = () => {
  const { isVisiblePlayer } = usePlayerState();

  if (!isVisiblePlayer) return null;

  return (
    <div className=" fixed bottom-0 h-[72px] w-full bg-neutral-900">
      <PlayerContent />
    </div>
  );
};

export default PlayerWrapper;
