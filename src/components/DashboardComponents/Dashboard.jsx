import React, { Component } from "react";
import { Row, Col, Card, Button, CardTitle, CardText } from "reactstrap";
import "./Dashboard.scss";

export default class Dashboard extends Component {
  render() {
    return (
      <Row>
          <Col sm="4" className="sidebar-left">
            <Row>
              <Card body className="card-news">
                <h3>News</h3>
                <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </CardText>
              </Card>
              </Row>

              <Row>
              <Card body className="card-stats">
                <h3>Statistiques</h3>
                <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </CardText>
              </Card>
              </Row>
          </Col>


        <Col sm="8" className="sidebar-right">
          <Card body className="card-upload">
            <div className="cloud-upload">
              <ion-icon name="cloud-upload" />
            </div>
            <CardTitle className="title-upload">Importez votre fichier</CardTitle>
            <CardText className="type-file">XLS</CardText>
            <div className="btn-upload">
            <Button>Sélectionner</Button>
            </div>
          </Card>
        </Col>
      </Row>
    );
  }
}
