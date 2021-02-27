import React, { Component } from 'react';
import GetStartedButton from './GetStartedButton';
// import SearchIcon from "@material-ui/icons/Search";
import './Hero.css';
import StockShowcase from './StockShowcase';

class Hero extends Component {
  render() {
    return (
      <header>
        <div className="head">
          <h1>
            Welcome to
            <br />
            TradeHub
          </h1>
          <p>The premiere public trading platform for your trading dreams.</p>
          {/* <p>the public portfolio investment platform to learn, share, and grow</p> */}
        </div>
        <div className="intro">
          <GetStartedButton />
          <StockShowcase />
        </div>
      </header>
    );
  }
}

export default Hero;
