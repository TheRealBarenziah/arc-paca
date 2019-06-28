import React, { Component } from "react";
import { Container, Row, Col, Media } from 'reactstrap';
import './AboutPage.scss';



export default class About extends Component {
  render() {
    return (
      <div className='containerAbout'>
        <Container>
          <Row className="rowHeader">
            <Col className="colHeader"><img src="https://cdn.pixabay.com/photo/2017/11/02/10/37/binary-2910663_960_720.jpg" class="img-fluid" alt="Responsive image" /></Col>
          </Row>
          <h2>ABOUT US</h2>
        </Container>

        <Container className="containerDev">
          <Row className="rowSection">
            <Col className="colSection" xs="6">
              <Media className="mt-1">
                <Media left top href="#">
                  <img src="http://placekitten.com/g/150/150" alt="" />
                </Media>
                <Media body>
                  <Media heading>
                    The RealBarenziah
                </Media>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </Media>
              </Media>
            </Col>
            <Col className="colSection" xs="6">
              <Media className="mt-1">
                <Media left top href="#">
                  <img src="http://placekitten.com/g/150/150" alt="" />
                </Media>
                <Media body>
                  <Media heading>
                    Radouane
          </Media>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
              </Media>
            </Col>
          </Row>

          <Row className="rowSection">
            <Col className="colSection" xs="6">
              <Media className="mt-1">
                <Media left top href="#">
                  <img src="http://placekitten.com/g/150/150" alt="" />
                </Media>
                <Media body>
                  <Media heading>
                    Dan
                </Media>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </Media>
              </Media>
            </Col>
            <Col className="colSection" xs="6">
              <Media className="mt-1">
                <Media left top href="#">
                  <img src="http://placekitten.com/g/150/150" alt="" />
                </Media>
                <Media body>
                  <Media heading>
                    Alex
          </Media>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
              </Media>
            </Col>
          </Row>
          <Row className="rowSection">
            <Col className="colSection" xs="6">
              <Media className="mt-1">
                <Media left top href="#">
                  <img src="http://placekitten.com/g/150/150" alt="" />
                </Media>
                <Media body>
                  <Media heading>
                    Saïdou
                </Media>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </Media>
              </Media>
            </Col>
            <Col className="colSection" xs="6">
              <Media className="mt-1">
                <Media left top href="#">
                  <img src="http://placekitten.com/g/150/150" alt="" />
                </Media>
                <Media body>
                  <Media heading>
                    Mohand
          </Media>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
              </Media>
            </Col>
          </Row>
          <Row className="rowSection">
            <Col className="colSection" xs="6">
              <Media className="mt-1">
                <Media left top href="#">
                  <img src="http://placekitten.com/g/150/150" alt="" />
                </Media>
                <Media body>
                  <Media heading>
                    Djamel
                </Media>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </Media>
              </Media>
            </Col>
            <Col className="colSection" xs="6">
              <Media className="mt-1">
                <Media left top href="#">
                  <img src="http://placekitten.com/g/150/150" alt="" />
                </Media>
                <Media body>
                  <Media heading>
                    Sarah
          </Media>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
              </Media>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
