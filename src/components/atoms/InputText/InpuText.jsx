import './InputText.scss';

const InpuText = ({ 
  value,
  name,
  style,
  oninput,
  ...props
}) => {
  const handleInput = ({ target }) => {
    oninput({ name, value: target.value });
  };
  return (
      <input
        {...props}
        data-testid='input-custom'
        name={name}
        value={value}
        className={`InputText InputText--${style}`}
        onInput={handleInput}/>
  );
};

export default InpuText;