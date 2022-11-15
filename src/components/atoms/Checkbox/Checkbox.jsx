import './Checkbox.scss';

const Checkbox = ({ text='checkbox', id, name }) => {
  return (
    <div className='Checkbox'>
      <input 
        type='checkbox' 
        id={id} 
        name={name}/>
      <label htmlFor={id}>{text}</label>
    </div>
  );
};

export default Checkbox;