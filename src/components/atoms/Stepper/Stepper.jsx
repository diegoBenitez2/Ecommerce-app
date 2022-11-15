import './Stepper.scss';
import { FaPlus, FaMinus } from 'react-icons/fa';

const Stepper = ({ name, id, value, handleStep }) => {
  const handleMinusCount = () => {
    if (value > 0 ) {
      handleStep(value - 1);
    }
  };
  const handlePlusCount = () => {
    handleStep(value + 1);
  };

  return (
    <div className='Stepper'>
      <button 
        className='Stepper__controls'
        onClick={handleMinusCount}>
          <FaMinus color='#CAC6DA' size='.8em' />
        </button>
        <input type='number' id={id} name={name} value={value} />
      <button 
        className='Stepper__controls'
        onClick={handlePlusCount}>
          <FaPlus color='#CAC6DA' size='.8em' />
      </button>
    </div>
  );
};

export default Stepper;