import TradeIndicator from '../PublicTrade/TradeIndicator';

function TradeComponent() {
  return (
    <div style={{ margin: '0 auto', display: 'flex', alignItems: 'center' }}>
      <TradeIndicator type={'sell'} size={2.5} />
      <TradeIndicator style={{ marginLeft: '1.5em' }} type={'buy'} size={2.5} />
    </div>
  );
}

export default TradeComponent;
