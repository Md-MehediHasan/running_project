import { FeatureShow } from "./FeatureShow"
export default function CategoryFeatureSection({FeaturedCategory}){
    return(
        <div className="grid grid-cols-2 lg:grid-cols-4 mt-1 lg:mt-12 shadow-md gap-1 lg:gap-4 p-4 p-2 ">
        <h2 className="col-span-2 lg:col-span-4 text-2xl lg:text-4xl text-bold m-3">Feature Categories</h2>
       
        {
          FeaturedCategory.map((item,index)=>(
           <FeatureShow key={index} item={item}/>
          ))
        }
      </div>
    )
}