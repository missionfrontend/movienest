"use client"

import Link from "next/link";
import { rubik } from "../page";
import { useEffect } from "react";
import { getLocation } from "../lib/filmapi";

function FilmUpcoming({film,index}){
   
    return <Link href={`/${film?.film_id}`} className="mx-8 flex my-2 mb-5 max-w-fit animate-fade delay-100 relative hover:scale-105 duration-300 group">
           <img src={film?.images?.poster["1"].medium.film_image} className="rounded-md opacity-45 w-48"/>
           <h1 className=" bg-stone-900 rounded-full text-5xl w-16 h-16   flex justify-center font-bold items-center text-gray-200 -left-6    transition-all duration-500 absolute">{index+1}</h1>
           <div className={`bg-slate-950 bg-opacity-80 rounded-b-md ${rubik.className} absolute group-hover:h-20 h-10 duration-300 transition-all bottom-0 font-semibold right-0 left-0 p-2`}>

           <h1 className="font-bold text-white text-center text-xs">{film?.film_name}</h1>
           <p className="text-gray-200 text-center hidden group-hover:block text-sm">Release Date: {film?.release_dates[0]?.release_date}</p>
           </div>
    </Link>
}

export default FilmUpcoming;