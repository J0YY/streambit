import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li className="logo">
            <Link
              add
              style={{
                textDecoration: 'none',
                color: 'black',
                fontFamily: 'Arial',
              }}
              to="/">
              Stream<span>Bits</span>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link
              add
              style={{
                textDecoration: 'none',
                color: 'black',
                fontFamily: 'Arial',
              }}
              to="/streams">
              Watch
            </Link>
          </li>
          <li>
            <Link
              add
              style={{
                textDecoration: 'none',
                color: 'black',
                fontFamily: 'Arial',
              }}
              to="/stream/new">
              Stream
            </Link>
          </li>
          <li>
            <Link
              add
              style={{
                textDecoration: 'none',
                color: 'black',
                fontFamily: 'Arial',
              }}
              to="/messaging">
              Connect 🥺
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
