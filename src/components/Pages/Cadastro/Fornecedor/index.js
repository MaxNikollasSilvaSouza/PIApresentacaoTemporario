import React, {useState} from "react";

import "./styled.css";

const CadastroFornecedor = () => {


    const [email, setEmail] = useState("");
    const [cnpj, setCNPJ] = useState("");
    const [cargo, setCargo] = useState("");
    const [datapagamento, setDataPagamento] = useState("");
    const [salario, setSalario] = useState("");
    const [datacadastro, setDataCadastro] = useState("");
   
    const handleSubmit = (evento) => {
        evento.preventDefault();

        console.log({email, cnpj});
    };

    async function login(email, cnpj) {
        let body = {
            'EMAIL': email,
            'CNPJ': cnpj,
            'SALARIO':salario
            
        }
        
    }

    return (
        <div id = "login">
            <h1 className="Titulo">Cadastro de Fornecedores</h1>
            <form className="form" onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="email">Nome</label>
                    <input type="text" name="email" id="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} placeholder="Nome"/>

                </div>

                

                <div className="field">
                    <label htmlFor="cpf">CNPJ</label>
                    <input type="text" name="password" id="password" 
                    value={cnpj} 
                    onChange={(e)=> setCNPJ(e.target.value)} placeholder="CNPJ"/>

                </div>

                <div className="field">
                    <label htmlFor="cpf">Data de Pagamento</label>
                    <input type="date" name="password" id="password" 
                    value={datapagamento} 
                    onChange={(e)=> setDataPagamento(e.target.value)}/>

                </div>

                <div className="actions">
                    <button type="submit" onClick={()=>login(email, cnpj)}>Entrar</button>
                </div>
            </form>
        </div>
    );
};

export default CadastroFornecedor;