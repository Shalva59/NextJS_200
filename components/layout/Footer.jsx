import React from 'react'

const Footer = () => {
  return (
<footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800" style={{backgroundColor:'rgb(107, 94, 209)'}} >
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between" >
      <span style={{color:"white"}} class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0" style={{color:"white"}}>
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">Home</a>
        </li>
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">Anime</a>
        </li>
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">Manga</a>
        </li>
        <li>
            <a href="#" class="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
</footer>

  )
}

export default Footer

 

