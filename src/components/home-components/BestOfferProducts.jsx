export default function BestOfferProducts({products}){
    return(
        <div className="grid grid-cols-2 lg:grid-cols-4 mt-1 lg:mt-12 gap-4 lg:gap-x-8 p-2 ">
        <h2 className="col-span-2 lg:col-span-4 text-2xl lg:text-4xl text-bold mx-3">Best Offer Products</h2>
        <hr className="w-full border-[1.5px] mb-3 border-green-500 col-span-2 lg:col-span-4"/>
         {
            products.map(item=>(
                <div className="border-2 border-green-300 rounded-sm shadow-sm relative ">
                    <div className="relative">
                        <span className="absolute  top-0 left-0 p-2 bg-green-400 rounded-sm">30% Off</span>
                        <img src='/temp_pics/Bags.jpeg' className=" w-full p-2" />
                    </div>
                    <div className="mt-2 flex justify-center p-2">
                        <strike className="block px-2 py-1 bg-black text-white">300</strike> <span className="block bg-slate-300 text-green-500 px-2 py-1 mx-1">240</span>
                    </div>
                   
               </div>
            ))
         }
      </div>
    )
}