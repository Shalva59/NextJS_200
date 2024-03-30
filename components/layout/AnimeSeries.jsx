import React, { useState, useEffect } from "react";
import anime_Api from "@/lib/animeApi";

const AnimeSeries = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(anime_Api);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const animeData = await response.json();
        setData(animeData.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='AnimeSeriesContainer flex flex-wrap gap-4 justify-center overflow-hidden '>
      {data.map((item, index) => (
        <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-auto" key={index}>
          <a href="#">
            <img className="rounded-t-lg object-cover  w-full h-[170px]"  src={item.images.jpg.large_image_url} alt="" />
          </a>
          <div className="p-5 overflow-hidden flex justify-between flex-col">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title.length < 20 ? item.title : item.title.slice(0, 17) + "..."}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <a href="#"  className="w-6/12 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnimeSeries;
