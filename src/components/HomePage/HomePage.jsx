import React, { Component } from "react";
import { Row, Col } from 'reactstrap';
import './HomePage.scss';
import CarouselHome from "./Carousel/Carousel";

export default class Home extends Component {
  render() {
    return (
      <div className='containerHome'>
         <div className="headerHomePage">
            <img src="https://image.noelshack.com/fichiers/2019/26/5/1561710814-earth-3866609.jpg" class="img-fluid" alt="Responsive image" />
          </div>
        <h2>OPEN SOURCE DATA</h2>
        <Row className="PaddingRow">
        <Col sm="4" xs="4">
            <h5>Quoi ?</h5>
            <p>Un super site de referencement le meilleur du meilleur</p>
          </Col>
          <Col sm="4" xs="auto">
            <h5>Pourquoi ?</h5>
            <p>Plus les données sont nombreuses plus il est difficile de cibler les données pertinentes</p>
          </Col>
          <Col sm="4" xs="4">
            <h5>Comment ?</h5>
            <p>En  agrégeant et en rendant accesibles à tous les outils permettant de cibler l'information</p>
          </Col>
        </Row>
      </div>
    );
  }
}
