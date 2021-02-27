import Divider from "../Divider"
import "./PublicTrade.scss";
import TradeIndicator from "./TradeIndicator";
import { Avatar } from "@material-ui/core";

const tradeStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: "0.6em 1em",
    marginLeft: "-0.4em",
    background: "white",
    boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.25)",
    borderRadius: "15px",
}

function PublicTrade({ Avatar, ticker, shares, type }) {
    ticker = ticker.toUpperCase();
    type = type.toLowerCase();
    let [sharesInt, sharesFloat] = shares.toString().split(".")
    //when adding commas, we start from the end -> reverse string
    sharesInt = sharesInt.split("").reverse().join("")
    //run operation
    sharesInt = sharesInt.replace(/(\d{3})/g, `$1,`)
    //reverse string to get original
    sharesInt = sharesInt.split("").reverse().join("")
    shares = sharesInt + ((sharesFloat != undefined) ? ("." + sharesFloat) : "") + " Shares";
    return (
        <div style={tradeStyle} className="public-trade-card">
            {/* <Avatar src="https://i.pinimg.com/originals/e8/2f/28/e82f28cda35be3cb8c78b40f23b8b006.jpg" /> */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ width: "3.5em", height: "3.5em", borderRadius: "50%", backgroundColor: "cornflowerblue" }} />
                <p style={{ fontSize: "1.2em", paddingLeft: "0.4em" }}>James Astley</p>
            </div>
            <div className="trade-info">
                <div style={{ marginRight: "1.2em" }} className="share-info">
                    <p className="asset-title">{ticker}</p>
                    <p className="num-shares">{shares}</p>
                </div>
                <Divider />
                <TradeIndicator style={{ marginLeft: "1.2em" }} type={type} />
            </div>
        </div>
    )
}

export default PublicTrade