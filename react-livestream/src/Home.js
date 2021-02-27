import React, { Component } from 'react';
// import Nav from "../Header/nav";
import SearchIcon from "@material-ui/icons/Search";
import "./Home.css";
import { Link } from "react-router-dom";
import Hero from "./Home/Hero/Hero";
import PublicTradeSection from './Home/PublicTrade/PublicTradeSection';
import TradeSection from './Home/Trade-Section/TradeSection';
import BlogSection from './Home/BlogSection/BlogSection';
import CallToAction from './Home/End-CTA/calltoaction';

class Home extends Component {
  render() {
    return (
    <div className="home">
      <header>
        {/* <Nav /> */}
        <div className="head">
          <h1>Welcome to< br />StreamBits</h1>
          <p>the ultimate educational streaming platform for mental health and self-care</p>
          {/* <p>the public portfolio investment platform to learn, share, and grow</p> */}
        </div>
        <div className="intro">

        </div>
      </header>

        <Hero />
        <TradeSection />
        <PublicTradeSection />
        <BlogSection />
        <CallToAction />
    </div>
    );
  }
}

export default Home;