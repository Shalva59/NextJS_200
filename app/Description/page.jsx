
"use client"
import React from 'react';
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const Page = () => {

  const [data, setData] = useState(null);
  const [id, setId] = useState(null);
  const searchParams = useSearchParams();

  const searchID = searchParams.get("id");
  const searchType = searchParams.get("type");
  const highQualityImage = data?.trailer?.images?.maximum_image_url;
  const lowQualityImage = data?.images?.jpg?.large_image_url;


  useEffect(() => {
    //  const storedId = sessionStorage.getItem('id');
    //  setId(storedId);

    console.log(searchID)

    let foo = "";


    const fetchData = async () => {
      try {



        const response = await fetch(`https://api.jikan.moe/v4/${(searchType === "Manga" ? "manga" : "anime")}/${searchID}`);
        //        https://api.jikan.moe/v4/manga/{id}
        const animeData = await response.json();

        console.log(animeData.data);
        setData(animeData.data);



        // const response = await fetch();
        // //        https://api.jikan.moe/v4/manga/{id}
        // const animeData = await response.json();
        // console.log(animeData.data);
        // setData(animeData.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (searchID) {
      fetchData();
    }
  }, []);

  return (


    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-img:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">{data && data.title}</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{data && data.title_english}</h1>

            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="object-cover w-[48rem] h-[700px] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src={(highQualityImage != null) ? highQualityImage : lowQualityImage}
            //{data && data.images.jpg.large_image_url}
            alt={data && data.title}
          />
        </div>
        <div className="lg:col-span-2  lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl  text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                {data?.synopsis}
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600 ">
                <li className="flex gap-x-3 ">
                  {/* <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" /> */}
                  <span className='font-semibold	'>
                    <strong className="font-semibold text-gray-900">Released : </strong> {(data?.year) ? data?.year : data?.published?.string}
                  </span>
                </li>
                <li className="flex gap-x-3">
                  {/* <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" /> */}
                  <span className='font-semibold'>
                    <strong className="font-semibold text-gray-900">Type : </strong> {data?.themes[0]?.type}
                  </span>
                </li>
                <li className="flex gap-x-3">
                  {/* <ServerIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" /> */}
                  <span>
                    <strong className="font-semibold text-gray-900">Age is acceptable : </strong> {(data?.rating) ? data?.rating : <span>Not info</span>}
                  </span>
                </li>
                <li className="flex gap-x-3">
                  {/* <ServerIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" /> */}
                  <span>
                    <strong className="font-semibold text-gray-900">score : </strong> {data?.score}
                  </span>
                </li>

                <li className="flex gap-x-3">
                  {/* <ServerIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" /> */}
                  <span className='flex justify-center items-center justify-around'>
                    <strong className="font-semibold text-gray-900 ">Genres: </strong>
                    {
                      data?.genres.map((item, index) =>
                      (
                        <span className='bg-violet-500 text-white rounded-lg p-1  mx-1.5 text-xs' key={index}>  <a href={item.url} target="_blank" >{item.name}</a>   </span>
                      ))
                    }
                  </span>
                </li>

                <li className="flex gap-x-3">
                  {/* <ServerIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" /> */}

                  <div className='flex  mt-[-39px]  items-center justify-stretch'>
                    <div className='one'>
                      <strong className="font-semibold text-gray-900 ">Producers: </strong>
                    </div>

                    <div className=" second mt-[39px] self-center flex flex-wrap">
                      {data?.producers?.map?.((item, index) => (
                        <a
                          href={item.url}
                          target="_blank"
                          className="flex text-nowrap bg-violet-500 text-white rounded-lg p-1 mx-1.5 text-xs mb-2" // Added mb-2 for vertical margin
                          key={index}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>

                  </div>
                </li>

              </ul>
              {/* <p className="mt-8">
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
                fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
                adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
              </p> */}
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">More info</h2>
              <p className="mt-6">
                {(data?.background) ? data?.background : <h3>Not mini info</h3>}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
