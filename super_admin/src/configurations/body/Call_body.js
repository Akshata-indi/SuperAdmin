import React from 'react'
import Body from './Body';
import BodyData from './BodyData.json'

const Call_body = () => {
  return (
    <div>
        
      <h1>Form components</h1>
        <Body config={BodyData} />
    
    </div>
  )
  }

export default Call_body;

