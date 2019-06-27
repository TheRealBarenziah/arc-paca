import React, { Component } from "react";
import './DevelopperPage.scss';
import {Container, Row, Col, Button}from "reactstrap"

export default class Developper extends Component {
  render() {
    return (
      <div className='containerDevelopper'>
        <h1>Developper</h1>
        <Container className="DevelopperText">
            <Row>
              <Col offset={3}></Col>
            <Col sm={6}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi gravida libero nec velit. Morbi scelerisque luctus velit. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Proin mattis lacinia justo. Vestibulum facilisis auctor urna. Aliquam in lorem sit amet leo accumsan lacinia. Integer rutrum, orci vestibulum ullamcorper ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. Phasellus et lorem id felis nonummy placerat. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Aenean vel massa quis mauris vehicula lacinia. Quisque tincidunt scelerisque libero. Maecenas libero. Etiam dictum tincidunt diam. Donec ipsum massa, ullamcorper in,</Col>
            <Col offset={3}></Col>
            </Row>
        </Container>

            <div className="buttonDev">
            <Button outline color="danger">plus d'infos</Button>
            </div>


      </div>
    );
  }
}
