import PagePadding from "@/components/PagePadding";
import React from "react";
import Category from "./components/Category";
import { getAllPlaylist } from "@/lib/dummyData";
import PlayListCarousel from "@/components/PlayListCarousel";

const page = async () => {
  const playlistArray = await getAllPlaylist();

  return (
    <PagePadding>
      <div className="mt-4"></div>
      <Category />
      <div className="mt-20"></div>
      <PlayListCarousel playlistArray={playlistArray} title="새 앨범 및 싱글" />
    </PagePadding>
  );
};

export default page;
