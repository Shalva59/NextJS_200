"use client"

import Image from "next/image";
import { useState, useEffect } from "react";
import anime_Api from '@/lib/animeApi';
import HomeIndex from "@/app/Home/page"
import AnimeInfo from "@/components/layout/AnimeInfo";
import AnimeSeries from "@/components/layout/AnimeSeries";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(anime_Api);
      const animeData = await response.json();
      console.log(animeData.data);

    };
    fetchData();
  }, []);


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AnimeInfo />

      <h1 className="mb-[55px]" style={{ fontSize: "35px" }}>Anime Series</h1>

      <AnimeSeries />

    </main>
  );
}
