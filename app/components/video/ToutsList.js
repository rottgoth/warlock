import React from 'react';

class ToutsList extends React.Component {
  constructor(props) {
    super(props);
    this.touts = [
      { id: 1, name: 'Tout 1' },
      { id: 2, name: 'Tout 2' },
      { id: 3, name: 'Tout 3' }
    ]
  }
  render() {
    return (
      <ul>
        {this.touts.map((tout) => (
          <li key={tout.id}>{tout.name}</li>
        ))}
      </ul>
    )
  }
}

export default ToutsList