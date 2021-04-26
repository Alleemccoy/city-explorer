import React from 'react';
import Table from 'react-bootstrap/Table';

class Movies extends React.Component {
  render() {
    return (
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Movie</th>
            <th>Movie Summary</th>
          </tr>
        </thead>
        <tbody>
          {this.props.movieData.map((selected, index) => (
            <Movies
            key={index}
            title={selected.title}
            overview={selected.overview}
            />
          ))}
        </tbody>
      </Table>
    );
  }
}

export default Movies;
