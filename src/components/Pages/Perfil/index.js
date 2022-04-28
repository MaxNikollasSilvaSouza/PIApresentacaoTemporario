import React from "react";
import "./styled.css";
import { Button,InputGroup,FormControl } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export function Perfil() {
    return (
        <>
            <div>
                <table id="tabela">
                    <tr>
                        <td className="lado_esquerdo">
                            <tr className="esquerda">
                            <b>Bem vindo Max!</b>
                            <br></br>
                           
                            <Button variant="outline-secondary" className="botoes">Editar</Button>{' '}
                            <Button variant="outline-danger" className="botoes">Apagar</Button>{' '}
                            </tr>
                            <tr className="esquerda">
                            <Button variant="outline-success" className="botoes">Publicar</Button>{' '}
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="imagem_publicar">Imagem</InputGroup.Text>
                                <FormControl
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                />
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Text id="nome_publicar">Nome</InputGroup.Text>
                                <FormControl
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                />
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Text id="valor_publicar">Valor</InputGroup.Text>
                                <FormControl
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                />
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Text id="codigo_publicar">Código</InputGroup.Text>
                                <FormControl
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                />
                            </InputGroup>
                            </tr>
                        </td>
                        <td id="direita">
                            <div className="dadosProd">
                                <img src="Teste"></img>


                            </div>
                        </td>
                    </tr>
                </table>
            </div>

        </>
    )
}

export default Perfil;