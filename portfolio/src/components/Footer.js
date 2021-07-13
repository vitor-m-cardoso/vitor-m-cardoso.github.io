import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <footer className="bg-dark text-white">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-3 col-6">
              <h4 className="h6">PÁGINAS</h4>
              <ul className="list-unstyled">
                <li>
                  <Link
                    to="/"
                    style={ { textDecoration:"none" } }
                  >
                    Página Inicial
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    style={ { textDecoration:"none" } }
                  >
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link
                    to="/projects"
                    style={ { textDecoration:"none" } }
                  >
                    Projetos
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-6">
              <h4 className="h6">PROJETOS</h4>
              <ul className="list-unstyled">
                <li>
                  <a
                    style={ { textDecoration:"none" } }
                    href="/#"
                    target="_blank"
                  >
                    Projeto 1
                  </a>
                </li>
                <li>
                  <a
                    style={ { textDecoration:"none" } }
                    href="/#"
                    target="_blank"
                  >
                    Projeto 2
                  </a>
                </li>
                <li>
                  <a
                    style={ { textDecoration:"none" } }
                    href="/#"
                    target="_blank"
                  >
                    Projeto 3
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h4 className="h6">DADOS DE CONTATO</h4>
              <ul className="list-unstyled text-secondary">
                <li>vitor.mauricioc@outlook.com</li>
                <li>(41) 99686-9583</li>
              </ul>
            </div>
            <div className="col-md-2">
              <h4 className="h6">REDES SOCIAIS</h4>
              <ul className="list-unstyled">
                <li>
                  <a
                    className="btn btn-outline-secondary d-block mb-2 btn-sm"
                    href="https://www.instagram.com/vitorcaardoso_/"
                    target="_blank"
                    style={ { maxWidth: '140px' } }
                    rel="noreferrer"
                  >
                    Instragram
                  </a>
                </li>
                <li>
                  <a
                    className="btn btn-outline-secondary d-block mb-2 btn-sm"
                    href="https://www.linkedin.com/in/vitormcardoso/"
                    target="_blank"
                    style={ { maxWidth: '140px' } }
                    rel="noreferrer"
                  >
                    Linkedin
                  </a>
                </li>
                <li>
                  <a 
                    className="btn btn-outline-secondary d-block mb-2 btn-sm"
                    href="https://github.com/vitor-m-cardoso/"
                    target="_blank"
                    style={ { maxWidth: '140px' } }
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-primary text-center py-3">
          <p className="mb-0">Vitor Cardoso © 2021. Todos os direitos reservados.</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
