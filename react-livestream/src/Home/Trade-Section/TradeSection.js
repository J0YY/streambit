import "./TradeSection.scss"
import Card from './Card';
import { ReactComponent as HandIcon } from "../../Assets/Icons/hand-icon.svg";
import { ReactComponent as AssetIcon } from "../../Assets/Icons/asset-icon.svg";
import { ReactComponent as TradeIcon } from "../../Assets/Icons/trade-icon.svg";

import BankComponent from './BankComponent';
import AssetComponent from './AssetComponent';
import TradeComponent from './TradeComponent';

let handIconComponent = <HandIcon />
let assetIconComponent = <AssetIcon />
let tradeIconComponent = <TradeIcon />

let bankImgsComponent = <BankComponent />
let assetImgsComponent = <AssetComponent />
let tradeImgsComponent = <TradeComponent />

let [bankData, assetData, tradeData] = [{
    icon: handIconComponent,
    title: "Add Funds",
    desc: "Add a bank account or card to instantly begin trading.",
    imgsComponent: bankImgsComponent
},
{
    icon: assetIconComponent,
    title: "Find An Asset",
    desc: "Search for an existing asset with its ticker or name. Click on the asset.",
    imgsComponent: assetImgsComponent
},
{
    icon: tradeIconComponent,
    title: "Trade",
    desc: "Choose the type of trade you would like to make on the asset. Then confirm.",
    imgsComponent: tradeImgsComponent
}]

function TradeSection() {
    return (
        <div className="trade-section">
            <div className="trade-section-title">
                <h2 className="section-title">Trading has never been easier</h2>
                <Card style={{ marginTop: "10em" }} icon={assetData.icon} title={assetData.title} desc={assetData.desc} imgsComponent={assetData.imgsComponent} />
            </div>
            <div className="trade-section-cards">
                <Card style={{ marginTop: "6em" }} icon={bankData.icon} title={bankData.title} desc={bankData.desc} imgsComponent={bankData.imgsComponent} />
                <Card style={{ marginTop: "6em" }} icon={tradeData.icon} title={tradeData.title} desc={tradeData.desc} imgsComponent={tradeData.imgsComponent} />
            </div>
        </div>
    )
}

export default TradeSection;