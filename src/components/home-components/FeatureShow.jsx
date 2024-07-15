'use client'
import Link from "next/link"
export function FeatureShow({item}){
    return(
        <div className="p-2 bg-transparent rounded-sm shadow-sm border-2 border-green-200">
                 <h2 className="text-2xl semibold text-center my-4">{item.title}</h2>
            <div className="grid grid-cols-2 gap-2 lg:gap-4">
              {item.items.map(el=>(
                <div key={el.name} className="border border-slate-200 rounded-sm shadow-md p-2 duration-300 ease-in-ease-out hover:opacity-80">
                 <Link href={`explore-items/?product_category=${item.title}&item=${el.name}`}><img src={el.img} className="w-fit block"/></Link> 
                </div>
              ))}
              </div>
            </div>
    )
}