import React from 'react'

const Input = ({ id, label, onChange, value, type, onBlur, placeholder, error}) => {
    return (
      <>
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          name={id}
          onChange={onChange}
          value={value}
          type={type}
          onBlur={onBlur}
          placeholder={placeholder}
        />
        {error && <p>{error}</p>}
      </>
    );
  };
  

export default Input