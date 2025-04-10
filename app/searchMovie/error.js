"use client"

import { MdError } from "react-icons/md";
import { rubik } from "../page";

function Error({error}){
  if(!error) return;
  return <div className={`flex justify-center items-center text-gray-200 text-3xl gap-2 h-[90vh] ${rubik.className}`}><MdError className="fill-red-500"/>{error?.message}</div>
}
export default Error;