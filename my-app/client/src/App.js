import React, {useState} from "react";
import "./App.css";
import   Home   from "./Pages/Home";
import  Favpups  from "./Pages/Favpups";
import  Login from "./Pages/Login";
import  Signup  from "./Pages/Signup";


import { RouterProvider, createBrowserRouter } from "react-router-dom";






// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />
//   },
//   {
//     path: "/favpups",
//     element: <Favpups />
//   },
//   {
//     path: "/signup",
//     element: <Signup />
//   },
//   {
//     path: "/login",
//     element: <Login />
//   },

//   ]);



function App() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className="App" color="black">
      hello
        {/* <RouterProvider router={router} /> */} 
        <Home />
    </div>
  );
};




export default App;