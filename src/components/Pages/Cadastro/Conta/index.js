import React, {useState} from "react";

import "./styled.css";

const CadastroContas = () => {


    const [email, setEmail] = useState("");
    const [cpf, setCPF] = useState("");
    const [cargo, setCargo] = useState("");
    const [datapagamento, setDataPagamento] = useState("");
    const [salario, setSalario] = useState("");
    const [datacadastro, setDataCadastro] = useState("");
   
    const handleSubmit = (evento) => {
        evento.preventDefault();

        console.log({email, cpf});
    };

    async function login(email, cpf) {
        let body = {
            'EMAIL': email,
            'CPF': cpf,
            'SALARIO':salario
            
        }
        
    }

    return (
        <div id = "login">
            <h1 className="Titulo">Cadastro de Contas</h1>
            <form className="form" onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="email">Despesa</label>
                    <input type="text" name="email" id="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} placeholder="Despesa"/>

                </div>

                

                <div className="field">
                    <label htmlFor="cpf">Descrição</label>
                    <input type="number" name="password" id="password" 
                    value={cpf} 
                    onChange={(e)=> setCPF(e.target.value)} placeholder="Descrição"/>

                </div>

                <div className="field">
                    <label htmlFor="cpf">Valor</label>
                    <input type="number" name="password" id="password" 
                    value={salario} 
                    onChange={(e)=> setSalario(e.target.value)} placeholder="Valor"/>

                </div>

                <div className="field">
                    <label htmlFor="cpf">Status</label>
                    <input type="text" name="password" id="password" 
                    value={cargo} 
                    onChange={(e)=> setCargo(e.target.value)} placeholder="Paga ou Não Paga"/>

                </div>

                <div className="field">
                    <label htmlFor="cpf">Data de Pagamento</label>
                    <input type="date" name="password" id="password" 
                    value={datapagamento} 
                    onChange={(e)=> setDataPagamento(e.target.value)}/>

                </div>

                <div className="actions">
                    <button type="submit" onClick={()=>login(email, cpf)}>Entrar</button>
                </div>
            </form>
        </div>
    );
};

export default CadastroContas;