import React, { Component } from 'react'
import {Container, Row, Col, Button}from "reactstrap"
import './footer.scss';



export default class footer extends Component {
    render() {
        return (
            <div className="Footer" >
        <Container className="FooterContainer">
            <Row>
              <Col sm={5}><img  alt="" src="https://www.dataweek.fr/wp-content/uploads/2019/04/logo_dataweek-web-300x152.png"></img></Col>
            <Col offset={2}></Col>
            <Col  className="IconFooter" sm={5}>About Us</Col>
            </Row>
        </Container>
            </div>
        )
    }
}
