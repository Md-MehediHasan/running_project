'use client'

import { useNavContext } from "@/contexts/NavContexts"
import { faAngleUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function ScrollToTop(){
    const {isSticky}=useNavContext()
     function scrollToTop(){
        let body=document.querySelector('body')
        body.scrollTo(0,0)
      }
    return(
        <div className={`absolute top-80 cursor-pointer hover:opacity-80 right-4 ${isSticky?'block':'hidden'} p-2 bg-green-500 rounded-sm`} style={{zIndex:50}} onClick={scrollToTop}>
        <FontAwesomeIcon icon={faAngleUp} size="md" />
        </div> 
    )
}