import React, { useState, useEffect, useRef, useContext } from 'react';
import { DispatchContext, StateContext } from '../../GlobalContex';

const Input = () => {
  const FETCHURL = 'https://apis.networkwestmidlands.com/Addresses/AddressByPostcode/';
  const COUNTY = 'West Midlands';
  const WAIT_INTERVAL = 2000;
  let timer = null;
  const filters = useContext(StateContext);
  const dispatcher = useContext(DispatchContext);
  const refInput = useRef();
  const [inputValue, setInputValue] = useState();
  const isInTheBoundaries = filters.state.isIn;
  const [isIn, toggleisIn] = useState(isInTheBoundaries);

  function handleInputChange() {
    const { current } = refInput;
    clearTimeout(timer);
    setInputValue(current.value);
  }
  function resetAllFilters() {
    dispatcher.dispatch({
      type: 'updateFilters',
      payload: []
    });
  }
  function handleSearchResults(res) {
    if (res === COUNTY) {
      let arr = filters.state.selectedJobs;
      if (arr.indexOf(inputValue) < 0) {
        arr = [...arr, inputValue, COUNTY];
      } else {
        arr = arr.filter(el => el !== inputValue && el !== COUNTY);
      }
      dispatcher.dispatch({
        type: 'updateFilters',
        payload: arr
      });
    } else {
      resetAllFilters();
    }
  }
  function triggerChange() {
    const url = encodeURI(`${FETCHURL}${inputValue}`);
    if (inputValue !== '') {
      fetch(url)
        .then(response => response.text())
        .then(str => {
          const location = JSON.parse(str);
          if (location.length > 0) {
            handleSearchResults(location[0].county);
            toggleisIn(location[0].county === COUNTY);
          }
        });
    } else {
      if (!isIn) {
        resetAllFilters(COUNTY);
      }
      toggleisIn(null);
      handleSearchResults();
    }
  }

  function delayTrigger() {
    timer = setTimeout(() => {
      triggerChange();
    }, WAIT_INTERVAL);
  }

  useEffect(() => {
    delayTrigger();
  }, [inputValue]);

  useEffect(() => {
    dispatcher.dispatch({
      type: 'isInTheCounty',
      payload: isIn
    });
  }, [isIn, dispatcher]);

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
    />
  );
};

export default Input;
