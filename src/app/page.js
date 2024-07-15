
import CategoryFeatureSection from "@/components/home-components/CategoryFeatureSection";
import TargetFive from "@/components/home-components/TargetFive";
import MidCarousel from'../components/home-components/MidCarrousel'
import GeneralPolicy from '@/components/home-components/GeneralPolicy'







export async function generateMetadata({params,searchParams},parent){

  const previousImages = (await parent).openGraph?.images || []
  return({
    title:'Wisaale Shop',
    openGraph:{
        images:['https://media.istockphoto.com/id/1696167872/photo/aerial-view-of-forest-at-sunset-on-the-background-of-mountains-in-dolomites.jpg?s=1024x1024&w=is&k=20&c=sfRAnSjXlDxAAAMZ0ZtYG5GpetUCOqETKyVc0Oz6kyU=']
    }
  })
}

export default function App() {
  const products =[1,2,3,4,5,6,7]

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
        },
        
      ]  
    }
  ]

  const ItemForCarousel=[
        {
          img:'/temp_pics/kitchen_sink.jpg',
          name:'kitchen-sink',
        },
        {
          img:'/temp_pics/gas_stove.jpg',
          name:'gas_stove',
        },
        {
          img:'/temp_pics/non_stick.jpg',
          name:'non_stick',
        },
        {
          img:'/temp_pics/pressure_cooker.jpg',
          name:'pressure-cooker',
        },
        {
          img:'/temp_pics/speaker.png',
          name:'speaker',
        },
        {
          img:'/temp_pics/smartwatch.jpg',
          name:'smartwatch',
        },
        {
          img:'/temp_pics/pendrive.jpg',
          name:'pendrive',
        },
        {
          img:'/temp_pics/headphone.jpeg',
          name:'headphone',
        }
  ]

  return (
      <section className="mt-1 lg:mt-5">  
        <CategoryFeatureSection FeaturedCategory={FeaturedCategory}/>
        <TargetFive products={products} headerTitle={'Best Offer Products'} BrowseSimilar/>
        <TargetFive products={products} headerTitle={'Best Selling Products'} BrowseSimilar animation/>
         <MidCarousel carouselItems={ItemForCarousel} title={'For You'}/>
         <GeneralPolicy />
      </section>
  );
}
