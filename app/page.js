import Image from "next/image";
import {Rubik} from "next/font/google"
import { filmsNowShowing } from "./lib/services";
import FilmNowShowing from "./_components/FilmShowing";
import { CgArrowLeftO, CgArrowRightO } from "react-icons/cg";
import { cinemasNearby, filmCommingSoon, getLocation } from "./lib/filmapi";
import FilmUpcoming from "./_components/FilmUpcoming";

export const rubik = Rubik({
  subsets:["latin"],
  weight:"400"
})
export default async function Home() {
  const filmsNow = await filmsNowShowing()
  const Films =filmsNow?.films
  const filmArriving = await filmCommingSoon()
  const arrivingfilms = filmArriving?.films
  
 
  return (
    <div className={`flex flex-col    bg-gradient-to-br  from-stone-800 to-stone-900 ${rubik.className}   `}>
     

      {/* <h1 className="font-semibold text-gray-100 text-lg text-center">Films Now Showing</h1> */}
     
     

     <FilmNowShowing Films={Films}/> 
     <div className="flex flex-col gap-4 justify-center items-center bg-stone-900">

     <h1 className="text-2xl font-bold text-center py-2 text-gray-200 tracking-wide animate-fade bg-stone-700 w-full">Upcoming Movies</h1>
     <div className="grid md:grid-cols-5 grid-cols-2 ">

     {arrivingfilms?.map((film,index)=> <FilmUpcoming key={film?.film_id} film={film} index ={index}/>)}
     </div>
     </div>
     <div className="bg-[#282828] p-10 grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 mb-5 gap-5 justify-between">
           <div className="flex flex-col gap-3 m-5 animate-faderight text-center md:text-left">
           <h1 className="text-5xl uppercase text-white">overview of the world film industry</h1>
           <p className="text-gray-300">You can watch all Movies Online and in your Nearby Cinema at affordable Price</p>
           <p className="text-gray-300">In HD Watch Trailers, Book Your Tickets, Get High Discount</p>
           
           </div>
           <div className="grid grid-cols-2 grid-rows-3  animate-fadeleft">
            <div className="bg-gradient-to-br from-red-400  to-red-800  p-5 text-white font-semibold row-span-1 col-span-1">
              <h1>OTT revenue</h1>
              <p>$270 Million</p>
              <p className="text-xs">2019</p>
            </div>
            
            <div className="row-span-3  bg-white p-5 flex flex-col justify-end font-bold ">
              <h1 className="text-red-500">OTT Revenue</h1>
              <p>$5.0 billion</p>
              <p className="text-xs">2027</p>
            </div>
            {/* <div className="row-span-2 bg-red-900"></div> */}
           </div>
     </div>
      
        
    
   
    </div>
  );
}
