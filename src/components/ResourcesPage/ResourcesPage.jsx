import React, { Component } from "react";
import './ResourcesPage.scss';
import ResourcesDisplay from "../ResourcesDisplay/ResourcesDisplay";
import { resourcesList } from '../../utils/resourcesList/resourcesList';

export default class Ressources extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    return (
      <div className='containerRessources'>
        <p>Hi! You're in Resources Component!</p>
        <ResourcesDisplay resourcesList={resourcesList} />
      </div>
    );
  }
}
