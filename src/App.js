import React from 'react';
import './App.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Weather from './components/Weather.js';
import axios from 'axios';
import Movies from './components/Movies.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
      cityData: '',
      weatherData: [],
      error: '',
      movie: [],
    };
  }
  handleFormSubmit = async (event) => {
    try {
      event.preventDefault();
      let cityData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.city}&format=json`);
      let cityICareAboutData = cityData.data[0];
      console.log('We out herr', cityData.data[0]);
      this.setState({
        lat: cityData.data[0].lat,
        lon: cityData.data[0].lon,
        cityData: cityICareAboutData
      });


      this.getWeatherData();
      this.getMovieData();
    } catch (err) {
      console.log(err.message);
    }
  }

  getWeatherData = async () => {
    try {
      const weatherData = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/weather`,
        {
          params:
          {
            lat: this.state.lat,
            lon: this.state.lon
          }
        })
      this.setState({
        weatherData: weatherData.data
      })
    } catch (err) {
      console.log(err);
      this.setState({ error: err.message });
    }
  }

  getMovieData = async () => {
    try {
      await axios.get(`${process.env.REACT_APP_BACKEND_URL}/movies`,
        {
          params: {
            city: this.state.city
          },
        })
        .then(response => {
          console.log(response.data)
          this.setState({ movie: response.data })
        })
        .catch(err => { console.error(err) })

    } catch (error) {
      console.error(error);
    }

  }

  render() {
    return (
      <>
        <h1>City Explorer</h1>
        <Form onSubmit={this.handleFormSubmit}>
          <Form.Group controlId="city">
            <Form.Label>City name</Form.Label>
            <Form.Control value={this.state.city} onInput={event => this.setState({ city: event.target.value })}></Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        {this.state.error ? <h3>{this.state.error}</h3> : ''}
        { this.state.cityData.lat !== undefined ?

          <>
            <Jumbotron>
              <h3>{this.state.cityData.display_name}</h3>
              <h5>{this.state.cityData.lat}, {this.state.cityData.lon}</h5>
              <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=13`} alt={`Map of ${this.state.cityData.display_name}`} />
            </Jumbotron>
            <Weather weatherData={this.state.weatherData} />
            <Movies movieData={this.state.movie} />
          </>
          : ''}
      </>
    )
  }
}

export default App;
