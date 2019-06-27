import React, { Component } from "react";
import './RessourcesPage.scss';
import ResourcesDisplay from "../ResourcesDisplay/ResourcesDisplay";

export default class Ressources extends Component {
  render() {
    return (
      <div className='containerRessources'>
        <p>Hi! You're in Ressources Component!</p>
        <ResourcesDisplay />
      </div>
    );
  }
}
