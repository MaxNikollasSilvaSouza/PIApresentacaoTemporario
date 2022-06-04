import React from "react";
import { Route, Routes } from 'react-router-dom'
import Home from "./components/Pages/HomePage";
import LoginPage from "./components/Pages/LoginPage";
import Perfil from "./components/Pages/Perfil";
import CadastroFuncionarios from "./components/Pages/Cadastro/Funcionarios";
import CadastroFornecedor from "./components/Pages/Cadastro/Fornecedor";
import CadastroContas from "./components/Pages/Cadastro/Conta";
import CadastroClientes from "./components/Pages/Cadastro/Clientes";
export default () =>
{
    return(
   
            
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/login" element={<LoginPage/>}/>
                <Route exact path="/perfil" element={<Perfil/>}/>
                <Route exact path="/funcionario" element={<CadastroFuncionarios/>}/>
                <Route exact path="/fornecedor" element={<CadastroFornecedor/>}/>
                <Route exact path="/contas" element={<CadastroContas/>}/>
                <Route exact path="/clientes" element={<CadastroClientes/>}/>
            </Routes>
      
    );
}

