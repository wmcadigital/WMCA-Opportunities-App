import React, { useState, useEffect, useRef, useContext } from 'react';
import { DispatchContext, StateContext } from '../../GlobalContex';

const Input = props => {
  const FETCHURL = 'https://apis.networkwestmidlands.com/Addresses/AddressByPostcode/';
  const COUNTY = 'West Midlands';
  const WAIT_INTERVAL = 1700;
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
  function triggerChange() {
    console.log(inputValue);
    const val = inputValue;
    const url = encodeURI(`${FETCHURL}${val}`);
    if (val !== '') {
      fetch(url)
        .then(response => response.text())
        .then(str => {
          let location = JSON.parse(str);
          if(location.length > 0) {
            handleSearchResults(location[0])
          }else{
            console.log('NO VALUE')
            console.log('inputValue not found:', inputValue)
          }
        });
    } else {
      console.log('NO VALUE2')
      toggleisIn(null)
    }
  }

  function handleSearchResults(res) {
    console.log('res.county === COUNTY',res.county === COUNTY);
    
    if(res.county === COUNTY) {
      let arr = filters.state.selectedJobs;
      if ( arr.indexOf(inputValue) < 0) {
        arr = [...arr, inputValue, COUNTY];
      } else {
        arr = arr.filter( el => el !== inputValue )
      }
      dispatcher.dispatch({
        type: 'updateFilters',
        payload: arr
      });
    }

    toggleisIn(res.county === COUNTY);

  }

  useEffect(() => {
    timer = setTimeout(() => {
      triggerChange();
    }, WAIT_INTERVAL);
  }, [inputValue]);

  useEffect(() => {
    console.log('IN useEffect in:',isIn);
    
    dispatcher.dispatch({
      type: 'isInTheCounty',
      payload: isIn
    });
  }, [isIn]);

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
