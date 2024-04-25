"use client"
import React, { useState, useEffect } from "react";
import anime_Api from "@/lib/animeApi";
import Link from 'next/link'
import Image from "next/image";
const AnimeSeries = ({ item, key }) => {

  //const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(anime_Api);
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch data');
  //       }
  //       const animeData = await response.json();
  //       setData(animeData.data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  const [favorite, setFavorite] = useState(0);

  const handleID = (id) => {
    // console.log(id);
    // sessionStorage.setItem('id', id);
  }

  const miniFavorite = () => {
    const formattedFavorites = item.favorites;
    //return formattedFavorites;
  }

  return (
    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-auto w-[500px] " key={key}>
      <a href="#">
        <img className="rounded-t-lg object-cover  w-full h-[170px]" src={item.images.jpg.large_image_url} alt="" />
      </a>
      <div className="p-5 overflow-hidden flex justify-between flex-col">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title.length < 20 ? item.title : item.title.slice(0, 17) + "..."}</h5>
        </a>
        {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> */}

        <div className="flex justify-between my-3" >
          <div class="flex items-center">
            <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p class="ms-2 text-sm font-bold text-zinc-600 text-gray-900 dark:text-white">{item.score}</p>
          </div>

          <div className="flex">
            <img src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABP0lEQVR4nO3TsUucQRAF8J+IhVU6i1waiYbUMTbW2h2kClaBA0GwSG/nYSNiaWkKC5twnIXYBPIXJNclCFY2gikMeEaIhUTZMAeXY/UUN909eLDMt/PeNzM7DFAIz9DAebCJyZLiP3HdwxSrlDBohOBX1IKtiH0sYXAeYkm4GqxF7KyEQft/GzRDrJVpUWrfo/ECp7cMeUIhVGKg7WCjpPgAt2IYc1jHZxzgFy5wiE9YxisPxGgk/si8nBw72/wa0/3En+JbV/IxdrGCJcziJabwDgsYj9wP2O5nsB/CR6h3bW6HqbocnkTrLjF2l8HvMJjPiFfxvOvuDLawh+9dVZ/gS/xsuvMP+vX7DzYxFKxHrPfeFd7nKri+J3cwEjmLme9vFUQ1Y/CmpEHakzTc1WA6b5Q0WIun20E6p9hf3ADNz33/3oWCGQAAAABJRU5ErkJggg=="></img>
            <p class="ms-2 text-sm font-bold text-zinc-600 text-gray-900 dark:text-white"> {Math.floor(item?.favorites/1000)+"k"}</p>
          </div>

        </div>



        <Link
          onClick={(e) => handleID(item.mal_id)}
          href={`/Description?id=${item.mal_id}&type=${item.type}`}
          className="w-6/12 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Read more
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </Link>
      </div>
    </div>

  );
};

export default AnimeSeries;
