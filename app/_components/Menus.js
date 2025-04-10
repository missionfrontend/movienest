import { Poppins } from "next/font/google";
import Link from "next/link";
import { CgCloseO} from "react-icons/cg"
const poppin = Poppins({
   subsets:["latin"],
   weight:"600"
})
function Menus(){
  return <div className={`absolute flex flex-col items-center  text-xs ${poppin.className} animate-faderight p-2 gap-4 z-10 top-0 min-h-screen w-1/2   left-0 bg-[#282828] border-r-2 border-r-stone-800`}>
         {/* <button className="text-white hover:bg-[#333] hover:text-stone-50"><CgCloseO className="w-8 h-8 hover:bg-black rounded-full"/></button>  */}
         <h1 className="text-lg mt-2 border-b-2 border-b-gray-500 font-semibold bg-gradient-to-br from-red-500 to-red-200 bg-clip-text text-transparent">MovieNest</h1>
         {/* <Link href="" className="text-gray-100 hover:bg-[#3f3f3f] w-full p-2 text-center mt-10 rounded-md">Upcoming Movies</Link> */}
         {/* <Link href="" className = "text-gray-100 hover:bg-[#3f3f3f] w-full p-2  text-center rounded-md">Now Playing</Link> */}
         <Link href="/nearbyCinema" className="text-gray-100 hover:bg-[#3f3f3f]  p-2 w-full text-center rounded-md">Nearby Cinema</Link>
  </div>
}

export default Menus;