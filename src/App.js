import React from "react";
import Header from "./components/header/Header";
// import Banner from "./components/Home/Banner";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet,
  ScrollRestoration,
} from "react-router-dom";
import { create } from "@mui/material/styles/createTransitions";
import { productsData } from "./api/api";
import SignIn from "./pages/SignIn";
import Registration from "./pages/Registration";
import Cart from "./pages/Cart";


const Layout=()=>{
  return(
    <div>
      <Header/>
      <ScrollRestoration/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

function App() {
  const router=createBrowserRouter(createRoutesFromElements(
    
      <Route path="/" element={<Layout/>}>
         <Route index element={<Home/>} loader={productsData}></Route>
         <Route path="/signin" element={<SignIn/>}/>
         <Route path="/registration" element={<Registration/>}></Route>
         <Route path="/cart" element={<Cart/>}></Route>
      </Route>
     
   
  )
  )
  return (
    <div className="font-bodyFont bg-gray-100">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
