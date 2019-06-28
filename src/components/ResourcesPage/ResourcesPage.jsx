import React, { Component } from "react";
import ResourcesDisplay from "../ResourcesDisplay/ResourcesDisplay";
import { resourcesList } from '../../utils/resourcesList/resourcesList';
import { Container, Row, Col } from 'reactstrap';
import './ResourcesPage.scss';


let myResourcesList = [...resourcesList]
let myUniqueLabels = []

export default class Ressources extends Component {
  constructor(props) {
    super(props)

    this.state = {
      myUniqueLabels: [],
      filteredResourcesList: []
    }
  }

  isMyLabelNotInArrayAlready = () => myResourcesList.map((resourceObject) => {
    resourceObject.labels.map((label) => {
      if ((myUniqueLabels.filter((label2) => label2 !== label).length) === myUniqueLabels.length) {
        myUniqueLabels.push(label)
        return 0;
      }
    })
    this.setState({ myUniqueLabels: myUniqueLabels })
    return 0;
  })

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
              {myUniqueLabels.map((labelString) => {
                return (
                  <Row className="rowCheckbox">
                    <label>
                      <input
                        type='checkbox'
                        value='sddskdqs'
                        onClick={() => console.log('...')} />
                    </label>
                    <Col><p>{labelString}</p></Col>
                  </Row>
                )
              }
              )}
            </Col>
            <Col className="test" md="8">

              <ResourcesDisplay resourcesList={resourcesList} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
