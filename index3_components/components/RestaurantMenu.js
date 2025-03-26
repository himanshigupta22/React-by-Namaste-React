
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    // const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();
    // console.log(resId)

    const [showIndex, setShowIndex] = useState(null);

    const dummy = "Dummy data"

    // custom hook
    const resInfo = useRestaurantMenu(resId);

    // useEffect(() => {
    //     fetchMenu();
    // }, []);

    // const fetchMenu = async () => {
    //     const data = await fetch(MENU_API + resId);
    //     const json = await data.json();
    //     console.log(json);

    //     setResInfo(json.data);
       
    // }

    if(resInfo === null){
        return <ShimmerUI />
    }

    const {name, cuisines, costForTwoMessage} = resInfo.cards[2].card.card.info;

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

   
    // console.log(resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards);

    const categories = 
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"            
        );
    // console.log(categories)

    return(
        <div className="menu">
            <h1 className="font-bold my-2 text-2xl text-center">{name}</h1>
            <h2 className="text-bold text-center">{cuisines.join(", ")} - {costForTwoMessage}</h2>
            {/*categories accordians*/}
            {categories.map((category, index) => (
                // Lifting the state up
                // controlled component
                <RestaurantCategory 
                key={category?.card?.card.categoryId} 
                data={category?.card?.card}
                showItems={index === showIndex ? true : false}
                setShowIndex={() => setShowIndex(prevIndex => prevIndex === index ? null : index)}
                dummy={dummy}
                />
            )  
            )
            }
        </div>
    )
}
export default RestaurantMenu;