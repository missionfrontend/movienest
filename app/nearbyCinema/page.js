








import NearbyShow from "../_components/NearbyShow";
import { cinemasNearby } from "../lib/filmapi";
import { rubik } from "../page";
import { IoLocation, IoTicketSharp } from "react-icons/io5";



export default  async function Page({searchParams}) {
   const lat = searchParams?.lat
   const lng= searchParams?.lng
   const nearbyCinema = await cinemasNearby({lat,lng})
   

  return (
    <div className={`m-10 flex flex-col gap-3 ${rubik.className}`}>
      <h1 className="md:text-3xl text-xl text-gray-100 font-bold flex items-center gap-2">
        Nearby Cinema
        <IoLocation className="fill-yellow-200 animate-bounce " />
        {/* <p className=" border-dashed border-4 w-56 h-1 rounded-t-xl animate-pulse  self-end"></p> */}
      </h1>
      <p className="text-gray-200  text-sm ">
        Find your nearest cinema and catch the latest blockbusters. Check
        showtimes, reviews, and book tickets  effortlessly for
        an unforgettable movie night. Discover the latest movies and showtimes
        at nearby cinemas. Find your perfect film experience and book tickets
        easily with our comprehensive guide.
      </p>
        <div className="grid md:grid-cols-2 gap-4 grid-flow-row mt-10">

        {nearbyCinema?.cinemas?.map((cinema)=><NearbyShow key={cinema?.cinema_id} cinema ={cinema}/>  )}
        </div>
      
    </div>
  );
}
