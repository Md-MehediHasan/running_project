export function CartAddedItem(){
    return(
        <div className="flex items-center my-1 space-x-3 rounded-sm bg-green-600 shadow-md p-3">
        <div className="w-[20%]">
          <img src="/temp_pics/Bags.jpeg" />
        </div>
        <div className="w-[50%]">
          <h4 className="mb-2">Item Name</h4>
          <p className="mt-2">Quantity: 5</p>
        </div>
        <div className="w-[30%]">
          <button className="bg-black text-white rounded-sm px-3 py-2 duration-300 ease-in-ease-out hover:opacity-80">Remove</button>
        </div>
      </div>
    )
}