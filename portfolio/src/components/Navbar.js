import React, { Component } from "react";
import { Link } from "react-router-dom";
import githubIcon from "./img/githubIcon.png";
import instagramIcon from "./img/instagramIcon.png";
import linkedinIcon from "./img/linkedinIcon.png";
import './css/Components.css'

class Navbar extends Component {
  render() {
    return (
      <div
        className="d-flex align-items-center justify-content-center box-shadow bg-light py-3 fixed-top"
      >
        <Link style={{ textDecoration: "none" }} className="mr-3 ml-3" to="/">
          Página Inicial
        </Link>
        <Link
          style={{ textDecoration: "none" }}
          className="mr-3 ml-3"
          to="/about"
        >
          Sobre
        </Link>
        <Link
          style={{ textDecoration: "none" }}
          className="mr-3 ml-3"
          to="/projects"
        >
          Projetos
        </Link>
        <a
          href="https://www.instagram.com/vitorcaardoso_/"
          target="_blank"
          rel="noreferrer"
          className="ml-3 icon-size2"
        >
          <img
            src={instagramIcon}
            style={{ width: "25px", height: "25px" }}
            alt="github icon"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/vitormcardoso/"
          target="_blank"
          rel="noreferrer"
          className="icon-size2"
        >
          <img
            src={linkedinIcon}
            style={{ width: "27px", height: "27px" }}
            alt="instagram icon"
          />
        </a>
        <a
          href="https://github.com/vitor-m-cardoso/"
          target="_blank"
          rel="noreferrer"
          className="icon-size2"
        >
          <img
            src={githubIcon}
            style={{ width: "23px", height: "23px" }}
            alt="github icon"
          />
        </a>
      </div>
    );
  }
}

export default Navbar;
