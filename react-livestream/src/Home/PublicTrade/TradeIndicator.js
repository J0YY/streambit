import './TradeIndicator.scss';

function TradeIndicator({ style, type, size = 1 }) {
  return (
    <div
      style={{
        borderRadius: `${0.8125 * (size > 1 ? size / 2 : size)}rem`,
        width: `${3.375 * (size > 1 ? size / 1.2 : size)}rem`,
        height: `${1.625 * (size > 1 ? size / 1.2 : size)}rem`,
        fontSize: `${0.9 * (size > 1 ? size / 1.5 : size)}em`,
        ...style,
      }}
      className={
        'trade-indicator ' + (type == 'sell' ? 'trade-sell' : 'trade-buy')
      }>
      {type == 'sell' ? 'SELL' : 'BUY'}
    </div>
  );
}

export default TradeIndicator;
