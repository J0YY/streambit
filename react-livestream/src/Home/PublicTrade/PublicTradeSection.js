import PublicTrade from './PublicTrade';
import './PublicTradeSection.scss';

function PublicTradeSection() {
  return (
    <div className="public-trade-section">
      <h2 className="section-title">Learning has never been simpler</h2>
      <p className="section-desc">
        See what others are buying and incorporate that insight into your
        investing.
      </p>

      <div className="public-trades-container">
        <div className="inner-container">
          <PublicTrade shares={13000} ticker="APPL" type="BUY" />
          <PublicTrade shares={13000} ticker="APPL" type="BUY" />
          <PublicTrade shares={13000} ticker="APPL" type="BUY" />
        </div>
        <div className="inner-container">
          <PublicTrade shares={13000} ticker="APPL" type="BUY" />
          <PublicTrade shares={13000} ticker="APPL" type="BUY" />
          <PublicTrade shares={13000} ticker="APPL" type="BUY" />
        </div>
      </div>
    </div>
  );
}

export default PublicTradeSection;
