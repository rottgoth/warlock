import React from 'react';

class Touts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Published Videos'
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
      </div>
    )
  }
}

export default Touts