import React, { Component } from 'react';
import './css/Components.css';

class Home extends Component {
  render() {
    return (
      <div className="d-flex text-white bg-light ajust-margin home-component justify-content-center align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="display-4">Vitor Cardoso.</h1> 
            </div>
            <div className="col text-center">
              <p className="h3">Desenvolvedor Web Full-Stack.</p>
              <p className="h4">Estudante de desenvolvimento de Software na Trybe e apaixonado por tecnologia.</p>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Home;
