import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class WeatherDay extends React.Component {
  render() {
    return(
      <ListGroup>
        {`Date: ${this.props.date} || ${this.props.description}`}
      </ListGroup>
    )
  }
}

export default WeatherDay;
