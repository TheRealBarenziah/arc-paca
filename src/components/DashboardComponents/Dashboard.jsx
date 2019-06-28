
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
                  <img src="https://s2.qwant.com/thumbr/0x380/e/9/dda001677ac1394123b443c44de9f1d7d203f08842a7770356b1101332ebe1/dashboard.png?u=https%3A%2F%2Fagencyanalytics.com%2Fassets%2Ffeature%2Fscreenshot%2Fdashboard.png&q=0&b=1&p=0&a=1" width="100%" alt=""/>
                </CardText>
              </Card>
            </Row>
          </Col>

          <Col sm="8" className="sidebar-right">
            <Card body className="card-upload">
              <div className="btn-upload" />
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
