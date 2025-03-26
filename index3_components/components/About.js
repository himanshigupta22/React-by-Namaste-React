import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

// class based component does not have hooks
class About extends Component{
    constructor(props){
    super(props)
      console.log("parent constuctor")
    }

    componentDidMount(){
        console.log("parent componentDidMount")
    }

    render(){
        console.log("parent render")
        return(
            <div>
                <h1>About</h1>
                <div>
                    loggedInUser:
                    <UserContext.Consumer>
                        {({loggedInUser}) => <h1 className="font-bold">{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
                <p>This is a about section</p>
                <UserClass name={"Himanshi "} />
                <UserClass name={"Shiv "} />
            </div>
        )
    }
}

// first constructor called and then render method and then componentDidMount called
// componentDidMount is used to make API called (for render API call again render)

// parent constuctor
// parent render
// Himanshi child constructor
// Himanshi child render
// Shiv child constructor
// Shiv child render
// <DOM UPDATED - IN SINGLE BATCH>
// Himanshi child componentDidMount
// Shiv child componentDidMount
// parent componentDidMount

// react lifecycle diagram

// const About = () => {
//     return(
//         <div>
//             <h1>About</h1>
//             <p>This is a about section</p>
//             <User name={"Himanshi (function)"} />
//             <UserClass name={"Himanshi (class)"} />
//         </div>
//     )
// }
export default About;