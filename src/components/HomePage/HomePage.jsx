import React, { Component } from "react";
import { Row, Col } from 'reactstrap';
import './HomePage.scss';


export default class Home extends Component {
  render() {
    return (
      <div className='containerHome'>
<<<<<<< HEAD
         <div className="headerHomePage">
            <img src="https://image.noelshack.com/fichiers/2019/26/5/1561710814-earth-3866609.jpg" class="img-fluid" alt="Responsive image" />
          </div>
        <h2>OPEN SOURCE DATA</h2>
=======
        <CarouselHome />
        <h2>ARC</h2>
>>>>>>> 97997d7811db91e957458f08481af8b06e97a025
        <Row className="PaddingRow">
        <Col sm="4" xs="4">
            <h5>Pourquoi ?</h5>
            <p>Plus les données sont nombreuses, plus il est difficile de <em>cibler</em> la donnée pertinente pour nous.</p>
          </Col>
          <Col sm="4" xs="auto">
            <h5>Comment faire?</h5>
            <p>Rendre facilement accessibles les outils déjà existants permettant de <em>cibler</em> l'information dans cet océan de données.</p>
          </Col>
          <Col sm="4" xs="4">
            <h5>Que faisons-nous exactement ?</h5>
            <p>Une plateforme proposant un Dashboard où afficher et manipuler des données, ainsi qu'un annuaire de tous les liens utiles à qui voudrait s'intéresser aux données publiques.</p>
          </Col>
        </Row>
      </div>
    );
  }
}
