import React from 'react';
import { Link } from 'react-router';
import auth from '../utils/auth';

class TopNav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Warlock</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              {this.props.currentUser && (

                <li className="dropdown">
                  <a className="dropdown-toggle" data-toggle="dropdown" data-target="#" role="button">
                    {this.props.currentUser.name} <i className="fa fa-caret-down"></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#">
                        <i className="fa fa-cog"></i>
                        Settings
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={() => this.props.logout()}>
                        <i className="fa fa-off"></i>
                        Sign out
                      </a>
                    </li>
                  </ul>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default TopNav