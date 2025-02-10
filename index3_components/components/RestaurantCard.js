import { CDN_LINK } from "../utils/constants";

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
    const {name, cuisines, cloudinaryImageId, avgRatingString} = resData?.info;
    return (
      <div className="res-card" style={styleCard}>
        <img className="food" src={CDN_LINK + cloudinaryImageId}/>
        <h3>{name}</h3>
        <h4>{cuisines[0]}</h4>
        <h4>{avgRatingString}</h4>
      </div>
    )
}
export default RestaurantCard;