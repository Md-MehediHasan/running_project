'use client'

import { useNavContext } from "@/contexts/NavContexts";
import Link from "next/link";
import { useEffect, useState } from "react";
import ProductCatMenu from "./CategoryMenu";
import AnimatedPlaceholder from "./AnimatedPlaceholder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp, faCartShopping, faClose, faLocationDot, faMessage, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";


import PreferedLanguageSelector from "./PreferedLangSelector";
import { CartAddedItem } from "./CartAddedItem";


const Headers = () => {
  const {isUserMenuVisible, setIsuserMenuVisible, isMobileSearchVisible,setMobileSearchVisible, isCartVisible, setIsCartVisible,isSticky,setIsSticky,scrollHeight,setScrollHeight } = useNavContext()
  const [isCatMenuVisible,setIsCatMenuVisible]=useState(false)
  const [isLangSelectorOpen,setIsLangSelectorOpen]=useState(false)
 
  
 
  const cartItems=[1,2,3,4,5]
 
  

  const usersMenu=[
  {
    title:'Track Order',
    href:'/order-track',
    icon:faLocationDot,
  },
  {
    title:'Feedback',
    href:'/feedback',
    icon:faMessage
  },
  {
    title:'Register/Login',
    href:'/user-entry',
    icon:faUser
  },
  ]

  const productCategories=[
    { id:1,
      title:'Fashion Items',
      sub_cat:[
        {
          title:'T-shirt',
          href:'/fashion-items/t-shirt'
        },
        {
          title:'Pant',
          href:'/fashion-items/pants'
        },
        {
          title:'Formal Dress',
          href:'/fashion-items/formal-dress'
        },
        {
          title:'Trousers',
          href:'/fashion-items/trousers'
        },
        {
          title:'Panjabi',
          href:'/fashion-items/panjabi'
        }
        
      ]
    },
    { id:2,
      title:'Electronics',
      sub_cat:[
        {
          title:'Phone Cover',
          href:'/electronics/phone-cover'
        },
        {
          title:'Earphone',
          href:'/electronics/earphone'
        },
        {
          title:'Charger',
          href:'/electronics/charger'
        },
        {
          title:'Speaker',
          href:'/electronics/Speaker'
        },
        {
          title:'Smart Watch',
          href:'/electronics/phone-cover'
        }
        
      ]
    },
    {id:3,
      title:'Beauty & Health',
      sub_cat:[
        {
          title:'Hair Oil',
          href:'/beauty&health/hair-oil'
        },
        {
          title:'Face Wash',
          href:'/beauty&health/face-wash'
        },
        {
          title:'Perfume',
          href:'/beauty&health/hair-oil'
        },
         
      ]
    },
    {
      id:4,
      title:'Kitchen Ware',
      sub_cat:[
        {
          title:'Fry Pan',
          href:'/kitchen-ware/fry-pan'
        },
        {
          title:'Induction Coocker',
          href:'/kitchen-ware/induction-coocker'
        },
        {
          title:'Gas Stove',
          href:'/kitchen-ware/gas-stove'
        },
         
      ]
    },
  ]

  function mobileSearchVisibler(){
    setMobileSearchVisible(true)
  }
  function mobileSearchHiddener(){
    setMobileSearchVisible(false)
  }

 
 async function  CartVisibler(){
    setIsCartVisible(true)
  }
  
  function CartHiddener(){
    setIsCartVisible(false)
  }
  function userMenuToggler(){
    setIsuserMenuVisible((prev)=>!prev)
  }

  function handleScroll(e){
      setScrollHeight(e.target.scrollTop)
  }

 useEffect(()=>{
  let header=document.querySelector('header')
  let rect=header.getBoundingClientRect()
  let rectHeight=rect.height
  if(rectHeight-scrollHeight<=10){
    setIsSticky(true)
  }
  else{
    setIsSticky(false)
  }

 },[scrollHeight])



  useEffect(()=>{
      const body=document.querySelector('body')
      body.addEventListener('scroll',handleScroll)
      return ()=>{
        body.removeEventListener('scroll',handleScroll)
      }
  },[])
 



  return (
    <header className={`${isSticky?'sticky-nav':"relative"} max-w-screen max-h-screen top-0 lg:h-20 text-white`}>
      <nav className='p-3 lg:p-1 md:px-8 grid grid-cols-1 gap-y-1  z-50  items-center bg-gradient-to-tr from-slate-800 to-neutral-800 shadow-md text-md relative w-screen'>
        {/* Upper row */ }
        <div className='hidden  lg:grid lg:grid-cols-12 items-center text-sm w-full'>
          <div className='grid col-span-4 justify-self-start'>
            <li className='text-white  p-2 bg-zinc-400 list-none'>Get 30% off in all products</li>
          </div>
          <div className='grid md:col-start-5 lg:col-start-9  grid-cols-3 md:col-span-2 lg:col-span-5'>
            {usersMenu.map(item=>(
                 <Link href={item.href} className='flex items-center space-x-2 cursor-pointer'>
                  <div><FontAwesomeIcon icon={item.icon}/></div><div>{item.title}</div></Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-12 gap-x-8 text-green-500 items-center ">
          {/* Logo */}
            <Link href={'/'} className="list-none  col-span-2"><img src="/icons/logo.svg" className="w-full mx-2 md:w-1/4"/></Link>
            {/* Product category */}
            <div className="select-none " onMouseOver={()=>setIsCatMenuVisible(true)} onMouseOutCapture={()=>setIsCatMenuVisible(false)}>
              <li className="list-none flex space-x-1 items-center cursor-pointer" ><div>Categories</div><FontAwesomeIcon icon={isCatMenuVisible?faCaretUp:faCaretDown} size="md"/></li>
              {isCatMenuVisible &&
                <div className="absolute  w-[50vw] lg:w-1/5 ">
                  <div className="triangle h-[20px] w-4 bg-slate-500"></div>
                  <div className="rounded-sm  max-h-[40vh] -mt-2 overflow-y-auto d-block bg-slate-500 text-black p-4">
                    <ProductCatMenu categories={productCategories}/>
                  </div>
                </div>
              }
            </div>
            {/* Animated placeholder */}
            <div className="col-span-8 col-start-8 lg:col-start-6  lg:gap-16 grid grid-cols-12 items-center">
              <div className=" hidden lg:block col-span-7">
                 <AnimatedPlaceholder className='' placeholderValue={['Search By Fashion Item','Search By Grocery',' Search By Electronics','Search By Kitchen Ware']} type={'large-screen-search'}/>
              </div>
              <div className="grid grid-cols-5  lg:grid-cols-2 gap-12 lg:gap-40 ">
                {/* Mobile view icon */}
                <div className="block lg:hidden" >
                  <FontAwesomeIcon icon={faSearch} onClick={mobileSearchVisibler}/>
                  </div>
                {/* Prefered Language Selector */}
              <div className="hidden lg:block" onMouseOver={ () => setIsLangSelectorOpen(true) } onMouseOutCapture={ () => setIsLangSelectorOpen(false) }>

                <li className="list-none  flex space-x-1 items-center cursor-pointer" ><div>BN/EN</div>  <FontAwesomeIcon icon={ isLangSelectorOpen ? faCaretUp : faCaretDown } size="md" /></li>

                { isLangSelectorOpen &&
                  <div className="absolute">
                    <div className="triangle h-[20px] w-4 bg-slate-500"></div>
                    <PreferedLanguageSelector />
                  </div>
                }

              </div>
              {/* Cart */}
              <div className="">
                <li className="list-none"><FontAwesomeIcon icon={faCartShopping} onClick={CartVisibler} size="md"/></li>
                { isCartVisible && <div className="absolute p-8 mt-0 z-50 right-0 -top-3 w-full lg:w-1/4 h-[100vh] mt-3 bg-slate-800">
                  <div className="absolute right-8 px-2 py-1 duration-300 ease-in-ease-out hover:bg-white text-green-500 lg:right-8 top-4 rounded-sm">
                    <button><FontAwesomeIcon icon={ faClose } onClick={ CartHiddener } /></button>
                  </div>
                  { cartItems && cartItems.length > 0 ?
                    <div className="mt-5">
                      <h2 className="my-3 text-center">All the product You have added</h2>
                      { cartItems.map(item => (
                        <CartAddedItem />
                      )) }
                    </div> : <h2 className="h-[90vh] flex  items-center w-full justify-center ">
                      <span className="text-center block text-xl">No Item in the cart</span>
                    </h2>
                  }
                </div> }
              </div>
          
          {/* Mobile user menu */}
              <div className="block lg:hidden">
                <li className="list-none"><FontAwesomeIcon icon={faUser} size="md" onClick={userMenuToggler}/></li>
                {isUserMenuVisible && <div className="absolute right-0 mt-4 rounded-sm shadow-sm bg-gradient-to-tr from-slate-800 to-neutral-800 text-white  shadow-md">
                  {usersMenu.map(item=>(
                    <li className="list-none p-2 shadow-sm  border-b-2 mt-1 border-b-slate-600"><Link href={item.href}className="flex items-center space-x-2">
                      <div><FontAwesomeIcon icon={item.icon}/></div> 
                     <div>{item.title}</div> 
                      </Link></li>
                  ))}
                </div>}
              </div>
            </div>

            </div>
        </div>
        {/* Mobile searchbar */}
          {isMobileSearchVisible &&<div className="absolute p-8 mt-3 left-0 w-full bg-gradient-to-tr text-green-500 from-slate-800 to-neutral-800">
          <div className="mt-8 text-right">
            <button onClick={mobileSearchHiddener} className="hover:bg-green-300 hover:text-white p-2 rounded-sm"><FontAwesomeIcon icon={faClose}/></button>
          </div>
          <div className="w-full mt-2">
          <AnimatedPlaceholder placeholderValue={['Search By Fashion Item','Search By Grocery','Search By Electronics','Search By Kitchen Ware']} type={'small-device-search'}/>
          </div>
        </div>}

          {/* Cart item show */}

        
      </nav>
     
    </header>
  )
}
export default Headers