import RestaurantCard from "./RestaurantCard";

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-Container">
                {/* <RestaurantCard 
                 resName="KFC"
                 cuisine="Fast Food"
                /> */}

                {/* <RestaurantCard 
                 resData = {resList[0]}
                /> */}

                {resList.map(restaurant => <RestaurantCard key={restaurant.info.id} resData = {restaurant} />)}
                
            </div>
        </div>
    )
}
export default Body;