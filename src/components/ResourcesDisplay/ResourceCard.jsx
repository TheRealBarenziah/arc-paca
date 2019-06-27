import React from 'react';
import './ResourceCard.scss';
import { Container } from 'reactstrap';

export default function ResourceCard({title, description, labels, url}) {
  return (
    <div className="containerResourceCard">
      <Container>
      {labels.map((label) => {
        return <div className="label">{label}</div>
      })}
      <h3>{title} </h3>
      <a href={url} alt={title}>My Link</a>
      <p className="description">{description}</p>
     
      </Container>
    </div>
  )
}
