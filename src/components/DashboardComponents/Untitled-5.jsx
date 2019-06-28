
import React, { Component } from "react";
import { Row, Col, Card, Button, CardTitle, CardText } from "reactstrap";
import Dropzone, { useDropzone } from "react-dropzone";
import { ExcelRenderer } from "react-excel-renderer";
import * as FlexmonsterReact from 'react-flexmonster';
import "./Dashboard.scss";

const fileMaxSize = 100000; // Mo

class Dashboard extends Component {
  constructor() {
    super();
    this.onDrop = files => {
      this.setState({ files });
    };
    this.state = {
      files: []
    };
  }

  componentDidMount() {
    this.refs.pivot.flexmonster.connectTo({
      filename: 'https://res.cloudinary.com/arc-paca/raw/upload/v1561716536/coordonnees-cyber-espaces_rkzven.csv',
      dataSourceType: 'csv',
    });
  }

  handleOnDrop = (acceptedFiles, rejectedFiles, event) => {
    console.log(acceptedFiles);
    console.log("rejected files", rejectedFiles);
    let fileObj = acceptedFiles[0];
    
    ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
        console.log(err);
      } else {
        console.log(resp.cols);
        console.log(resp.rows);
        this.setState({
          cols: resp.cols,
          rows: resp.rows
        });
      }
    });
  };

  render() {
    const files = this.state.files.map(file => (
      <li key={file.name}>
        {file.name} - {file.size} bytes
      </li>
    ));

    return (
      <div className="containerDashboardComponent">
        <Row>
          <Col sm="4" className="sidebar-left">
            <Row>
              <Card body className="card-news">
                <h3>Outils</h3>

                <Card body className="card-news2">
                  <h5>Convertir</h5>
                  <p>Cliquez sur le bouton ci-dessous afin de convertir votre fichier</p>
                  <Button
                    className="buttonJSON"
                    onClick={() => alert("Conversion en JSON")}
                    outline
                    color="primary"
                  >XLS -> JSON 
                  </Button>
                  <CardText>
                    <Dropzone
                      onDrop={this.handleOnDrop}
                      maxSize={fileMaxSize}
                      multiple={true}
                      accept={".xls, .csv, .json"}
                    >
                      {({ getRootProps, getInputProps }) => (
                        <section className="container">
                          <div {...getRootProps({ className: "dropzone" })}>
                            <input {...getInputProps()} />
                          </div>
                          <aside />
                        </section>
                      )}
                    </Dropzone>
                  </CardText>
                </Card>
              </Card>
            </Row>

            <Row>
              <Card body className="card-stats">
                <h3>Statistiques</h3>
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </CardText>
              </Card>
            </Row>
          </Col>

          <Col sm="8" className="sidebar-right">
            <Card body className="card-upload">
              <div className="btn-upload" />
              <Dropzone
                onDrop={this.handleOnDrop}
                maxSize={fileMaxSize}
                multiple={true}
                accept={".xls"}
              >
                {({ getRootProps, getInputProps }) => (
                  <section className="container">
                    <div {...getRootProps({ className: "dropzone" })}>
                      <input {...getInputProps()} />
                      <div className="cloud-upload">
                        <ion-icon name="cloud-upload" />
                      </div>
                      <CardTitle className="title-upload">
                        Importez votre fichier
                      </CardTitle>

                      <CardText className="type-file">XLS</CardText>
                      <p>
                        Glissez, déposez votre fichier ou cliquez ici pour
                        sélectionner votre fichier
                      </p>
                    </div>
                  </section>
                )}
              </Dropzone>
              <FlexmonsterReact.Pivot toolbar={true} 
        componentFolder="https://cdn.flexmonster.com/" width="100%" 
        ref="pivot"
        />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;