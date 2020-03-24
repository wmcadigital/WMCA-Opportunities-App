import React, { useState, useEffect, useRef } from 'react';
import { DispatchContext, StateContext } from '../../GlobalContex';

const Input = props => {
  const FETCHURL = 'https://apis.networkwestmidlands.com/Addresses/AddressByPostcode/';
  const WAIT_INTERVAL = 1500;
  let timer = null;
  const refInput = useRef();
  const [inputValue, setInputValue] = useState('');

  function handleInputChange() {
    const { current } = refInput;
    clearTimeout(timer);
    setInputValue(current.value);
  }
  function triggerChange() {
    const val = inputValue;
    const url = encodeURI(`${FETCHURL}${val}`);
    if (val !== '') {
      fetch(url)
        .then(response => response.text())
        .then(str => {
          let location = JSON.parse(str);
          console.log(location);
        });
    }
  }

  useEffect(() => {
    timer = setTimeout(() => {
      triggerChange();
    }, WAIT_INTERVAL);
  }, [inputValue]);

  return (
    <input
      className="pure-u-1-1"
      type="text"
      name="text"
      id="text"
      value={inputValue}
      data-val="true"
      data-val-required="Please provide a value for Name"
      onChange={() => {
        handleInputChange();
      }}
      ref={refInput}
    ></input>
  );
};

export default Input;
