"use client"

import React, { useEffect, useState } from 'react';
import anime_Api from '@/lib/animeApi'; // Assuming this is the correct import path for your anime API

const Index = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(anime_Api);
          const animeData = await response.json();
          console.log(animeData);

        };
        fetchData();
    }, []);

    return (
        <div>
       AnimeAPi
        </div>
    );
};

export default Index;
