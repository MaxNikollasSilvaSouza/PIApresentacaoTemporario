import React from "react";

import "./styled.css";
import { Button, Col, Row, Card, Form, Container, Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export function Header() {
    return (
        <>
            <div className='cabecalho'>
                <Container >
                    <Row >
                        <Col>1 of 3</Col>
                        <Col xs={6} className='padding_zero'>
                            <Form>

                                <Row className='barra_pesquisa'>
                                    <Col >
                                        <div className='padrao_barra_pesquisa'>
                                            <Form.Control placeholder="Procurar item" className='input_text' />

                                            <Button variant="outline-success" type="submit" className="bt_procurar">
                                                Procurar
                                            </Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Form>

                        </Col>
                        <Col className="cadastrar_entrar">
                           
                            

                        </Col>
                    </Row>
                    <Row className="row_opcoes">
                        <Col xs={5} className="select">
                           <a href="/"> <p className="opcoes">Home</p> </a>
                           <p className="opcoes">Ajuda</p>
                           
                            
                            Categoria: 
                        <Form.Select size="sm" className="form_select">
                            <option>Categorias</option>
                            <option>Camisas</option>
                            <option>Casa</option>
                            <option>Gamer</option>
                        </Form.Select>
                        <div className="link_cadastro">
                        <a href="/login" >Entrar</a>  
                        
                        </div>
                        </Col>
                    </Row>
                    
                       
                </Container>
            </div>

        </>
    );
}

export default Header;