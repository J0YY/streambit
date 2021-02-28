import React, { Component } from 'react';
// import Nav from "../Header/nav";
import SearchIcon from '@material-ui/icons/Search';
import './Home.css';
import { Link } from 'react-router-dom';
import Hero from './Home/Hero/Hero';
// import PublicTradeSection from './Home/PublicTrade/PublicTradeSection';
// import TradeSection from './Home/Trade-Section/TradeSection';
import BlogSection from './Home/BlogSection/BlogSection';
import CallToAction from './Home/End-CTA/calltoaction';
import Nav from './Home/Hero/nav';
import { Fade, Slide, Zoom } from 'react-reveal';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <header>
          <div className="top">
            <Nav />
            <Fade top duration={1500}>
              <div className="head">
                <h1 style={{ fontFamily: 'Arial', color: 'white' }}>
                  Welcome to
                  <br />
                  StreamBits
                </h1>
                <p style={{ fontFamily: 'Arial', color: 'darkslategray' }}>
                  the ultimate educational streaming platform for mental health
                  and self-care
                </p>
                {/* <p>the public portfolio investment platform to learn, share, and grow</p> */}
              </div>
            </Fade>
            <div className="intro"></div>
          </div>
        </header>
        <BlogSection />
        <CallToAction />
      </div>
    );
  }
}

export default Home;
