'use client'

import {useNavContext} from '../../contexts/NavContexts'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faClose} from "@fortawesome/free-solid-svg-icons";
import AnimatedPlaceholder from "./AnimatedPlaceholder";

export default function MobileSearch(){
     const {setMobileSearchVisible}=useNavContext()
    function mobileSearchHiddener(){
        setMobileSearchVisible(false)
      }
    return(
        <div className="absolute p-8 mt-3 left-0 w-full bg-gradient-to-tr text-green-500 from-slate-800 to-neutral-800">
          <div className="mt-8 text-right">
            <button onClick={mobileSearchHiddener} className="hover:bg-green-300 hover:text-white p-2 rounded-sm"><FontAwesomeIcon icon={faClose}/></button>
          </div>
          <div className="w-full mt-2">
          <AnimatedPlaceholder placeholderValue={['Search By Fashion Item','Search By Grocery','Search By Electronics','Search By Kitchen Ware']} type={'small-device-search'}/>
          </div>
        </div>
    )
}