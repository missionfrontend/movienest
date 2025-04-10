import { rubik } from "../page";

function Directors({director}){
    return <div className={`bg-stone-800 text-gray-200 text-xs  px-2 py-1 rounded-md ${rubik.className}`}>
         <h1>{director.director_name}</h1>
    </div>
}

export default Directors;