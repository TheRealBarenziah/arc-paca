import React, { Component } from "react";
import { Button, Container, Col, Row} from 'reactstrap';

import './Citizen.scss';

export default class Citizen extends Component {
  render() {
    return (
      <div className='containerCitizen'>
        <Container>
          <Row>
            <Col>
              <p>Hi! You're in Citizen Component!</p>
              <Button color="danger">Danger!</Button> 
            </Col>
          </Row>
        </Container>
      </div>

    );
  }
}
