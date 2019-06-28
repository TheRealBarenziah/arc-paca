import React, { Component } from "react";
import { Row, Col, Card, Button, CardTitle, CardText } from "reactstrap";
import Dropzone, { useDropzone } from "react-dropzone";
import { ExcelRenderer } from "react-excel-renderer";
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

  // convertIntoJSON(fileObj, (err, resp) => {
  //   if(err){
  //     console.log(err);
  //   }
  //   else{
  //     console.log(resp.cols)
  //     console.log(resp.rows)
  //   }
  // });

  handleOnDrop = (acceptedFiles, rejectedFiles, event) => {
    console.log(acceptedFiles);
    console.log("rejected files", rejectedFiles);
    // const reader = new FileReader()

    // reader.onabort = () => console.log('file reading was aborted')
    // reader.onerror = () => console.log('file reading has failed')
    // reader.onload = () => {
    //   // Do whatever you want with the file contents
    //   const binaryStr = reader.result
    //   console.log(binaryStr)
    // }
    // acceptedFiles.forEach(file => reader.readAsBinaryString(file))

    // let fileObj = event.target.files[0];
    let fileObj = acceptedFiles[0];
    //just pass the fileObj as parameter
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
                <h3>Convertir</h3>
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
                          <div className="cloud-upload">
                            <ion-icon name="cloud-upload" />
                          </div>
                          <CardText className="type-file">XLS</CardText>
                          <p>
                            Glissez, déposez votre fichier ou cliquez ici pour
                            sélectionner votre fichier
                          </p>
                        </div>
                        <aside>
                          <Card body className="card-news2">
                            <p>Outils</p>
                            
                            <Button className="buttonJSON"
                              onClick={() => alert("Conversion en JSON")} outline color="primary"
                            >JSON
                            </Button>{" "}
                            
                            {/* <Button
                              onClick={() => alert("Conversion en XML")} outline color="secondary"
                            >XML
                            </Button>{" "}

                            <Button
                              onClick={() => alert("Conversion en CSV")} outline color="success"
                            >CSV
                            </Button>{" "}

                            <Button
                              onClick={() => alert("Conversion en TEXTE")} outline color="info"
                            >Text-format
                            </Button>{" "} */}

                          </Card>
                        </aside>
                      </section>
                    )}
                  </Dropzone>
                </CardText>
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
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
