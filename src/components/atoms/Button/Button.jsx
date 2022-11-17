import { FaAngleDown } from 'react-icons/fa';
import './Button.scss';

const Button = ({ 
  text='Button', 
  size='small', 
  iconColor, 
  background='border-dark', 
  color='dark-primary',
  onclick}) => {
  return (
    <button
      className={`Button Button--${size} background-${background} color-${color}`}
      onClick={onclick}>
      <span>{ text }</span>
      {
        iconColor && <FaAngleDown 
                        color={iconColor} 
                        className="Button__icon" /> 
      }
      
    </button>
  );
};

export default Button;