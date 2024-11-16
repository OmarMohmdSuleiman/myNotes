import React from "react";//import react from library to use React components
import ReactDOM from "react-dom";//import ReactDOM library to render React components into the DOM
import App from "./components/App";//import the App component, which contains the main logic of the app


//// Render the App component into the HTML element with the id of "root"
//The <App /> component is the entry point of the React application
ReactDOM.render(<App />,document.getElementById("root"));