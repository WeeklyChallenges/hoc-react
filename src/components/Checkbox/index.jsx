import React from 'react'

export const Checkbox = ({value, onChange}) => {
  const handleOnChange = (event) => {
    const { checked } = event.target;
    onChange(checked);
  };

  return (
    <input type="checkbox" checked={value} onChange={handleOnChange}/>
  )
}
