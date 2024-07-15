import { getProductsCategory } from "../../api/customers/dataFetching";
import ProductCatMenu from "./CategoryMenu";
import { endpoints } from "../../lib/endpoints";
export default async function CateMenuRenderer(){
  
     async function getProductsCategory(){
        const res =await fetch(`http://localhost:8000/${endpoints.PRODUCTS_CATEGORIES}`,{ cache: 'no-store' })
        return res.json()
    }
    // const productCategories= await getProductsCategory()
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

        return(
            <div className="absolute  w-[60vw] lg:w-1/5 ">
            <div className="triangle h-[20px] w-4 bg-slate-500"></div>
            <div className="rounded-sm  max-h-[40vh] -mt-2 overflow-y-auto d-block bg-slate-500 text-black p-4">
              {productCategories?<ProductCatMenu categories={productCategories}/>:<h2>No Category found</h2>}
            </div>
          </div>
        )
}