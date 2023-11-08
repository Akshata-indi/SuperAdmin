//TextComponent
import React from 'react';
// import textStyle from './textStyle.json'

const TextComponent = ({ label, value, onChange, textcss }) => {
    console.log("uuuuuuuuuuu")
    console.log(textcss)
  return (
    <div>
      <label>{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={textcss}
      />
    </div>
  );
};

export default TextComponent;
