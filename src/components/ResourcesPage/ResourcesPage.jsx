import React, { Component } from "react";
import './ResourcesPage.scss';
import ResourcesDisplay from "../ResourcesDisplay/ResourcesDisplay";
import { resourcesList } from '../../utils/resourcesList/resourcesList';
import { Container, Row, Col } from 'reactstrap';
export default class Ressources extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div className='containerRessources'>
        <Container>
          <Row>
            <Col md="4">
            <p>POUET</p>
            </Col>
            <Col className="test" md="8">

              <ResourcesDisplay resourcesList={resourcesList} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
