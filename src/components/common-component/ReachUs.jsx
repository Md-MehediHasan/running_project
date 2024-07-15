import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot,faEnvelope,faHandshake } from "@fortawesome/free-solid-svg-icons"
import React from "react"

export default function ReachUs(){
    const reachInfo=[
        {
         text:'To be a seller! Email Us',
         info:'sales@wisaale-shop.com'
        },
        {
         text:'To be an investor! Email Us',
         info:'finance@wisaale-shop.com'
        },
        {
        text:'To report any problem! Email Us',
        info:'report@wisaale-shop.com'
        }
    ]

    const address=[
        {
            info_name:'Location',
            info:'Manda,Daskhin Mughdha,Dhaka-1214',
            icon:faLocationDot
        },
        {
            info_name:'Email',
            info:'admin@wisaale-shop.com',
            icon:faEnvelope
        }
    ]


    return(
        < >
                  <div className="w-[40%] space-y-2 items-end">
                       <img src="/icons/ws_logo.png" className="w-1/4 mx-auto block "/>
                       <div className="text-xl text-center  text-green-600">Wisaale Shops</div>
                    
                  </div>
                  <h4 className="my-2 text-2xl text-black text-center lg:text-left text-semibold">Reach Us</h4>
                  {
                    address.map((item,index)=>(
                        <li key={index} className="flex w-full">
                            <div className="w-[8%] text-xl">
                                <FontAwesomeIcon icon={item.icon}/>
                            </div>
                            <div className="w-[92%] space-y-1">
                                <span className="block text-xl text-semibold">{item.info_name}</span>
                                <span className="block text-sm">{item.info}</span>
                            </div>
                        </li>
                    ))
                  }
                  {
                    reachInfo.map((item,index)=>(
                        <li className="flex w-full" key={index}>
                            <div className="w-[8%] text-xl">
                                <FontAwesomeIcon icon={faHandshake}/>
                            </div>
                            <div className="w-[92%] mx-2 lg:mx-0">
                                <span className="block">{item.text}</span>
                                <b className="block">{item.info}</b>
                                
                            </div>
                        </li>
                    ))
                  }

               </>
    )
}