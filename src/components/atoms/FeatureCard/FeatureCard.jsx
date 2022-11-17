import { FaRegCheckCircle, FaRegCreditCard, FaShippingFast, FaTree } from 'react-icons/fa';
import './FeatureCard.scss';

const FeatureCard = ({ 
  title, 
  desc,
  iconType, 
  color = 'dark-primary', 
  background = 'light-gray',  }) => {

  let icon;
  switch (iconType) {
    case 'delivery':
      icon = <FaShippingFast size='1.3em'  />;
      break;
    case 'checkCircle':
      icon = <FaRegCheckCircle size='1.3em'  />;
      break;
    case 'creditCard': 
      icon = <FaRegCreditCard size='1.3em'  />;
    break;
    case 'recycled':
      icon = <FaTree size='1.3em'  />;
      break;
    default:
      icon = <FaShippingFast size='1.3em'  />;
      break;
  }
  return (
    <div className={`FeatureCard background-${background} color-${color}`}>
      {icon}
      <h4 className='h4'>{ title }</h4>
      <p>{ desc }</p>
    </div>
  );
};

export default FeatureCard;