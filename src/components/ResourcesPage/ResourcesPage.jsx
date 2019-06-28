import React, { Component } from "react";
import './ResourcesPage.scss';
import ResourcesDisplay from "../ResourcesDisplay/ResourcesDisplay";
import { resourcesList } from '../../utils/resourcesList/resourcesList';
import { Container, Row, Col } from 'reactstrap';
import CheckBox from './CheckBox';


let myResourcesList = [...resourcesList]
let myUniqueLabels = []

// let idRessourcesList = this.refs.myId

export default class Ressources extends Component {
  constructor(props) {
    super(props)

    this.state = {
      myUniqueLabels: [],
      filteredResourcesList: [],
      checkboxs: [],
      myResourcesList: myResourcesList,
      state: { checked: false }
    }
  }

  handleCheckboxChange = event => {
    this.setState({ checked: event.target.checked })
  }

  isMyLabelNotInArrayAlready = () => myResourcesList.map((resourceObject) => {
    resourceObject.labels.map((label) => {
      if ((myUniqueLabels.filter((label2) => label2 !== label).length) === myUniqueLabels.length) {
        myUniqueLabels.push(label)
        return 0;
      }
    })
    const checkboxs = [];
    myUniqueLabels.map((labelString) => {
      checkboxs.push({
        value: labelString,
        isChecked: true
      })
    });

    this.setState({ myUniqueLabels: myUniqueLabels, checkboxs: checkboxs })
    return 0;
  })

  handleCheckChieldElement = (event) => {
    let checkboxs = this.state.checkboxs
    checkboxs.forEach(checkbox => {
      if (checkbox.value === event.target.value)
        checkbox.isChecked = event.target.checked
    })
    this.setState({ checkboxs: checkboxs });
    console.log('startin filtering');
    console.log(this.state.myResourcesList.length);
    //TODO Why Alaways empty
    // var filtereds = this.state.myResourcesList.filter((ressource) => {
    var filtereds = [];
    this.state.checkboxs.map((checkbox) => {

    this.state.myResourcesList.map((ressource) => {
        if (checkbox.isChecked) {
          // console.log('test : ' + checkbox.value + ' in ' + ressource.labels + " : " + ressource.labels.includes(checkbox.value));
          if (ressource.labels.includes(checkbox.value)) {
            filtereds.push(ressource);
          }
          // return ressource.labels.includes(checkbox.value) === true;
        }
      });
    });
    // console.log(filtereds);
    this.setState({ myResourcesList: filtereds })
  }

  componentDidMount() {
    this.isMyLabelNotInArrayAlready()
  }


  render() {
    return (
      <div className='containerRessources'>
        <Container>
          <Row>
            <Col md="3" className="colCheckbox">
              <h2 className="titleFilter">Filtres</h2>
              {
                this.state.checkboxs.map((checkbox) => {
                  return (<CheckBox handleCheckChieldElement={this.handleCheckChieldElement}  {...checkbox} />)
                })
              }
            </Col>
            <Col className="test" md="8">

              <ResourcesDisplay resourcesList={this.state.myResourcesList} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
