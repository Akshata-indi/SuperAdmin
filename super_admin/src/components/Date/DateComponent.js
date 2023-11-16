import React from 'react';
// import Css from './Css.js'


const DateComponent = ({ label, value, onChange, classname }) => {

    console.log("55555")
    console.log(classname)
return (
  <div>
    <label>{label}</label>
    <input type="date" value={value} onChange={onChange} className={classname}/>
    
  </div>
)};

export default DateComponent;
