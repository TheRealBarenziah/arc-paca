import React, { Component } from "react";
import './DevelopperPage.scss';
import { Container, Row, Col, Button } from "reactstrap"

export default class Developper extends Component {
  render() {
    return (
      <div className='containerDevelopper'>
        <h1>Développeurs</h1>
        <Container className="DevelopperText">
          <Row>
            <Col offset={3}></Col>
            <Col sm={6}>
              En plus d'être des citoyens à part entière, les développeurs possèdent les clés de l'exploitation
              du 'Big Data'.

              De très bons outils et APIs sont mis à leur disposition par la puissance publique. Malheureusement,
              certains de ces outils n'ont pas la visibilité qu'ils méritent (c'est en tout cas notre opinion).

              Nous voudrions faire d'ARC un outil que les dévéloppeurs auraient envie d'utiliser pour se faciliter la
              vie. Pour ce faire, nous avons pensé que la première étape serait de centraliser toutes ces ressources
              pour les rendre accessibles facilement et rapidement.

              Bien sûr, ARC n'est qu'un prototype. Il s'agit d'un projet Open Source par essence, et nous espérons que
              d'autres développeurs auront envie de s'emparer de la plateforme et de la modifier au gré de leurs besoins.

            </Col>
            <Col offset={3}></Col>
          </Row>
        </Container>
        <div className="buttonDev">
        <Row className="buttonDev">
          <Col className="firstBtn">
            <Button outline color="danger"><a className="link"href="/resources">Lien vers les ressources techniques</a></Button>
          </Col>
          <Col className="firstBtn">
            <Button outline color="secondary"><a href="https://github.com/TheRealBarenziah/arc-paca">Vous souhaitez contribuer? Retrouvez-nous sur GitHub</a></Button>
          </Col>
          </Row>
        </div>
        


      </div>
    );
  }
}
