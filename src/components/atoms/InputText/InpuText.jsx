import './InputText.scss';

const InpuText = ({ 
  value,
  name,
  id,
  color='white',
  background = 'border-dark',
  oninput,
}) => {
  const handleInput = ({ target }) => {
    oninput({ name, value: target.value });
  };
  return (
      <input
        data-testid='input-custom'
        type="text" 
        id={id} 
        name={name} 
        value={value} 
        placeholder='type your text'
        className={`InputText background-${background} color-${color}`}
        onInput={handleInput}/>
  );
};

export default InpuText;