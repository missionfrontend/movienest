import { rubik } from "../page";


function Cast({cast}){
   return <div className={` text-gray-200 rounded-lg tracking-wider text-[10px] p-2 bg-[#3f3f3f] ${rubik.className}`}>
          <p>{cast?.cast_name}</p>
   </div>  
}

export default Cast;