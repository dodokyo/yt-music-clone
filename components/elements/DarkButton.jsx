"use client";
import React from "react";
import { cn } from "@/lib/utils";

const DarkButton = ({ icon = <></>, label, className = "", ...props }) => {
  return (
    <div
      className={cn(
        " cursor-pointer border border-neutral-700 bg-black hover:bg-neutral-700 text-white rounded-2xl flex flex-row items-center min-w-[80px] h-[36px] p-4 gap-2 ",
        className
      )}
      {...props}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  );
};

export default DarkButton;
