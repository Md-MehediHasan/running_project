'use client'

import React from "react"
import Link from "next/link"
export default function FooterSection({title,LinkArray}){
    return(
        <React.Fragment>
            <h4 className="my-1 text-2xl text-black text-semibold">{title}</h4>
                  {
                      LinkArray.map((item,index)=>(
                          <Link href={item.href} key={index} className="block hover:underline text-center">{item.title}</Link>
                      ))
                  }
        </React.Fragment>
    )
}