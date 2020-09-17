import React from 'react';
import './Input.scss';

function Input({value = '', view, inputId, labelText, inputType, inputName, placeholder, isRequired, onChange}) {

  const onChangeHandler = (e) => {
    onChange(e.target.value)
  }

  return (
    <label className={`input ` + (view ? `input_${view}` : '')} > {labelText}
    <input
      type={inputType}
      name={inputName}
      id={inputId}
      className={`input__item ` + (view ? `input__item_${view}` : '')}
      placeholder={placeholder}
      required={isRequired}
      value={value}
      onChange={onChangeHandler} 
      />
    <span className="input__item-error" id={`${inputId}-error`}></span>
  { /* span для валидации, которую можно будет добавить в дальнейшем */}
  </label>
  );
}

export default Input;