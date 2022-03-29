import React from "react";
import { Route, Routes } from 'react-router-dom'
import Home from "./components/Pages/HomePage";
import LoginPage from "./components/Pages/LoginPage";

export default () =>
{
    return(
   
            
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/login" element={<LoginPage/>}/>
            </Routes>
      
    );
}

