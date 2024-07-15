'use client'

import { createContext, useContext, useState } from "react";

const NavContext=createContext(null)

import React from 'react'

function NavContexts({children}) {
const [sideBarExpanded,setSidebarExpanded]=useState(false)
const [isUserMenuVisible, setIsuserMenuVisible]=useState(false)
const [isMobileSearchVisible,setMobileSearchVisible]=useState(false)
const [isCartVisible,setIsCartVisible]=useState(false)
const [isSticky,setIsSticky]=useState(false)
const [scrollHeight,setScrollHeight]=useState(0)
const [isCatMenuVisible,setIsCatMenuVisible]=useState(false)
const [isLangSelectorOpen,setIsLangSelectorOpen]=useState(false)


  return (
     <NavContext.Provider value={{sideBarExpanded,setSidebarExpanded,isUserMenuVisible, setIsuserMenuVisible,isCartVisible,setIsCartVisible,isCatMenuVisible,setIsCatMenuVisible,isLangSelectorOpen,setIsLangSelectorOpen,isMobileSearchVisible,setMobileSearchVisible,isSticky,setIsSticky,scrollHeight,setScrollHeight}}>
            {children}
     </NavContext.Provider>
  )
}

export default NavContexts
export const useNavContext=()=>{
    return useContext(NavContext)
}