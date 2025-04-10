"use client"
import { Poppins } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CgArrowLeftO, CgArrowRightO, CgCalendar } from "react-icons/cg";
import {RiMovieFill} from "react-icons/ri"
const poppin = Poppins({
    subsets:["latin"],
    weight:"500"
})
function FilmNowShowing({Films}){
    const [index,setindex] =useState(0)
    const film = Films[index]
    const synopsis = film?.synopsis_long.split("").slice(0,500)
    useEffect(function(){
      const imagechange = setInterval(function(){
        index < (Films.length-1) ? setindex(index=> index+1) : setindex(0)
        
    },10000)

    return ()=> clearInterval(imagechange)
    },[setindex,index])
    
    return <div className={` md:grid grid-cols-2 block bg-[#282828] transition-all duration-500 animate-appear  bg-opacity-35 p-2 rounded-lg group ${poppin.className}`}>
         <div className=" flex flex-col m-5 p-4 gap-4">
           <div></div>
           <h1 className="text-2xl font-bold text-gray-200">{film?.film_name}</h1>
           {film?.release_dates?.map((date,index)=> <p className="font-semibold text-xs tracking-wider flex items-center gap-3 bg-yellow-100 rounded-full py-1 px-3 max-w-fit text-red-500 " key={index}><span className="text-red-600"><CgCalendar className="w-5 h-5"/></span> {date?.release_date}</p>)}
           <p className="text-red-400 font-bold tracking-wider">Synopsis :</p>
           <p className="text-xs text-stone-300 text-left">{synopsis}...</p>
           {film?.age_rating?.map((rating,index)=><img src={rating?.age_rating_image} className="w-10 h-10" key={index}/>)}
           <div className="flex gap-3 items-center">

           <Link href={`/${film.film_id}`} className="bg-red-500 px-3 py-2 border-2 border-red-500 rounded-full max-w-fit text-white text-xs hover:bg-red-700 ">Watch Now</Link>
           {film?.film_trailer && <Link href={film?.film_trailer} className="max-w-fit flex items-center gap-2 bg-red-800 text-gray-100 text-xs py-2 px-3 rounded-full border-2 border-gray-100">Watch Trailer<RiMovieFill/></Link>}
           </div>
         </div>
         
         <img src={film?.images?.still["1"].medium?.film_image} className="md:w-full w-full h-[200px] opacity-50 md:h-[500px] rounded-lg object-cover" />
         <button className="absolute top-[40%] text-white hover:bg-stone-800 group-hover:block hidden right-1 duration-1000 bg-opacity-45 bg-stone-700 p-4" onClick={()=> index < Films?.length-1 ? setindex(index=> index+1): setindex(0)}><CgArrowRightO className="w-10 h-10"/></button>     
     <button className="absolute top-[40%] text-white bg-stone-700 group-hover:block hidden duration-500 bg-opacity-45 p-4 left-1" onClick={()=> index > 0 ? setindex(index=> index-1) : setindex(Films?.length-1)}><CgArrowLeftO className="w-10 h-10"/></button> 
         
    </div> 
}
export default FilmNowShowing;