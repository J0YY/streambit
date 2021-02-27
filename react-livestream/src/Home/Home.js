import React from 'react'
import Nav from '../Header/nav';
import "./Home.css";
import Hero from "./Hero/Hero";
import PublicTradeSection from './PublicTrade/PublicTradeSection';
import TradeSection from './Trade-Section/TradeSection';
import BlogSection from './BlogSection/BlogSection';
import CallToAction from './End-CTA/calltoaction';

function Home() {
    return (
        <div className="home">
            <Nav />
            <Hero />
            <TradeSection />
            <PublicTradeSection />
            <BlogSection />
            <CallToAction />
        </div>
    )
}

export default Home
