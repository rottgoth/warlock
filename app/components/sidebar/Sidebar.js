import React from 'react';
import { Link } from 'react-router';
import data from './data';

class Sidebar extends React.Component {
  render() {
    return (
      <div className="col-sm-3 col-md-2 sidebar">
        <nav>
          {data.getAll().map((section, index) => (
            <ul key={index} className="nav nav-sidebar">
              <li className="item">
                <Link activeClassName="active" to={section.url}>
                  <i className={section.icon}></i>
                  {section.name}
                </Link>
              </li>
              {section.subsections.map((subsection, subIndex) => (
                <li className="subitem" key={subIndex}>
                  <Link activeClassName="active" to={subsection.url}>
                    {subsection.name}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </nav>
      </div>
    )
  }
}

export default Sidebar