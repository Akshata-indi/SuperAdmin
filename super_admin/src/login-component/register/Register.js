import React from 'react';
import RegisterComponent from '../register/RegisterComponent'
import { RegisterInputConfig } from './RegisterConfig';


function Register() {
  
  return (
    <div>
      <div className="flex justify-center m-1 items-center bg-white">
        <RegisterComponent config={RegisterInputConfig} />
      </div> 
    </div>
  );
}

export default Register;