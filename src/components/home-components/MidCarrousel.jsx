'use client'
import * as React from "react"
 import { useState } from "react"
 import Link from "next/link"

import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
 

export default function MidCarousel({title,carouselItems}){
               return(
                 <div className=" my-4 w-full shadow-md border-2 p-2 mx-auto lg:p-8">
                    <h2 className="col-span-2 lg:col-span-4 text-2xl lg:text-4xl  text-bold m-3">{title}</h2>
                    <Carousel className="relative w-full lg:w-[80%] mx-auto">
                    <CarouselContent className=" -ml-1 lg:ml-44">
                           {carouselItems.map((item,index)=>(
                             <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                              <Link href={`/category/?products=${item.category}`} className="w-full lg:w-1/3 h-min-[200px] lg:h-1/4">
                                   <img src={item.img}  className="  w-full  block"/>
                              </Link>       
                             </CarouselItem>
                           ))}

                    </CarouselContent>
                    <div className="absolute top-1/2 left-16 ">
                       <CarouselPrevious />
                    </div>
                    <div className="absolute top-1/2 right-16">
                       <CarouselNext />
                    </div>
                  </Carousel>
                </div>
               )
}
 