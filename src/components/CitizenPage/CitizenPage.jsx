import React, { Component } from "react";
import {Container, Row, Col, Button} from "reactstrap"

import './CitizenPage.scss';

export default class Citizen extends Component {
  render() {
    return (
      <div className='containerCitizen'>
        <h1>Citoyens</h1>
        <Container className="CitizenText">
            <Row>
              <Col offset={3}></Col>
              <Col sm={6}>
                Nous pensons que l'ouverture des données publiques est une aubaine pour tous les citoyens.
                Toutefois, sans compétence technique, la masse d'information disponible est trop importante 
                pour pouvoir être réellement exploitée.

                Le but d'ARC est de mettre à votre disposition un ensemble d'outils et de ressources permettant 
                à n'importe qui de s'intéresser de plus près à ces .

                La seule limite à l'utilisation de ces données est l'imagination, c'est pourquoi il est 
                crucial de faciliter leur compréhension plus grand nombre. 

                Nous croyons profondément que les techniciens ne suffiront pas à tirer 
                le meilleur de cet océan de données sans le concours des citoyens.

              </Col>
              <Col offset={3}></Col>
            </Row>
        </Container>

            <div className="buttonDev">
            <Button outline color="danger">Quelles ressources puis-je utiliser ?</Button>
            </div>

      </div>
    );
  }
}
