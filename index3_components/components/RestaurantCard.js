import resList from "../utils/mockData";
import  {CDN_LINK}  from "../utils/constants";

// const RestaurantCard = (props) => {
//     const {resName, cuisine} = props;
//     return (
//       <div className="res-card" style={styleCard}>
//         <img className="food" src="https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Corndogs-7832ef6.jpg?quality=90&resize=556,505"/>
//         <h3>{resName}</h3>
//         <h4>{props.cuisine}</h4>
//       </div>
//     )
// }
const styleCard = {
    backgroundColor: "bisque"
}

const RestaurantCard = (props) => {
    const {resData} = props;
    const {name, cuisines, cloudinaryImageId, avgRating} = resData?.info;
    return (
      <div className="w-56 m-2.5 pd-2 bg-purple-100 rounded-b-md">
        <img className="w-56 h-56 rounded-t-sm" src={CDN_LINK + cloudinaryImageId}/>
        <h2 className="pl-1.5 pt-2 font-medium">{name}</h2>
        <h4 className="pl-1.5">{cuisines[0]}</h4>
        <h4 className="pl-1.5 pb-2">{avgRating} star</h4>
      </div>
    )
}
// Higher Order Component

// Input = RestaurantCard => RestaurantCardWithLabel

export const WithLabel = (RestaurantCard) => {
    return (props) => {
      return(
        <div>
            <label className="absolute bg-black text-white px-1 rounded-l-sm">OPEN</label>
            <RestaurantCard {...props}/>
        </div>
      )
    }
}

export default RestaurantCard;