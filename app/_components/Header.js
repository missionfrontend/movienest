"use client"

import { Poppins, Rubik } from "next/font/google";
import Link from "next/link";
import {RxHamburgerMenu} from "react-icons/rx"
import Menus from "./Menus";
import Modal, { Button, Window } from "./Modal";
import { useEffect, useState } from "react";
import { redirect } from "next/dist/server/api-utils";
import { Router, usePathname, useRouter, useSearchParams } from "next/navigation";
import { IoCloseCircle, IoSearchCircle } from "react-icons/io5";
const rubik = Rubik({
  subsets: ["latin"],
  weight: "700",
});
const poppin = Poppins({
    subsets:["latin"],
    weight:"400"
})
function Header() {
  const [position,setposition] = useState()
  const [searchQuery,setsearchQuery] = useState("")
  const [isShow,setisShow] = useState(false)
  const router  = useRouter()
  useEffect(function(){
     if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(pos=> setposition(pos?.coords))
     }
  },[])
  
  function handleSearchQuery(e){
    e.preventDefault()
    const param = new URLSearchParams()
    param.set("query",searchQuery)
    
   if(!searchQuery) return;
    router.push(`/searchMovie?${param.toString()}`)
   setsearchQuery("")
     
  }
  return (
    <div className="flex items-center justify-between  p-3 bg-stone-800">
      <Link
        href="/"
        className={`${rubik.className} font-bold mx-4  text-lg md:text-xl text-gray-50 duration-500 bg-gradient-to-br from-red-500 to-red-100 bg-clip-text text-transparent`}
      >
        Movie<span className="">Nest</span>
      </Link>
     
      <form onSubmit ={handleSearchQuery} className={`flex-1 rounded-full  font-semibold ${poppin.className} border-2 border-[#3f3f3f]  mx-4 text-sm shadow-lg max-w-fit hidden md:flex-1 lg:flex lg:text-sm md:flex md:text-xs`}>
       <input type="text" className="outline-none rounded-s-full font-extralight bg-stone-600 text-gray-100 px-3 py-2 w-[30vw] " onChange={(e)=> setsearchQuery(e.target.value)} value={searchQuery} placeholder="Search Movies of your Choice"/>
       <button className="px-3 bg-[#3f3f3f] py-2 rounded-e-full text-white hover:bg-[#282828] duration-200 group/search relative">Search
       <p className="bg-stone-700 text-stone-50 px-2 py-1 z-20 text-xs rounded-md group-hover/search:block hidden absolute top-10 right-2 tracking-wider">Search</p>
       {/* <div className="" ></div> */}
       </button>
      </form>

     <div className={`gap-3 ${poppin.className} text-xs items-center gap-4 px-2 font-semibold mx-5 hidden lg:flex  p-1 rounded-md md:flex md:gap-1`}>
      {/* <Link href="" className="font-semibold text-gray-100  px-2  hover:bg-[#3f3f3f] rounded-md py-2 duration-200">Upcoming Movies</Link> */}
      
    
      <Link href={`/nearbyCinema?lat=${position?.latitude}&lng=${position?.longitude}`} className="text-gray-200 font-semibold px-2 py-2 rounded-md hover:bg-[#3f3f3f] duration-200">Nearby Cinema</Link>
    </div> 
    <div className="md:hidden">
      <Modal>
        <Button name="menu">
         <button className="mx-4 text-white"><RxHamburgerMenu className="w-6 h-6"/></button>

        </Button>
        <Window name="menu">
          <Menus/>
          </Window> 
      </Modal>
      
    </div>
    <div className="fixed text-gray-200 top-2 flex left-[45%]  justify-center items-center md:hidden z-50">
     <button className="bg-stone-900 p-2 rounded-md hover:-translate-y-1 duration-300" onClick={()=> setisShow(open=> !open)}>{isShow ?<IoCloseCircle className="w-7 h-7"/> :<IoSearchCircle className="w-7 h-7"/>}</button>
    </div>
    {isShow && <form onSubmit={handleSearchQuery} className={`fixed top-14 left-5 text-gray-200 flex-1 rounded-full animate-fadetop z-50  text-xs max-w-fit md:hidden border-4 border-stone-500 hover:-translate-y-2 duration-300 ${rubik.className}`}>
      <input type="text" className="px-4 py-2 bg-stone-700 outline-none rounded-s-full w-[75vw] " placeholder="Search Movies of your Choice" onChange={(e)=> setsearchQuery(e.target.value)} value={searchQuery}/>
      <button className="bg-stone-900 rounded-e-full px-3 py-2 hover:bg-stone-950">Search</button>
    </form>}
    </div>
  );
}

export default Header;
