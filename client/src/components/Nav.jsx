import React from 'react';
import { Link } from "react-router-dom";
import { PATHS } from '../constants/path';

export default class Nav extends React.Component {
  render() {
    return <nav>
      <ul>
        <li><Link to={PATHS.HOME}>Home</Link></li>
        <li><Link to={PATHS.ABOUT}>About</Link></li>
        <li><Link to={PATHS.CONTACT}>Contact</Link></li>
      </ul>
    </nav>
  }
}