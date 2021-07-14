import React, { Component } from 'react';
import './css/Components.css';
import myphoto from './img/myphoto.jpeg'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

class About extends Component {
  render() {
    return (
      <div className="d-flex bg-light ajust-margin home-component justify-content-center align-items-center">
        <div className="d-flex text-white">
          <div className="ml-3">
            <img
              src={myphoto}
              style={{width: "200px", height: "200px", borderRadius:"100%"}}
              alt="Foto de perfil"
            />
          </div>
          <div className="ml-3" style={{width:"28rem"}}>
            <h3>Olá, eu sou o Vitor Cardoso!</h3>
            <p>
              Tenho 23 anos e sou de Curitiba, Paraná. Onde atualmente resido.
              Sou Desenvolvedor Front-End e estudante de Desenvolvimento Web na Trybe. Meu maior objetivo sempre foi trabalhar com tecnologia e programação.
              Completamente apaixonado por música e no meu tempo livre amo tocar violão.
            </p>
            <Accordion defaultActiveKey="0">
              <Card className="bg-secondary">
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  Hard-Skills:
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>Linux, Unix e Bash, Git e Github, HTML5 e CSS3, JavascriptES6 e Lógica de Programação, Testes Unitários, Requisições API, Testes automatizados com Jest, Bootstrap, React e Redux.</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="bg-secondary">
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  Soft-Skills:
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>Comunicação, Facilidade com trabalho em equipe, Gestão de tempo e prioridade, Aprender a aprender.</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </div>
      </div>
    )
  }
}

export default About;
