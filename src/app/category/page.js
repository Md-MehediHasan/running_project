export async function generateMetadata({params,searchParams},parent){

    const previousImages = (await parent).openGraph?.images || []
    return({
      title:'Wisaale Shop||Category',
      openGraph:{
          images:['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpjRkfdV2CW7Sg2sT7e3zRmUyUUIOh5IW0bw&s']
      }
    })
  }

export default function Category(){

    return(
        <div>This is category page</div>
    )
}