import React from 'react';

const FileComponent = ({ label, onChange, textcss }) => {
  return (
    <div>
      <label>{label}</label>
      <input 
        type="file" 
        onChange={onChange}
        className={textcss}
     />
    </div>
  );
};

export default FileComponent;
