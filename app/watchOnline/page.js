import { rubik } from "../page";

async function Page({searchParams}){
    const searchParam =  await searchParams;
    const tmdbId = searchParam?.id
    const name = searchParam?.name
    console.log(searchParam.id)
   return <div className="flex flex-col gap-2 justify-center items-center mt-10 mb-5">
    <h1 className={`text-gray-200 ${rubik.className} text-2xl font-bold bg-stone-950 p-2 rounded-md`}>{name} (1080p HD)</h1>
          <iframe src={`https://vidlink.pro/movie/${tmdbId}`} className=" bg-black h-[600px] rounded-md"  width="70%" height="100%"></iframe>
          <div className="flex gap-2 items-center">


          </div>
   </div>
}

export default Page;