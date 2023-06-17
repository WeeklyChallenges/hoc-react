import React, { useEffect, useState } from 'react'
import './index.css';

export const withValidation = (Component, {validate, validationMsg}) => (props) => {
  const [errorMsg, setErrorMsg] = useState('');

  const { triggerValidation, value, ...restProps } = props;

  useEffect(() => {
    if (!triggerValidation) return;


    if (validate?.(value) === true) {
      setErrorMsg('');
    } else {
      setErrorMsg(validationMsg);
    }
  }, [triggerValidation, value])
  

  return (
    <div className={`with-validation ${errorMsg ? 'with-validation--error' : ''}`}>
      <Component value={value} {...restProps} />
      {errorMsg && <p className='with-validation__error-msg'>{errorMsg}</p>}
    </div>
  )
}
