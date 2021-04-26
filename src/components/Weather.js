import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

import WeatherDay from './WeatherDay.js';



class Weather extends React.Component {
  render() {
    console.log(this.props.weatherData);
    return (
      <ListGroup>
        {this.props.weatherData.map((day, index) => (
          <WeatherDay
            key={index}
            date={day.date}
            description={day.description}
          />
        ))}
      </ListGroup>
    );
  }
}

export default Weather;