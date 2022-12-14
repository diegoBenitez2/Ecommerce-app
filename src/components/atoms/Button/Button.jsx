import { FaAngleDown } from 'react-icons/fa';
import './Button.scss';

const Button = ({ 
  text='Button', 
  size='small', 
  iconColor, 
  style,
  disabled,
  onclick}) => {
  return (
    <button
      data-testid='btn-custom'
      disabled={disabled}
      className={`Button Button--${size} Button--${style}`}
      onClick={onclick}>
      <span>{ text }</span>
      {
        iconColor && <FaAngleDown 
                        color={iconColor} 
                        className="Button__icon"
                        data-testid='btn-icon' /> 
      }
      
    </button>
  );
};

export default Button;