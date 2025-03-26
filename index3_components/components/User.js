import { useEffect, useState } from "react";

const User = ({name}) => {
    // behind the scene one object is created for all these state variable
    const [count, setCount] = useState(0);
    const [count2] = useState(2);

    useEffect(() => {
       console.log("useEffect")
       const timer = setInterval(() => {
        console.log("hello")
       }, 1000)

       // this return Unmount the component like componentWillUnmount of class based component
       return (() => {
        clearInterval(timer)
        console.log("useEffect return")
       })
    },[])

    return (
        <div className="user-card">
            <h2>Count: {count}</h2>
            <h2>Count: {count2}</h2>
            <h2>Name: {name}</h2>
            <h3>Address: Jamshedpur</h3>
        </div>
    )
}
export default User;