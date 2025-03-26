# Learning react by Namaste react

- npm works for packeger manager but does not stand for package manager
- package.json is a configuration for npm
- package.json has tilde(~) for upgradation of major version, caret(^) for upgradation of minor version
- package-lock.json keeps record of exact version
- Transitive depedency (If your React project depends on Library A, and Library A depends on Library B, then Library B is a transitive dependency of your project.)

* Header
* - logo
* - nav items
* Body
* - search
* - restaurantContainer
* - restaurantCard
* - Img
* - Name of res, star rating, cuisines, etc
* Footer
* - copyright
* - links
* - address
* - contact

# parcel

- Dev Build
- Local server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in c++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistency hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused
- Different dev and prod bundles

# Two types of export / import

- Default export/ import
- export default Component;
- import Component from "path";

- Named export/ import
- export const Component;
- import {Component} from "path";

# HOOKS

- a normal js function with some special features given by react
- a normal js utility function
- useState() - superpowerful state variables (state variable update/change react component re-render)
- useEffect()

# React is fast bcoz it does efficient DOM manipulation becoz it has a virtual DOM which has reconcilation algorithm

# React Fiber (Reconcilation alogithm) core of React

# rafce - shortcut for writing components

# It is a single page application (via client side routing)

# Two types of routing

- server side routing
- client side routing

# Link is special type of component given by react which is behind the seen uses anchor tag <a></a>

# Higher order component is a function that takes a component enhances it and returns it back a new component

# lifting state variable
# props drilling - react context - global space

# Redux is in data layer, redux is not mandatory it is a seperate library
# Redux offers easy debugging
# We will be using Redux Toolkit

# Redux Toolkit
- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Slice (cartSlice)
- dispatch(action)
- selector