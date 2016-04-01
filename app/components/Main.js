import React from 'react';
import TopNav from './TopNav';
import Sidebar from './sidebar/Sidebar';

class Main extends React.Component {
  render() {
    return (
      <div>
        <TopNav/>
        <div className="container-fluid">
          <div className="row">
            <Sidebar/>
            <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Main