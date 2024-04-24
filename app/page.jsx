"use client"

import { useState, useEffect } from "react";
import anime_Api from '@/lib/animeApi';
import HomeIndex from "@/app/Home/page"
import AnimeInfo from "@/components/layout/AnimeInfo";
import AnimeSeries from "@/components/layout/AnimeSeries";
import Pagintaion from "@/app/pagination/Pagination"
import SearchBar from "./SearchBar/SearchBar";


export default function Home() {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [value, setValue] = useState("");
  console.log(page);

  console.log(value);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.jikan.moe/v4/top/anime?page=${page}`);
      const animeData = await response.json();
      console.log(animeData.data);
      // setPage(animeData.pagination);
      setData(animeData.data);

    };
    fetchData();

  }, [page]);


  console.log("Main : " + value)
  console.log("Updated Page : " + page);
  // setPage(page + 1);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AnimeInfo />

      <SearchBar
        width={300}
        height={100}
        valueChange={setValue}
      />

      <h1 className="mb-[55px]" style={{ fontSize: "35px" }}>Anime Series</h1>



      <div className='AnimeSeriesContainer flex flex-wrap gap-4 justify-center overflow-hidden'>
        {data?.map((item, index) => (
          <AnimeSeries item={item} key={index} />
        ))}


      </div>

      {/* <button onClick={() => {
        setPage(page + 1);
      }}>
        newPage
      </button>  */}

      <div className="pageContainer mt-[60px]">
        {/* <Pagintaion  /> */}


        <div>


          <ul class="inline-flex -space-x-px text-sm">
            <li>
              <button onClick={() => {
                setPage(page === 1 ? 1 : page - 1);


              }} class="flex  items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</button>
            </li>



            {/* <li>
              <button class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</button>
            </li>
            <li>
              <button class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</button>
            </li>
            <li>
              <button aria-current="page" class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</button>
            </li>
            <li>
              <button class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</button>
            </li>
            <li>
              <button class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</button>
            </li> */}
            <li>
              <button onClick={() => {
                setPage(page + 1);
              }}
                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">  Next</button>
            </li>
          </ul>
        </div>
      </div>

    </main>
  );
}
