'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { TextAnimator } from "@/lib/utils";
import Link from "next/link";

export default function AnimatedPlaceholder({ placeholderValue, type }) {
    const [phValue, setPhValue] = useState()
    const [query, setQuery] = useState('')


    useEffect(() => {
        TextAnimator(placeholderValue, setPhValue)
    }, [])


    return (
        <div className="flex items-center border-green-500 border-2 rounded-sm">
            <input type="text" placeholder={ phValue } className="w-[98%] mx-2 bg-transparent border-none outline-none" value={ query } onChange={ (e) => setQuery(e.target.value) } />
            <Link href={ query != '' ? `/search/?product_category=${query}&type=${type}` : {} } className="bg-green-500 text-white p-1 " >
                <FontAwesomeIcon icon={ faMagnifyingGlass } />
            </Link>
        </div>
    )
}