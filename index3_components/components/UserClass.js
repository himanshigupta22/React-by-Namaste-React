import React from "react";

// class based component - is a class that extends React.Component and has a render method which returns some piece of jsx
// as instance of a class is created constructor is called 
class UserClass extends React.Component{
    constructor(props){
       super(props);
       // state variable as an object
       this.state = {
        count: 0,
        count2: 2,
        userInfo: {
            name: "Dummy",
            location: "Default"
        }
       }
       
    //    console.log(props)
       console.log(this.props.name + "child constructor")
    }

    // componentDidMount(){
    //     console.log(this.props.name + "child componentDidMount");
    // }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/himanshigupta22");
        const json = await data.json();
      
        this.setState({
            userInfo: json
        })
        // we have to clear this setInterval bcoz react is a SPA only components changes, setInterval will continuosly call
        this.timer = setInterval(() => {
            console.log("hello")
        }, 1000);

        console.log(this.props.name + "child componentDidMount");
    }

    componentDidUpdate(prevProps, prevState){
        // this is painful code instead of this we dependancy array in useEffect [count]
        if(this.state.count != prevState || this.state.count != prevState){
            // code
        }
        console.log("componentDidUpdate")
    }
    // this is called when we our leaving our page
    componentWillUnmount(){
        clearInterval(this.timer)
        console.log("componentWillUnmount");
    }

    render(){
        console.log(this.props.name + "child render");
        return(
        <div className="user-card">
            <h2>Count: {this.state.count}</h2>
            <button
            onClick={() => {
                this.setState({
                    count: this.state.count + 1,
                    count2: this.state.count + 1
                })
            }}
            >
            count increase
            </button>
            <h2>Name: {this.props.name}</h2>
            <h2>Name: {this.state.userInfo.name}</h2>
            <h2>Location: {this.state.userInfo.location}</h2>
          
        </div>
        )
    }
}
export default UserClass;