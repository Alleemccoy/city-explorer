import React from 'react';
import './App.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state // need to finish this

    this.state = {
      city: ''
      cityData: {}
    };
  }
  handleFormSubmit = async(event) => {
    event.preventDefault();
    console.log(this.state.city);
    try {
      let cityData = await axios.get ();
    axios.get() //need to get this from LocationIQ - can find by rewatching recording
  }
  render () {
    return (
      <>
        <h1>City Explorer</h1>
        <Form onSubmit={this.handleFormSubmit}>
          <Form.Group controlID="city">
            <Form.Control value={this.state.city} onInput={e => this.setState({city: e.target.value})}></Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Explore!
          </Button>
        </Form>
        {this.state.cityData.lat !== undefined ? <Jumbotron>
          <h3>{this.state.cityData.display_name}</h3>
          <h5>{this.state.cityData.lat}, {this.stateCityData.lon}</h5>

        </Jumbotron>}
      </>
    )
  }
}

export default App;
