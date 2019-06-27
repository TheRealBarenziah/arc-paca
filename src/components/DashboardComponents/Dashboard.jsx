import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import './Dashboard.scss';


export default class Dashboard extends Component {
    render() {
        return (
            <div className="card-upload text-center">
            <Card body>
            <div><img src="https://img.icons8.com/ios/50/000000/download-from-cloud.png" alt=""/></div>
              <CardTitle>Importer votre fichier</CardTitle>
              <CardText>XLS, JSON, CSV, WFS</CardText>
              <Button color="primary">Sélectionner</Button>
            </Card>
          </div>
      
        )
    }
}
