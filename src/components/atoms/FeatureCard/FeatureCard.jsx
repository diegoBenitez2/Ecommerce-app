import { FaRegCheckCircle, FaRegCreditCard, FaShippingFast, FaTree } from 'react-icons/fa';
import './FeatureCard.scss';

const FeatureCard = ({ background='light-gray', color='dark-primary', icon }) => {

  let iconComponent;
  switch (icon) {
    case 'delivery':
      iconComponent = <FaShippingFast size='1.3em'  />;
      break;
    case 'checkCircle':
      iconComponent = <FaRegCheckCircle size='1.3em'  />;
      break;
    case 'creditCard': 
      iconComponent = <FaRegCreditCard size='1.3em'  />;
    break;
    case 'recycled':
      iconComponent = <FaTree size='1.3em'  />;
      break;
    default:
      iconComponent = <FaShippingFast size='1.3em'  />;
      break;
  }
  return (
    <div className={`FeatureCard background-${background} color-${color}`}>
      {iconComponent}
      <h4 className='h4'>Next day as standard</h4>
      <p>Order before 3pm and get your order the next day as standard</p>
    </div>
  );
};

export default FeatureCard;