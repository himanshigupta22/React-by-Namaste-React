import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    // let btnName = "login";
    const [btnNameReact, setBtnNameReact] = useState("login");
    
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);

    // subscribing to the store using a selector
    const cartItems = useSelector((store) => store.cart.items)

    return (
        <div className="header" style={{backgroundColor: "Orange"}}>
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li className="font-bold">Cart({cartItems.length} items)</li>
                    <li><button className="login" onClick={() => {
                        // btnName = "logout";
                        // console.log(btnName); // does not reflect change in UI even though value has changed of btnName 
                        // bcoz header component does not refresh so we need state variable

                        // react keeps track over this btnNameReact
                        btnNameReact == "login" 
                        ? setBtnNameReact("logout") // it triggers the component and re-render the whole header component and when it re-render 
                        : setBtnNameReact("login")  // a new variable of btnNameReact is created with this passed value
                        console.log(btnNameReact);
                    }}>{btnNameReact}</button></li>
                    <li className="px-4">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;