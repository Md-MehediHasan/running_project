'use client'
import { useState } from "react"

export default function TargetFive({products,BrowseSimilar,headerTitle,animation}){
    const [isHovered,setIsHovered]=useState(0)
    return(
        <div className="grid grid-cols-2 lg:grid-cols-4 shadow-md border-y-2 mt-1 p-2 lg:p-8 lg:mt-12 gap-2 lg:gap-4 mx-auto lg:mx-2 my-5 lg:gap-x-8">
        <h2 className="col-span-2 lg:col-span-4 text-2xl lg:text-4xl text-bold m-3">{headerTitle}</h2>
     
         {
            products.map((item,index)=>(
                <div key={index} className="relative overflow-hidden shadow-slate-200 ring-2 ring-slate-200 rounded-sm shadow-md" onMouseOver={()=>setIsHovered(item)} onMouseOut={()=>setIsHovered(0)}>
                    <div className={`${animation && isHovered==item?'opacity-60 bg-slate-200':''} ` } >
                        <div className="relative">
                            <span className="absolute  top-0 left-0 p-2 bg-yellow-400">30% Off</span>
                            <img src='/temp_pics/Bags.jpeg' className=" w-full p-2" />
                        </div>
                        <div className="mt-2 flex justify-center p-2">
                            <strike className="block px-2 py-1 bg-black text-white">300</strike> <span className="block  bg-green-500 text-white semibold px-2 py-1 mx-1">240</span>
                        </div>
                        {!animation && <div className="my-2">
                            <button className="bg-green-500 block mx-auto w-3/4 p-2 rounded-sm duration-300 ease-in-ease-out hover:opacity-80 text-white">Add To Cart</button>
                            </div>
                            
                        }
                    </div>
                    {animation &&  <div className={`w-full h-full absolute duration-1000 ease-in-ease-out  transition-transform top-0 flex ${isHovered==item?'translate-y-0':'translate-y-96'} items-center justify-center `} >
                                 <div className="w-25">
                                    {BrowseSimilar &&<button className="bg-yellow-300 text-center block my-2 p-2 rounded-sm duration-300 ease-in-ease-out hover:opacity-80 text-black">Browse Similar</button>}
                                    <button className="bg-green-500 block mx-auto w-25 p-2 rounded-sm duration-300 ease-in-ease-out hover:opacity-80 text-white">Add To Cart</button>
                                 </div>
                   </div>}
                
               </div>
            ))
         }
        
      </div>
    )
}