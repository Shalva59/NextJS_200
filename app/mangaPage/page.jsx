"use client"
import React, { useState } from 'react'
import manga_Api from '@/lib/mangaApi'
import AnimeSeries from '@/components/layout/AnimeSeries'
import { useEffect } from 'react'
const Page = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(manga_Api);
      const animeData = await response.json();
      console.log(animeData.data);
      // setPage(animeData.pagination);
      setData(animeData.data);

    };
    fetchData();

  }, []);

  return (

    <div className='AnimeSeriesContainer flex flex-wrap gap-4 justify-center overflow-hidden'>
      {data?.map((item, index) => (
        <AnimeSeries item={item} key={index} />
      ))}


    </div>
  )
}

export default Page;
