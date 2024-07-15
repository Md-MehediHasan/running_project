'use client'
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

export default function ProductCatMenu({ categories }) {
    const [openedMenus, setOpenMenus] = useState([])

    function subMenuOpener(id) {
        setOpenMenus(prev => [...prev, id])
    }


    function subMenuHiddener(id) {
        setOpenMenus((prev) => prev.filter(item => item != id))
    }


    function IsOpened(id) {
        return openedMenus.includes(id)
    }



    return (
        <>
            { categories.map((item,index) => (
                <div key={index} className="select-none relative">
                    <li>{ item.title } <span className="absolute right-2 cursor-pointer"><FontAwesomeIcon icon={ IsOpened(item.id) ? faMinus : faPlus } size="sm" onClick={ IsOpened(item.id) ? () => subMenuHiddener(item.id) : () => subMenuOpener(item.id) } /></span></li>
                    { IsOpened(item.id) &&
                        <div className="px-4">
                            { item.sub_cat.map(item => (
                                <li className="list-square px-4"><Link className="hover:opacity-80 duration-300 transition:ease-in-ease-out" href={ item.href }>{ item.title }</Link></li>
                            )) }
                        </div>
                    }
                </div>
            ))
            }
        </>
    )
}