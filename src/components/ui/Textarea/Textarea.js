import React from 'react';
import './Textarea.scss';

function Textarea({ value = '', textareaId, labelText, textareaName, placeholder, isRequired, onChange }) {

  const onChangeHandler = (e) => {
    onChange(e.target.value)
  }

  return (
    <label className="textarea"> {labelText}
      <textarea
        name={textareaName}
        id={textareaId}
        className="textarea__item"
        placeholder={placeholder}
        required={isRequired}
        value={value}
        onChange={onChangeHandler}
        rows={4}
      />
      <span className="textarea__item-error" id={`${textareaId}-error`}></span>
      { /* span для валидации, которую можно будет добавить в дальнейшем */}
    </label>
  );
}

export default Textarea;