import React from 'react';
import ResourceCard from './ResourceCard';

export default function ResourcesDisplay(props) {
  return (
    <React.Fragment>
      {props.resourcesList.map((resourceObject) => <ResourceCard {...resourceObject} />)}
    </React.Fragment>
  )
}
