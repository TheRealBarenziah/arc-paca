import React from 'react';
import './ResourceCard.scss';
import { Container, Row, Col } from 'reactstrap';

export default function ResourceCard({ title, description, labels, url }) {
  return (
    <div>
      <Container className="containerResourceCard">
        <Row className="test1">
          {labels.map((label) => {
            return (
              <Col className="colLabel">
                <p className="label">{label}</p>
              </Col>
            )
          })}

        </Row>
        <h3>{title} </h3>
        <p className="description">{description}</p>
        <a href={url} alt={title}>My Link</a>

      </Container>
    </div>
  )
}
