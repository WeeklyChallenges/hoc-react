import React from 'react'

export const Input = ({value, onChange, isSecure}) => {
  const handleOnChange = (event) => {
    const { value } = event.target;
    onChange(value);
  };

  return (
    <input value={value} type={`${isSecure ? 'password' : 'text'}`} onChange={handleOnChange} />
  )
}
