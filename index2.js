import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App";

// React.createElement => ReactElement-JS object => HTMLelement(render)
const heading = React.createElement(
    "h1",
    { id: "heading" },
    "Namaste React"
);
console.log(heading);

// JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code inside JavaScript. 
// JSX makes it easier to create React components by combining UI and logic in a single file.
// JSX (This is not a html, it is html or xml like syntax jsx)
// JSX allows embedding HTML like syntax in JavaScript.
// JSX => babel transpiles it to React.createElement 
const jsxheading = <h1 className="head" id="heading" tabIndex="1">This is JSX heading</h1> // this is transpiled before it reaches to JS engine 
console.log(jsxheading);                                     // done by parcel, parcel handed to babel package


const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
// root.render(jsxheading);


// React Component
// 1. Class Based Component - OLD
// 2. Functional Component - NEW


// React Functional Component - is a normal javascript function that returns some jsx 
// A function which is returning a react element

const HeadingComponent = () => {
    return <h1>Namaste React Functional Component</h1>
}
root.render(<HeadingComponent />);


// React element
const reactEle = (
    <div>
        <h1>React Element</h1>
    </div>
);
// React Component
const ReactComp = () => (
    <div>
        <h1>React Component</h1>
    </div>
);


// Component Composition
// Component composition in React refers to the practice of combining smaller, reusable components to 
// build more complex UI structures.
const ComponentComposition = function () {
    return (
    <div>
        <ReactComp />
        <h1>Component Composition</h1>
    </div>
)};

// Embedding JavaScript inside JSX
// we can inject js code({}) inside jsx
const num = 1000;
const Test = () => (
    <div>
        {100+300}
        { num}
        <h2>{num}</h2>
        {reactEle}  
        {console.log("abc")}
        <h1>React Component</h1>
    </div>
);
/* here reactEle is normal js variable */
root.render(<Test />)

// we can put react element inside react element, react component inside react component, 
// react element inside react component, react component inside react element

// const apiData = api.getData();
// const fn = () => (
//     <div>
//         {Test()}
//         {apiData}
//         <h1>React</h1>
//     </div>
// );
// if api data get attacked and gives some mallicious data jsx skips that it will not print
// When JSX prevents malicious data from being executed in the console or the UI, it is called "Escaping" 
// or "XSS (Cross-Site Scripting) Protection".

// {Test()} == <Test></Test> == <Test />


// React Elements are the smallest UI units, while React Components are reusable functions that return JSX.

