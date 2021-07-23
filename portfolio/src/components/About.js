import React, { Component } from 'react';
import './css/Components.css';
import myphoto from './img/myphoto.jpg'
import bootstrapIcon from './img/icons/bootstrapIcon.png'
import cssIcon from './img/icons/css3Icon.png'
import gitIcon from './img/icons/gitIcon.png'
import htmlIcon from './img/icons/html5Icon.png'
import javaScriptIcon from './img/icons/javaScriptIcon.png'
import linuxIcon from './img/icons/linuxIcon.png'
import reactIcon from './img/icons/reactIcon.png'
import reduxIcon from './img/icons/reduxIcon.svg'

class About extends Component {
  render() {
    return (
      <div className="d-flex bg-light ajust-margin home-component justify-content-center align-items-center">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-12 col-md-3 d-flex justify-content-center">
            <img
              src={myphoto}
              style={{width: "11rem", height: "12rem", borderRadius:"100%"}}
              alt="Foto de perfil"
            />
            </div>
            <div className="col-12 col-md-5 text-white">
              <h3>Olá, eu sou o Vitor Cardoso!</h3>
              <p>
                Tenho 23 anos, natural de Curitiba, Paraná. Desenvolvedor Front-End e estudante de Desenvolvimento Web Full-Stack.
              </p>
              <p className="h5">Linguagens e ferramentas:</p>
              <img src={linuxIcon} alt="linux icon" style={{width: "40px"}} />
              <img src={gitIcon} alt="git icon" style={{width: "40px"}} />
              <img src={cssIcon} alt="css3 icon" style={{width: "40px"}} />
              <img src={htmlIcon} alt="html5 icon" style={{width: "40px"}} />
              <img src={javaScriptIcon} alt="javaScript icon" style={{width: "40px"}} />
              <img src={bootstrapIcon} alt="bootstrap icon" style={{width: "40px"}} />
              <img src={reactIcon} alt="react icon" style={{width: "40px"}} />
              <img src={reduxIcon} alt="redux icon" style={{width: "40px"}} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About;
