import { IoLocation, IoLocationSharp } from "react-icons/io5";
import {FaCity, FaLightbulb} from "react-icons/fa"

function NearbyShow({cinema}){
   
   return <div className="text-gray-300 grid grid-cols-2 bg-stone-900 shadow-lg p-4 gap-3  duration-300 rounded-md justify-between hover:-translate-y-2 ">
      <div className="flex flex-col gap-2 text-xs md:text-sm">
      <h1 className="text-xl text-gray-200 font-bold">{cinema?.cinema_name}</h1>
      <p className="text-[10px] md:text-sm flex items-center gap-1"><IoLocationSharp className="fill-blue-500"/>{cinema?.address}<span>{cinema?.address2}</span></p>
      
      <span className="flex items-center gap-1"><FaCity className="fill-red-400"/>{cinema?.city}</span>
      <p>State: {cinema?.state}</p>
      <p>Postcode: {cinema?.postcode}</p>
      <p>Distance: {Math.floor(cinema?.distance * 1.6)} Km</p>
      <button className="bg-yellow-100 p-1 text-stone-900 text-xs font-semibold rounded-sm max-w-fit">Get Location</button>
      </div>   
      <div className="flex w-full">
         <img src={cinema?.logo_url} className="w-full "/>
      </div>
      <div className="absolute z-20 bg-red-500 ">
      
      </div>    
   </div>
}

export default NearbyShow;