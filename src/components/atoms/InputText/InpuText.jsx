import './InputText.scss';

const InpuText = ({ 
  value,
  name,
  id,
  type='text',
  style,
  placeholder,
  oninput,
}) => {
  const handleInput = ({ target }) => {
    oninput({ name, value: target.value });
  };
  return (
      <input
        data-testid='input-custom'
        type={type} 
        id={id} 
        name={name} 
        value={value} 
        placeholder={placeholder}
        className={`InputText InputText--${style}`}
        onInput={handleInput}/>
  );
};

export default InpuText;