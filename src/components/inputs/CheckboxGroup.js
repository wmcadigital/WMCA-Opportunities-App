import React from 'react'
import Checkbox from './Checkbox';

function CheckboxGroup(props) {
  const { checkboxValue, parent} = props;

  return (
    <div>
    {checkboxValue && checkboxValue.map((checkBox, i) => {
       return (<Checkbox key={`${parent}_${i}`} name={checkBox} parent={parent}/>) 
    })}
    </div>
  )
}

export default CheckboxGroup

