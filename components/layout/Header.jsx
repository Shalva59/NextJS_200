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
    <header>
      <nav className='flex justify-between'>
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
      </nav>
    </header>
  );
};

export default Header;