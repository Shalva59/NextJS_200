"use client"
import React, { useEffect, useState } from 'react'
import animeSearchApi from '@/lib/animeSearchApi';
import page from '../AnimePage/page';
import Link from 'next/link';

const SearchBar = ({ width, height, valueChange }) => {

    //console.log(width);
    // console.log(height);

    const [data, setData] = useState();
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        valueChange(event.target.value);
    };

    // console.log(inputValue)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${animeSearchApi}?q=${inputValue}`);
            const animeDataSearch = await response.json();
            console.log(animeDataSearch.data);
            // setPage(animeData.pagination);
            setData(animeDataSearch.data);
        };
        fetchData();

    }, []);



    return (
        <form className="max-w-md mx-auto mb-10">
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative w-[500px]">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input
                    type="search"
                    value={inputValue}
                    onChange={handleInputChange}
                    id="default-search"
                    className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search Anime or Manga"
                    required
                />
                <button  className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <Link href={`/SearchPage/?data=${data}}`}>
                        Search
                    </Link>
                </button>
            </div>
        </form>
    );
}

export default SearchBar;

