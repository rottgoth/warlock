import React from 'react';

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Articles'
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

export default Articles