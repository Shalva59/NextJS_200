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
      const mangaData = await response.json();
      console.log(mangaData.data);
      // setPage(animeData.pagination);
      setData(mangaData.data);

    };
    fetchData();

  }, []);

  return (

    <>
    <h1 className='mt-20' style={{fontSize:"30px" , textAlign:"center"}}>Manga</h1>
    <div className='AnimeSeriesContainer p-20 flex flex-wrap gap-4 justify-center overflow-hidden'>
      {data?.map((item, index) => (
        <AnimeSeries item={item} key={index} />
      ))}


    </div>
    </>
  )
}

export default Page;
