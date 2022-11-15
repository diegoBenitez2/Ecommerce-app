import './InputText.scss';

const InpuText = ({ value, name, id, background='border-dark', color='white' }) => {
  return (
      <input 
        type="text" 
        id={id} 
        name={name} 
        value={value} 
        placeholder='type your text'
        className={`InputText background-${background} color-${color}`}/>
  );
};

export default InpuText;