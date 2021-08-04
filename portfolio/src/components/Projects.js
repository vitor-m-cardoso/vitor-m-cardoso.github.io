import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import pixelArtProject from './img/projectsImg/pixelArtProject.png'
import './css/Components.css';

class Home extends Component {
  render() {
    return (
      <div className="ajust-margin home-component text-white">
        <Card
          style={{ width: '14rem', backgroundColor: 'rgb(28, 31, 46)' }}
          className="text-center align-items-center"
        >
          <Card.Img variant="top" src={ pixelArtProject } />
          <Card.Title className="my-2">Projeto Pixel Art</Card.Title>
          <Card.Text>
            Pagina criada utilizando HTML, CSS e JavaScript.
          </Card.Text>
          <Button
            variant="outline-secondary btn-sm"
            className="mb-2"
            style={ { maxWidth: '160px' } }
          >
            <a
              href="https://github.com/vitor-m-cardoso/project-pixel-art"
              target="_blank"
              rel="noreferrer"
              style={ { textDecoration:"none", color:'white' } }
            >
              Repositorio no GitHub
            </a>
          </Button>
          <Button
            variant="outline-secondary btn-sm"
            style={ { maxWidth: '160px' } }
          >
            <a
              href="https://vitor-m-cardoso.github.io/project-pixel-art/"
              target="_blank"
              rel="noreferrer"
              style={ { textDecoration:"none", color:'white' } }
            >
              Pagina do Projeto
            </a>
          </Button>
        </Card>
      </div>
    )
  }
}

export default Home;
