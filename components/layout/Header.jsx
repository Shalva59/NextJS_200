"use client"

import React from 'react';
import navigation from '@/data/navigation';
import Logo from "@/app/Assets/logo";
import Link from 'next/link'
import Login from "../../app/Authorization/login/page"

const Header = () => {

  const handleClick = () => {
    alert("Click me");
  };

  console.log(navigation);

  return (
    <header >
    
    
      {/* <nav className='flex justify-between'>
        <div className='logo poppins-regular'>
          AnimeLogo
        </div>

        <div className='navigation_cont'>
          <ul>
            {
              navigation.map((item, index) => (
                <li key={index}> <Link href={item.url}>{item.nav}</Link>  </li>
              ))
            }
          </ul>
        </div>

        <div className='registration_cont'>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            <Link href="/Authorization/login">
              Log In
            </Link>
          </button>
        </div>
      </nav> */}


      
      <nav style={{ backgroundColor: 'rgb(107, 94, 209)' }}  class=" bg-white dark:bg-gray-900 fixed z-20 h-16 w-full top-0 start-0  border-b dark:border-gray-600">
        <div class="max-w-screen-xl flex flex-wrap w-full items-center justify-between mx-auto p-4">
          <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <span class="logo poppins-regular self-center text-2xl font-semibold whitespace-nowrap dark:text-white">AnimeLogo</span>
          </a>
          <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            <Link href="/Authorization/login">
              Log In
            </Link>
          </button>
            <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul style={{ backgroundColor: 'transparent' }} class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {
                navigation.map((item, index) => (
                  <li key={index}> <Link href={item.url}>{item.nav}</Link>  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </nav> 



    </header>
  );
};

export default Header;