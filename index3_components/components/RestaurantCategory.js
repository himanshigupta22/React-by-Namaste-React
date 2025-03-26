import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {
    // const [showItems, setShowItems] = useState(false);
    const handleClick = () => {
    //    setShowItems(!showItems);
       setShowIndex()
    }
    
    return (
        <div className=" w-6/12 mx-auto bg-gray-50 p-4 my-4 text-center shadow-md">
            {/* Header */}
            <div className="flex justify-between cursor-pointer"
                 onClick={handleClick}>
              <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
              <span> ⬇️ </span>
            </div>
            <div>
                {/* Accordian Body */}
                {showItems && <ItemList items={data.itemCards} dummy={dummy}/>}

            </div>
        </div>
    )
}
export default RestaurantCategory;