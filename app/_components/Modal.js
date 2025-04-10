"use client"
import { cloneElement, createContext, useContext, useEffect, useRef, useState } from "react";
import { CgCloseO } from "react-icons/cg";

const ModalContext = createContext()

function Modal({children}){
    const [isOpen,setisOpen] = useState("")
    const close =()=> setisOpen("")
    const open = setisOpen
    return <ModalContext.Provider value={{isOpen,open,close}}>
         {children}
    </ModalContext.Provider>
}

export function Button({children,name}){
    const {open,isOpen,close} = useContext(ModalContext)
    const ref = useRef()
    useEffect(function(){
       function handleClose(e){
           if(ref.current && !ref.current.contains(e.target)){
             close()
           }
        
       }
       document.addEventListener("click",handleClose,true)
       return ()=> document.removeEventListener("click",handleClose,true) 
    },[])
    return <div ref={ref}>
           {cloneElement(children ,{onClick:()=>!isOpen ? open(name): close()})}
    </div>
}

export function Window({children,name}){
   const {isOpen,close} = useContext(ModalContext)
   
    if(name !== isOpen) return null;
    return <div className="bg-stone-800  absolute top-0 left-0 right-0 bottom-0 bg-opacity-100 z-10">
        <button className="text-white absolute top-3 right-6" onClick={()=> close()}><CgCloseO className="w-7 h-7"/></button>
        {cloneElement(children)}
    </div>
}

export default Modal;