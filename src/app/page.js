

import BestOfferProducts from "@/components/home-components/BestOfferProducts";
import CategoryFeatureSection from "@/components/home-components/CategoryFeatureSection";





export async function generateMetadata({params,searchParams},parent){

  const previousImages = (await parent).openGraph?.images || []
  return({
    title:'Wisaale Shop',
    openGraph:{
        images:['/temp_pics/Bags.jpeg',previousImages]
    }
  })
}

export default function App() {
  const products =[1,3,4,5]

  const FeaturedCategory=[
    {
      title:'Fashion Items',
      items:[
        {
          img:'temp_pics/t-shirt.jpeg',
          name:'t-shirt',
        },
        {
          img:'temp_pics/formal_dress.png',
          name:'formal-dress',
        },{
          img:'temp_pics/blue-tshirt.jpg',
          name:'blue-tshirt',
        },
        {
          img:'temp_pics/panjabi.jpeg',
          name:'panjabi',
        }
      ]  
    },
    {
      title:'Leather Products',
      items:[
        {
          img:'/temp_pics/Bags.jpeg',
          name:'bag',
        },
        {
          img:'/temp_pics/Shoes.jpeg',
          name:'shoe',
        },{
          img:'/temp_pics/Wallete.jpeg',
          name:'wallete',
        },
        {
          img:'/temp_pics/Belt.jpeg',
          name:'Belt'
        }
      ]  
    },
    {
      title:'Electronics',
      items:[
        {
          img:'/temp_pics/speaker.png',
          name:'speaker',
        },
        {
          img:'/temp_pics/smartwatch.jpg',
          name:'smartwatch',
        },{
          img:'/temp_pics/pendrive.jpg',
          name:'pendrive',
        },
        {
          img:'/temp_pics/headphone.jpeg',
          name:'headphone',
        }
      ]  
    },
    {
      title:'Kitchen Ware',
      items:[
        {
          img:'/temp_pics/kitchen_sink.jpg',
          name:'kitchen-sink',
        },
        {
          img:'/temp_pics/gas_stove.jpg',
          name:'gas_stove',
        },{
          img:'/temp_pics/non_stick.jpg',
          name:'non_stick',
        },
        {
          img:'/temp_pics/pressure_cooker.jpg',
          name:'pressure-cooker',
        }
      ]  
    }
  ]

  return (
      <section className="mt-1 lg:mt-5">  
        <CategoryFeatureSection FeaturedCategory={FeaturedCategory}/>
        <BestOfferProducts products={products}/>
      </section>
  );
}
