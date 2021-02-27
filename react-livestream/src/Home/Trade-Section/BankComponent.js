import { ReactComponent as BoaIcon } from './logos_boa.svg';
import { ReactComponent as ChaseIcon } from './logos_chase.svg';
import { ReactComponent as VisaIcon } from './logos_visa.svg';
import { ReactComponent as TDIcon } from './logos_td.svg';

function BankComponent() {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <BoaIcon />
        <ChaseIcon />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '2em',
        }}>
        <VisaIcon />
        <TDIcon />
      </div>
    </div>
  );
}

export default BankComponent;
