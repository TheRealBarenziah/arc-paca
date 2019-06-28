import React, { Component } from "react";
import {Container, Row, Col, Button} from "reactstrap"

import './PublicOfficialPage.scss';

export default class PublicOfficial extends Component {
  render() {
    return (
      <div className='containerPublicOfficial'>
        <h1>Agents de la fonction publique</h1>
        <Container className="PublicOfficialText">
            <Row>
            <Col offset={3}></Col>
              <Col sm={6}>
                Chacun d'entre vous est également un citoyen avant d'être agent de la fonction publique, et certains 
                d'entre vous sont également développeurs.

                Toutefois nous tenons à adresser un message à l'ensemble des personnes travaillant de près où de loin sur 
                ces problématiques de Big Data et d'ouverture des données publiques.

                Loin de vouloir se substituer ou remplacer ce qui a déjà été fait, notre but est de 
                réellement valoriser ce travail et de le rendre plus visible. En effet, en faisant quelques 
                recherches nous avons été très agréablement surpris par la qualité des ressources déjà existantes.

                Pour matérialiser la sincérité de notre considération, nous avons choisi de placer cette application sous la licence 
                CeCILL-2.

                </Col>
              <Col offset={3}></Col>
            </Row>
        </Container>

            <div className="buttonDev">
            <Button outline color="danger"><a href="/resources">Je veux être redirigé vers l'annuaire de ressources</a></Button>
            </div>


      </div>
    );
  }
}