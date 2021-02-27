import { ReactComponent as AmazonIcon } from './logos_amazon.svg';
import { ReactComponent as EthereumIcon } from './logos_ethereum.svg';
import { ReactComponent as TeslaIcon } from './logos_tesla.svg';

function AssetComponent() {
  return (
    <div
      style={{
        margin: '0 auto',
        width: '60%',
        display: 'flex',
        justifyContent: 'space-between',
      }}>
      <AmazonIcon />
      <EthereumIcon style={{ paddingLeft: '1.5em' }} />
      <TeslaIcon style={{ paddingLeft: '1.5em' }} />
    </div>
  );
}

export default AssetComponent;
