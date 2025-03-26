import RestaurantCard, {WithLabel} from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect, useContext } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    // Whenever state variables update, reacte triggers a reconcillation cycle(re-renders the component)
    console.log("Body rendered")

    // Local State Variable - superpowerful variable   
    //  const [listOfRestaurant, setListOfRestaurant] = useState([
    //     {
    //         info: {"id": "1003414",
    //         "name": "Pizza Hut",
    //         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/5/dc74a4b7-8d63-4eb7-91c9-048973c2cc99_1003414.jpg",
    //         "cuisines": [
    //           "Pizzas"
    //         ],
    //         "avgRating": 4.1,
    //         }
    //     },
    //     {
    //         info: {"id": "1003416",
    //         "name": "Pizza Hut",
    //         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/5/dc74a4b7-8d63-4eb7-91c9-048973c2cc99_1003414.jpg",
    //         "cuisines": [
    //         "North Indian",
    //         "South Indian",
    //         "Indian",
    //         "Chinese"
    //         ],
    //         "avgRating": 4.2,
    //         }
    //     },
    //     {
    //         info: {"id": "1003417",
    //         "name": "Pizza Hut",
    //         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/5/dc74a4b7-8d63-4eb7-91c9-048973c2cc99_1003414.jpg",
    //         "cuisines": [
    //         "South Indian"
    //         ],
    //         "avgRating": 3.9,
    //         }
    //     },
    //     {
    //         info: {"id": "1003418",
    //         "name": "Pizza Hut",
    //         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/5/dc74a4b7-8d63-4eb7-91c9-048973c2cc99_1003414.jpg",
    //         "cuisines": [
    //         "Indian",
    //         "Chinese"
    //         ],
    //         "avgRating": 4.7,
    //         }
    //     },{
    //         info: {"id": "1003419",
    //         "name": "Pizza Hut",
    //         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/5/dc74a4b7-8d63-4eb7-91c9-048973c2cc99_1003414.jpg",
    //         "cuisines": [
    //           "Chinese"
    //         ],
    //         "avgRating": 3.9,
    //         }
    //     }
    // ]);

    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredListOfRestaurant, setFilteredListOfRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");

    const RestaurantCardWithLabel = WithLabel(RestaurantCard);

    const {loggedInUser, setUserName} = useContext(UserContext)

    // state variable as soon as find diff immediatelly appilied reconcilation algorithm, automatically updates the page

    // Normal JS variable
    // let listOfRestaurant = [
    //     {
    //         info: {"id": "1003414",
    //         "name": "Pizza Hut",
    //         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/5/dc74a4b7-8d63-4eb7-91c9-048973c2cc99_1003414.jpg",
    //         "cuisines": [
    //           "Pizzas"
    //         ],
    //         "avgRating": 4.1,
    //         }
    //     },
    //     {
    //         info: {"id": "1003416",
    //         "name": "Pizza Hut",
    //         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/5/dc74a4b7-8d63-4eb7-91c9-048973c2cc99_1003414.jpg",
    //         "cuisines": [
    //         "North Indian",
    //         "South Indian",
    //         "Indian",
    //         "Chinese"
    //         ],
    //         "avgRating": 4.2,
    //         }
    //     },
    //     {
    //         info: {"id": "1003417",
    //         "name": "Pizza Hut",
    //         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/5/dc74a4b7-8d63-4eb7-91c9-048973c2cc99_1003414.jpg",
    //         "cuisines": [
    //         "South Indian"
    //         ],
    //         "avgRating": 3.9,
    //         }
    //     },
    //     {
    //         info: {"id": "1003418",
    //         "name": "Pizza Hut",
    //         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/5/dc74a4b7-8d63-4eb7-91c9-048973c2cc99_1003414.jpg",
    //         "cuisines": [
    //         "Indian",
    //         "Chinese"
    //         ],
    //         "avgRating": 4.7,
    //         }
    //     },{
    //         info: {"id": "1003419",
    //         "name": "Pizza Hut",
    //         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/5/dc74a4b7-8d63-4eb7-91c9-048973c2cc99_1003414.jpg",
    //         "cuisines": [
    //           "Chinese"
    //         ],
    //         "avgRating": 3.9,
    //         }
    //     }
    // ]

    // useEffect calls after the Body components rendering is done
    // if no dependency array => useEffect is called on every render
    // if dependency array is empty [] => useEffect is called on initial render(just once)
    // if dependency array is [btnNameReact] => useEffect is called every time btnNameReact is updated
    useEffect(() => {
        console.log("useEffect is called")
       fetchData();
    }, []);

    const fetchData = async () => {
        try{
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json = await data.json();
            console.log(json.data.cards[4].card.card.
                gridElements.infoWithStyle.restaurants

                );
            console.log(json);
            
           setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); // optional chaining
           setFilteredListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        } catch(error){
            console.error("Error fetching data:", error);
        }
    }
    // console.log("Current state:", listOfRestaurant); 
    // Conditional rendering - rendering on basis of conditions

    // hooks are at the start return
    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false){
        return(
            <h1>You are offline</h1>
        )
    }   

    if(listOfRestaurant.length === 0){
       return (
        <ShimmerUI/>
       )
    }
   

    return(
        <div>
            <div>
                <div>
                    <input type="text" className="border-1 mt-6 ml-6 py-1.5 rounded-l-sm" value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value)
                    }}
                    />
                    <button className="border-1 border-blue-800 px-5 py-1.5 bg-blue-800 text-blue-50 rounded-r-sm"
                      onClick={
                        () => {
                            const filteredRes = listOfRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            setFilteredListOfRestaurant(filteredRes);
                        }
                      }
                    >Search</button>
                </div>
                <button className="border-1 py-1.5 ml-6 mt-5 px-5 rounded-sm bg-fuchsia-200 text-gray-800 " 
                onClick={() => {
                    // listOfRestaurant = listOfRestaurant.filter(res => res.info.avgRating > 4);

                    const filteredList = listOfRestaurant.filter(res => res.info.avgRating > 4);
                    setFilteredListOfRestaurant(filteredList);
                   
                }
                }
                >Top Rated Restaurants</button>
                <label className="m-5">Username: </label>
                <input className="border p-1"
                  value={loggedInUser}
                  onChange={(e) => setUserName(e.target.value)}
                />
            </div>
            <div className="res-Container">
                {/* <RestaurantCard 
                 resName="KFC"
                 cuisine="Fast Food"
                /> */}

                {/* <RestaurantCard 
                 resData = {resList[0]}
                /> */}

                {/* {listOfRestaurant.map(restaurant => <RestaurantCard key={restaurant.info.id} resData = {restaurant} />)} */}
                
                {/* {filteredListOfRestaurant.map(restaurant => 
                <RestaurantCard key={restaurant.info.id} resData = {restaurant} />)} */}

                {filteredListOfRestaurant.map(restaurant => 
                <Link key={restaurant.info.id} 
                      to={"/restaurants/"+restaurant.info.id}>

                        {restaurant.info.isOpen ? (
                            <RestaurantCardWithLabel resData = {restaurant} />
                        ) : (
                            <RestaurantCard resData = {restaurant} />
                        )}   
        
                </Link>)}

            </div>
        </div>
    )
}
export default Body;