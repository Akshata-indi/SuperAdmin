import React from 'react';
import BodyComponent from './BodyComponent'
import BodyData from './BodyData.json' // Import the content JSON file
import Bodycss from './Bodycss';

const Body = () => {
  return (
    <div> 
       {BodyData.map((field, index) => (
          <div key={index}>
              <BodyComponent
                text={field.text}
                bodycss={Bodycss[field.bodycss]}
              />
              </div>
            ))}
    </div>
  );
};

export default Body;
