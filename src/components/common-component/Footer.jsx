import Link from "next/link"
import ReachUs from "./ReachUs"
import FooterSection from "./FooterLinks"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter"

export default function Footer(){
        const aboutLinks=[
            {
                title:'About',
                href:'know-us/about'
            },
            {
                title:'Mission & Vision',
                href:'know-us/mission-vision'
            },
            {
                title:'Social Responsibilities',
                href:'know-us/social-responsibility'
            }
        ]

        const salesLinks=[
            {
                title:'My Shop',
                href:'sales/manage/my-shop'
            },
            {
                title:'How to Operate the shop',
                href:'sales/know/how-to-run'
            },
            {
                title:'Terms & condition',
                href:'sales/know/terms-conditions'
            },
            {
                title:'Way to get profited',
                href:'sales/know/benifits'
            },
        ]
        const customerLinks=[
                {
                    title:'Terms & conditions',
                    href:'customer/terms-conditions'
                },
                {
                    title:'Privacy Policy',
                    href:'customer/privacy-policy'
                },
                {
                    title:'Return Policy',
                    href:'customer/return-policy'
                },
                {
                    title:'Refund Policy',
                    href:'customer/refund-policy'
                }
        ]
    
    return(
        <footer className="bg-slate-200 p-5">
           <div className="w-full lg:w-[90%] mx-auto">
           <div className="block lg:grid  lg:grid-cols-12 "> 
                <div className='lg:col-span-5 w-full space-y-3 p-3 mx-auto'>
                   <ReachUs />
                </div>
              
               <div class='col-span-3 text-center ' >
                  <div className="my-5">
                     <FooterSection LinkArray={aboutLinks} title={'Know About Us'}/>
                  </div>
                   <div className="my-5">
                     <FooterSection LinkArray={salesLinks} title={'Sales Links'}/>
                   </div>
                   <div className="my-5">
                     <FooterSection LinkArray={customerLinks} title={'Customers Want'}/>
                   </div>
               </div>
               <div class='col-span-4 text-center' >
                  <div className="my-5 w-[60%] mx-auto">
                     <h4 className="my-1 text-2xl text-black text-semibold">Follow Us On</h4>
                     <div className="grid grid-cols-4">
                        <div className="text-blue-800 w-full text-2xl">
                            <a href='/'><FontAwesomeIcon icon={faFacebook}/></a>
                        </div>
                        <div className="text-blue-400 text-2xl">
                        <a href='/'><FontAwesomeIcon icon={faTwitter}/></a> 
                        </div>
                        <div className='text-blue-900 text-2xl'>
                          <a href='/'> <FontAwesomeIcon icon={faLinkedin}/> </a> 
                        </div>
                        <div className="text-red-600 text-2xl">
                        <a href='/'> <FontAwesomeIcon icon={faInstagram}/> </a> 
                        </div>
                     </div>
                   </div>
               </div>
              
            </div>
           </div>
        </footer>
    )
}