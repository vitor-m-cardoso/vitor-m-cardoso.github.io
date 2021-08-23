import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './css/Components.css';
import myphoto from './img/myphoto.jpg';
import bootstrapIcon from './img/icons/bootstrapIcon.png';
import cssIcon from './img/icons/css3Icon.png';
import gitIcon from './img/icons/gitIcon.png';
import htmlIcon from './img/icons/html5Icon.png';
import javaScriptIcon from './img/icons/javaScriptIcon.png';
import typeScriptIcon from './img/icons/typeScriptIcon.png';
import linuxIcon from './img/icons/linuxIcon.png';
import reactIcon from './img/icons/reactIcon.png';
import reduxIcon from './img/icons/reduxIcon.svg';

class About extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="d-flex bg-light ajust-margin home-component justify-content-center align-items-center">
          <div className="container">
            <div className="row d-flex justify-content-center animeLeft">
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
                Desenvolvedor Web Front-end e estudante de Desenvolvimento Web Full-stack. Apaixonado por tecnologia desde os 9 anos.
                Com conhecimentos em Linux, Git, GitHub, HTML, CSS, JavaScript, Typescript, React, Bootstrap, Redux, Jest, React Testing Library, REST, RESTful, MySQL e GraphQL.
                </p>
                <p className="h5">Linguagens e ferramentas:</p>
                <div className="d-flex icon-size">
                  <img src={linuxIcon} alt="linux icon" className="icon-size2"/>
                  <img src={gitIcon} alt="git icon" className="icon-size2"/>
                  <img src={cssIcon} alt="css3 icon" className="icon-size2"/>
                  <img src={htmlIcon} alt="html5 icon" className="icon-size2"/>
                  <img src={javaScriptIcon} alt="javaScript icon" className="icon-size2"/>
                  <img src={typeScriptIcon} alt="javaScript icon" className="icon-size2"/>
                  <img src={bootstrapIcon} alt="bootstrap icon" className="icon-size2"/>
                  <img src={reactIcon} alt="react icon" className="icon-size2"/>
                  <img src={reduxIcon} alt="redux icon" className="icon-size2"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default About;
