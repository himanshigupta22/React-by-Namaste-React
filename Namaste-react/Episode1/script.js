/*
 <div id="parent">
    <div id="child">
       <h1>I am h1 tag</h1>
       <h2>I am h2 tag</h2>
    </div>
    <div id="child2">
       <h1>I am h1 tag</h1>
       <h2>I am h2 tag</h2>
    </div>
 </div>

 */

// core react, it is very tedious so we will use jsx to make it easy
const parent = React.createElement("div",
    {id: "parent"},
    [
        React.createElement("div", {id: "child"},
            [React.createElement("h1", {}, "I am h1 tag"),React.createElement("h2", {}, "I am h2 tag")]
        ),
        React.createElement("div", {id: "child2"},
            [React.createElement("h1", {}, "I am h1 tag"),React.createElement("h2", {}, "I am h2 tag")]
        )
    ]
);

const heading = React.createElement(
    "h1",
    { id: "heading",
      xyz: "abc"
    }, 
    "Hello World from react"
);

// h1 is not a tag, here a object of h1 is created by javascript

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading) // rendering h1 tag from heading object

// replace the whatever content would be inside div tag of id root
root.render(parent);