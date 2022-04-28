import React from "react";
import { Route, Routes } from 'react-router-dom'
import Home from "./components/Pages/HomePage";
import LoginPage from "./components/Pages/LoginPage";
import Perfil from "./components/Pages/Perfil";

export default () =>
{
    return(
   
            
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/login" element={<LoginPage/>}/>
                <Route exact path="/perfil" element={<Perfil/>}/>
            </Routes>
      
    );
}

