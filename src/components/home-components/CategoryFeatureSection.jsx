import { FeatureShow } from "./FeatureShow"
export default function CategoryFeatureSection({FeaturedCategory}){
    return(
        <div className="grid grid-cols-2 lg:grid-cols-4 mt-1 lg:mt-12 gap-4 lg:gap-x-8 p-2 ">
        <h2 className="col-span-2 lg:col-span-4 text-2xl lg:text-4xl text-bold mx-3">Feature Categories</h2>
        <hr className="w-full border-[1.5px] mb-3 border-green-500 col-span-2 lg:col-span-4"/>
        {
          FeaturedCategory.map(item=>(
           <FeatureShow item={item}/>
          ))
        }
      </div>
    )
}