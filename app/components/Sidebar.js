import React from 'react';
import { Link } from 'react-router'

class Sidebar extends React.Component {
  render() {
    return (
      <div className="col-sm-3 col-md-2 sidebar">
        <ul className="nav nav-sidebar">
          <li className="active"><a href="#">Dashboard</a></li>
          <li><a href="#">Settings</a></li>
          <li><Link to={"/memberships"}>Memberships</Link></li>
          <li><Link to={"/watermarks"}>Watermarks</Link></li>
          <li><Link to={"/distribution"}>Distribution</Link></li>

          <li><a href="#">Video</a></li>
          <li><Link to={"/touts/pending"}>Pending</Link></li>
          <li><Link to={"/touts/scheduled"}>Scheduled</Link></li>
          <li><Link to={"/touts/published"}>Published</Link></li>
          <li><Link to={"/touts/rejected"}>Rejected</Link></li>
          <li><Link to={"/touts/new"}>Upload</Link></li>

          <li><a href="#">Smart Article</a></li>
          <li><a href="#">Players</a></li>
          <li><a href="#">Analytics</a></li>
          <li><a href="#">Organizations</a></li>
          <li><a href="#">Brands</a></li>
          <li><a href="#">Marketplace</a></li>
        </ul>
      </div>
    )
  }
}

export default Sidebar