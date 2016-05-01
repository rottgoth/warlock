import React from 'react';
import TopNav from './TopNav';
import Sidebar from './sidebar/Sidebar';
import auth from '../utils/auth';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: auth.loggedIn()
    }
    this.updateAuth = this.updateAuth.bind(this)
  }

  updateAuth(loggedIn) {
    this.setState({
      loggedIn: !!loggedIn
    })
  }
  componentWillMount() {
    auth.onChange = this.updateAuth
    auth.login()
  }
  logout() {
    console.log('LOGOUT');
    auth.logout();
    this.history.pushState(null, 'login');
  }
  render() {
    this.contentClasses = this.state.loggedIn ? (
      'col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2'
    ) : (
      'col-sm-12'
    )
    return (
      <div>
        <TopNav currentUser={auth.getUser()} logout={this.logout}/>
        <div className="container-fluid">
          <div className="row">
            {this.state.loggedIn && <Sidebar/>}
            <div className={this.contentClasses + ' main'}>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Main