import React, { Component } from 'react';
import './css/Components.css';

class Home extends Component {
  render() {
    return (
      <div className="d-flex text-white bg-light ajust-margin home-component justify-content-center align-items-center">
        <div style={{textAlign:"center"}}>
          <h1 className="display-4">Vitor Cardoso.</h1>
          <p className="h2">Desenvolvedor Web.</p>
          <p className="h5">Estudante de desenvolvimento de Software na Trybe e</p>
          <p className="h5">apaixonado por tecnologia.</p>
        </div>
      </div>
    )
  }
}

export default Home;
