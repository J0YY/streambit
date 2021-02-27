import LineGraph from "./LineGraph.js";
import { ReactComponent as AppleIcon } from "./stock_icons/logos_apple.svg"
import { ReactComponent as ShopifyIcon } from "./stock_icons/logos_shopify.svg"
import { ReactComponent as BTCIcon } from "./stock_icons/logos_btc.svg"
import { ReactComponent as UpIcon } from "./up-arrow.svg"
import "./StockShowcase.scss"
import Divider from "../Divider.js";
import React from "react";

const Icons = [{
    icon: <AppleIcon />,
    name: "Apple",
    ticker: "APPL"
},
{
    icon: <ShopifyIcon />,
    name: "Shopify",
    ticker: "SHOP"
},
{
    icon: <BTCIcon />,
    name: "Bitcoin",
    ticker: "BTC"
}]

function StockIcon({ icon, name, ticker }) {
    return (
        <div className="showcase-stockinfo">
            <div className="stock-icon">
                {icon}
            </div>
            <div className="stock-info">
                <p className="name">{name}</p>
                <p className="ticker">{ticker}</p>
            </div>
        </div>
    )
}

function PriceInfo({ ticker }) {
    let price = 15000; // get price using ticker
    let changeType = "up";
    let change = 5.0
    let changePercent = 3.1

    let [priceInt, priceFloat] = price.toString().split(".")
    priceInt = priceInt.split("").reverse().join("")
    priceInt = priceInt.replace(/(\d{3})/g, "$1,")
    priceInt = priceInt.split("").reverse().join("")
    let priceStr = '$' + priceInt + (priceFloat != undefined ? ("." + priceFloat) : "")
    return (
        <div className="showcase-price-info">
            <div className="price-info">
                <p>{`${priceStr}`}</p>
                <UpIcon style={{transform: "scale(1.2)"}} />
            </div>
            <div className="price-change-info">
                <p style={{color: changeType == "up" ? "#1A498F" : "#B1583C"}}>{`${changeType == "up" ? "+" : "-"}${change}`}</p>
                <Divider height={"1.8em"} />
                <p style={{color: changeType == "up" ? "#1A498F" : "#B1583C"}}>{changePercent + "%"}</p>
            </div>
        </div>
    )
}
function StockShowcaseElement({ icon, name, ticker }) {
    return (
        <div className="stock-showcase-element">
            <StockIcon icon={icon} name={name} ticker={ticker} />
            <div />
            {/* <LineGraph /> */}
            <PriceInfo ticker={ticker} />
        </div>
    )
}

function StockShowcase() {
    return (
        <div className="stock-showcase">
            {Icons.map(v => <StockShowcaseElement icon={v.icon} name={v.name} ticker={v.ticker} />)}
        </div>
    )
}

export default StockShowcase;