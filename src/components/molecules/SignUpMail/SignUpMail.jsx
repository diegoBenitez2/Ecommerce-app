import React, { useState } from 'react';
import Button from '@atoms/Button/Button';
import InpuText from '@atoms/InputText/InpuText';
import './SignUpMail.scss';


function SignUpMail({ 
  onSignMail,
  onInput,
  value,
  name,
}) {
  const [invalid, setInvalid] = useState(false);

  const handlerInputMail = ({ name, value }) => {
    // eslint-disable-next-line no-useless-escape
    const regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (value.match(regexMail)) {
      setInvalid(false);
    } else {
      setInvalid(true);
    }
    onInput({ name, value });
  };

  return (
    <div className='SignUpMail'>
      <div className='SignUpMail__wrapper'>
        <InpuText 
          id='sing-up'
          name={name}
          style={'primary'}
          placeholder='your@email.com'
          value={value}
          oninput={handlerInputMail}
          maxLength={50} />
        <Button 
          text='Sign Up'
          size='medium'
          style={'fifty'}
          disabled={invalid}
          onclick={onSignMail} />
      </div>
      { 
        invalid &&
        <span className='SignUpMail__error'>El formato invalido</span>
      }
    </div>
  );  
}

export default SignUpMail;