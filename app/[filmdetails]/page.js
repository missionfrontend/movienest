import { Poppins, Rubik } from "next/font/google";
import { filmDetail } from "../lib/filmapi";
import { MdOutlineAccessTimeFilled, MdReviews } from "react-icons/md";
import { CgCalendar } from "react-icons/cg";
import { SiShowtime } from "react-icons/si";
import Cast from "../_components/Cast";
import Directors from "../_components/Directors";
import Link from "next/link";
const rubik = Rubik({
  subsets: ["latin"],
  weight: "500",
});
const poppin = Poppins({
  subsets: ["latin"],
  weight: "500",
});
async function Page({ params }) {
  const { filmdetails } = await params;
  console.log(params)
  const filmDescription = await filmDetail(filmdetails);

  function formatDate(date) {
    const formateddate = new Date(date).toDateString();
    return formateddate;
  }
  function formatshowDate(date) {
    const formatedDate = new Date(date).toDateString()

    return formatedDate.split("2025").slice(0,1).join("");
  }
  return (
    <div className="bg-stone-900 flex flex-col gap-5  p-4 h-full ">
      <div className="grid md:grid-cols-3 md:grid-rows-1 grid-cols-1  grid-rows-2  relative md:gap-4    border border-stone-700  rounded-md">
        <img
          src={filmDescription?.images?.poster["1"].medium.film_image}
          className="w-full md:h-[650px] h-[700px] opacity-35 "
        />
        <div
          className={`flex flex-col gap-3 md:items-start col-span-2 md:m-4 p-3 ${poppin.className} `}
        >
          <h1 className={`text-gray-50 text-2xl ${rubik.className}`}>
            {filmDescription?.film_name}
          </h1>
          <p
            className={`text-yellow-100 font-semibold tracking-wider ${rubik.className}`}
          >
            Genre: {filmDescription?.genres[0]?.genre_name}
          </p>
          <p className="text-gray-300 md:text-[12px] md:w-2/3 text-left text-xs">
            {filmDescription?.synopsis_long}
          </p>
          <p className="text-stone-800 bg-yellow-100 rounded-full px-3 py-1 text-sm font-semibold flex gap-2 items-center">
            <CgCalendar />
            Released :{" "}
            {formatDate(filmDescription?.release_dates[0].release_date)}
          </p>
          <p className="text-stone-200 flex items-center gap-2 text-sm ">
            <MdOutlineAccessTimeFilled className="fill-white" />
            Duration:- {filmDescription?.duration_mins} min
          </p>
          <p
            className={`flex gap-2 items-center text-gray-100 ${rubik.className} bg-stone-800 px-2 rounded-md`}
          >
            Cast
          </p>
          <div className="grid grid-cols-5  gap-2 items-center ">
            {/* <p className="text-white">Cast:</p> */}
            {filmDescription?.cast?.map((cast) => (
              <Cast key={cast.cast_id} cast={cast} />
            ))}
          </div>
          <h1 className="bg-amber-800 text-gray-50 px-2 rounded-md text-xs py-1 tracking-wider">
            Directors
          </h1>
          <div className="flex gap-2">
            {filmDescription?.directors?.map((director) => (
              <Directors director={director} key={director.director_id} />
            ))}
          </div>
          {/* <div className="flex gap-2 bg-stone-800 border border-stone-700 hover:scale-105 duration-300 p-2 rounded-md text-xs items-center">
               <p className="text-gray-200">{filmDescription?.film_name}<span className="text-yellow-200"> ( High Quality HD)</span></p> 
               <Link href="" className="bg-stone-950 text-white rounded-md p-2 hover:bg-slate-900">Watch Online</Link>
              </div> */}
          <h1 className="flex gap-2 items-center text-sm text-gray-200">
            Show Dates:
            <SiShowtime className="w-6 h-6 fill-red-500" />
          </h1>
          <div className="grid grid-cols-6 gap-2 text-xs  ">
            {filmDescription?.show_dates?.map((date, index) => (
              <p
                className="bg-gradient-to-br from-yellow-100 to-yellow-300 font-bold p-1 rounded-md shadow-yellow-200 shadow-sm text-amber-800"
                key={date.date}
              >
                {formatshowDate(date.date)}
              </p>
            ))}
          </div>
          <Link href={`/watchOnline?id=${filmDescription?.imdb_title_id}&name=${filmDescription?.film_name}`} className={`${rubik.className} text-gray-200 bg-gradient-to-br from-black to-stone-800 p-2 rounded-md text-xs border-2 hover:border-stone-800 duration-200`}>Watch Online</Link>
        </div>
         <div className="absolute md:bottom-2 md:top-auto  right-2 top-2 flex gap-5 items-center bg-[#282828] p-2 rounded-lg">
        <img
            src={filmDescription?.images?.still["1"]?.medium.film_image}
            className="rounded-full shadow-lg  w-20 h-20 hover:scale-[200%] duration-300 hover:-translate-x-10 hover:border-2 hover:border-gray-500"
          />
          <img
            src={filmDescription?.images?.still["2"]?.medium.film_image}
            className="rounded-full shadow-lg w-20 h-20 hover:scale-[200%] hover:-translate-x-10 hover:border-2 hover:border-gray-300 duration-300"
          />
        </div> 

        {/* <img src={filmDescription?.images?.still["1"].medium.film_image} className="absolute w-1/3  mx-[20%] opacity-90 h-full  top-0"/> */}
      </div>
    </div>
  );
}

export default Page;
