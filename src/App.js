import React from 'react';
import './App.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: ''
    };
  }
  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.city);
    axios.get()
  }
  render() {
    return (
      <>
        <h1>City Explorer</h1>
        <Form onSubmit={this.handleFormSubmit}>
          <Form.Group controlID="city">
            <Form.Label>Enter city name</Form.Label>
            <Form.Control value={this.state.city} onInput={event => this.setState({city: event.target.value})}></Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Explore!
          </Button>
        </Form>
      </>
    )
  }
}

export default App;
