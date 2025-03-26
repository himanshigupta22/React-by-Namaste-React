import  {CDN_LINK} from "../utils/constants";

const ItemList = ({ items, dummy }) => {
    // console.log(items)
    // console.log("k")

    console.log(dummy)

    return (
        <div>
            {items.map((item) => {
                return (
                <div key={item.card.info.id}
                    className="p-2 m-2 border-gray-400 border-b-2 text-left"
                >
                 <div className="text-black">
                    <span>{item.card.info.name}</span> - ₹<span>{item.card.info.price ? (item.card.info.price)/100 : (item.card.info.defaultPrice)/100}</span>
                 </div>
                 <div className="flex justify-between">
                   <p className="text-xs py-4 w-9/12 mr-3">{item.card.info.description}</p>
                   <div className="w-3/12">
                      <label className="absolute bg-black px-1 text-white rounded-b-md">ADD+</label>
                      <img src={CDN_LINK+item.card.info.imageId}/>
                   </div>
                 </div>
                </div>
                )
            })}
        </div>
    )
}
export default ItemList;