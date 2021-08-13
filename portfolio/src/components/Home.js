import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

import './css/Components.css';

class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="d-flex text-white bg-light ajust-margin home-component justify-content-center align-items-center">
          <div className="container">
            <div className="row animeLeft">
              <div className="col-12 text-center">
                <h1 className="display-4">Vitor Cardoso.</h1> 
              </div>
              <div className="col text-center">
                <p className="h3">Desenvolvedor Web Full-Stack.</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default Home;
