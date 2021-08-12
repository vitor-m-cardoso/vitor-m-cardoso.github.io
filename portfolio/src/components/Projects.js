import React, { Component } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import data from './data/projectData';
import './css/Components.css';

class Home extends Component {
  render() {
    return (
      <div className="d-flex bg-light ajust-margin home-component justify-content-center align-items-center text-white">
        <Row xs={1} md={2} className="g-4">
          {data.map(({image, title, text, projectLink, gitHubLink}, idx) => (
            <Col key={ idx }>
              <Card 
                style={{ width: '18rem', backgroundColor: 'rgb(28, 31, 46)' }}
                className="text-center align-items-center zoom-cardImage"
              >
                <Card.Img variant="top" src={ image }/>
                <Card.Body>
                  <Card.Title>{ title }</Card.Title>
                  <Card.Text>
                    { text }
                  </Card.Text>
                </Card.Body>
                <Button
                  variant="outline-secondary btn-sm"
                  style={ { maxWidth: '160px' } }
                  className="mb-2"
                >
                  <a
                    href={ projectLink }
                    target="_blank"
                    rel="noreferrer"
                    style={ { textDecoration:"none", color:'white' } }
                  >
                    Pagina do Projeto
                  </a>
                </Button>
                <Button
                  variant="outline-secondary btn-sm"
                  className="mb-2"
                  style={ { maxWidth: '160px' } }
                >
                  <a
                    href={ gitHubLink }
                    target="_blank"
                    rel="noreferrer"
                    style={ { textDecoration:"none", color:'white' } }
                  >
                    Repositorio no GitHub
                  </a>
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    )
  }
}

export default Home;
