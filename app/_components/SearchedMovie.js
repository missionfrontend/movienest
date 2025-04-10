import Link from "next/link";

function SearchedMovie({movie}){
  const {film_id,film_name,images:{poster},release_dates=""} =movie
  return <Link href={`/${film_id}`} className="relative hover:scale-105 duration-300 max-w-fit">
       <img src={poster["1"].medium.film_image} className="rounded-md "/>
       <div className="absolute bottom-0 left-0 right-0 bg-slate-950  rounded-b-md p-2 bg-opacity-80 ">
         <p className="text-center font-semibold">{film_name}</p>
       </div>
       <div className="text-gray-200 absolute top-0 -left-5 border-2 border-gray-200 bg-slate-900 w-16 h-16 flex justify-center items-center rounded-full">{release_dates[0].release_date.split("-")[0]}</div>
  </Link>
}

export default SearchedMovie;