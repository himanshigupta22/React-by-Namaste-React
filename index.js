import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App";

// React.createElement => ReactElement-JS object => HTMLelement(render)
const heading = React.createElement(
    "h1",
    { id: "heading" },
    "Namaste React"
);
console.log(heading);

// JSX (This is not a html, it is html or xml like syntax jsx)
// JSX => React.createElement (babel is converting)
const jsxheading = <h1 className="head" id="heading">This is JSX heading</h1> // this is transpiled before it reaches to JS engine 
console.log(jsxheading);                                     // done by parcel, parcel handed to babel package


const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

root.render(heading);
root.render(jsxheading);
