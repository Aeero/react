import React, { Component } from 'react';
import { Link } from 'react-router';

import '../styles/nav.css';

class Nav extends Component {
  static defaultProps = {
    label: '首页'
  };
  static propTypes = {
    label: React.PropTypes.string.isRequired
  };
  constructor(props) {
    super(props);
    this.navInfo = [{
      label: '首页',
      route: '/'
    }, {
      label: '话题',
      route: '/topic'
    }, {
      label: '发现',
      route: '/explore'
    }, {
      label: '消息',
      route: '/info'
    }];
  }
  render() {
    const label = this.props.label;
    return (
      <ul>
        {
          this.navInfo.map((e) => {
            return (
              <li key={e.label} className={label === e.label ? 'select' : ''}>
                <Link to={e.route}>{e.label}</Link>
              </li>
            );
          })
        }
      </ul>
    );
  }
}

export default Nav;
