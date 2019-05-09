import { useState } from 'react';

export const useFormInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [valid, setValid] = useState(false);

  const inputChangeHandler = event => {
    setInputValue(event.taget.value);
    if (event.target.value.trim() === '') setValid(false);
    else setValid(true);
  };
  return {
    value: inputValue,
    onChange: inputChangeHandler,
    validity: valid
  };
};
