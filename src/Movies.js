import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class Movies extends React.Component {
  render() {
    let allListGroups = this.props.movieData.map((selected, index) => (
      <ListGroup.Item key={index}>{`${selected.title}: ${selected.description}`}</ListGroup.Item>
  
    ))
    console.log(this.props.movieData);
    return (
      <ListGroup>
        {allListGroups}
      </ListGroup>
    );
  }
}

export default Movies;