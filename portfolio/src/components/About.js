import React, { Component } from 'react';
import './css/Components.css';
import myphoto from './img/myphoto.jpg'

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
                Sou desenvolvedor Front-End e estudante de Desenvolvimento Web na Trybe. Meu maior objetivo sempre foi trabalhar com tecnologia e programação.
                Sou apaixonado por musica e no meu tempo livre amo tocar violão.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default About;
