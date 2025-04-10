import { MdError } from "react-icons/md";
import SearchedMovie from "../_components/SearchedMovie";
import { searchletterBox, searchMovie } from "../lib/filmapi";
import { rubik } from "../page";

async function Page({searchParams,message}){
  const {query} = await searchParams
  
  const searchedMovie =  await searchMovie(query)
  const movieSearched = searchedMovie?.films
  
  


  return <div className={`m-10 text-gray-200 flex flex-col gap-2 p-3 ${rubik.className}`}>
        <h1 className="text-2xl font-bold">Your Searched Results ({movieSearched?.length || 0})</h1>
        <div className="grid   grid-cols-2 md:grid-cols-4 lg:grid-cols-7  gap-3 mt-8">

        {movieSearched?.map((movie)=> <SearchedMovie key={movie?.film_id} movie={movie}/>)}
        
        </div>
        {searchedMovie?.message && <div className="flex justify-center items-center text-2xl gap-2">
            <MdError/>{searchedMovie?.message}
        </div>}
   </div>
}

export default Page;