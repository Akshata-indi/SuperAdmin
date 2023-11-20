
import React from 'react';


const BodyComponent = ({ text, bodycss }) => {
   
  return (
    <div>
     <h1
        text={text}
        className={bodycss}
      />
    </div>
  );
};

export default BodyComponent;
