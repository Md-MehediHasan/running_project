import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function TextAnimator(values,recieverFunc){
  let currArrayIndex=0
  let currentStrIndex=0
  setInterval(()=>{
    if(currentStrIndex < values[currArrayIndex]?.length){
      currentStrIndex +=1
      recieverFunc(values[currArrayIndex].slice(0,currentStrIndex))
     
    }
    if(currentStrIndex==values[currArrayIndex]?.length){
      currentStrIndex=0
      if(currArrayIndex ==values?.length-1){
        return currArrayIndex = 0
      }
      else{
       return  currArrayIndex +=1
      }
    }
  },200)
 
}
