import React , { lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import Contact from "./components/Contact";
import { Outlet } from "react-router";
import About from "./components/About";
import { createBrowserRouter, RouterProvider} from "react-router";
import RestaurantMenu from "./components/RestaurantMenu";
import { Suspense } from "react";
import Run from "./components/new";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

// chunking
// code spliting
// dynamic bundling
// lazy loading
// on demand loading
// dynamic import

const Grocery = lazy(() => import("./components/Grocery"));

const resId = 9;

const AppLayout = () => {
    const [userName, setUserName] = useState();

    // authentication
    useEffect(() => {
      // Make an API call and send username and password
      const data = {
        name: "Himanshi Gupta",
      }
      setUserName(data.name)

    }, [])

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
            <div className="app"> 
            <UserContext.Provider value={{loggedInUser: "Elon Musk"}}>
             <Header />
            </UserContext.Provider>
            <Outlet />

            </div>
            </UserContext.Provider>
        </Provider>

    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element:<AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/grocery",
                element: (
                    <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
                )
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

// root.render(<AppLayout />);