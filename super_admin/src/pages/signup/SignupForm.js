import React, { useState } from 'react';
import axios from 'axios';
import TwdButtonsConfig from '../buttons/TwdButtonsConfig';
import TailwindInputsConfig from '../inputs/TailwindInputsConfig';
import { API_ENDPOINTS } from '../../api/Api'

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const inputStyle = TailwindInputsConfig.standard;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      name: formData.name,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    };

    try {
      // Send a POST request to your signup API endpoint using Axios and the API configuration
      const response = await axios.post(API_ENDPOINTS.SIGNUP, userData);

      if (response) {
        // Data was successfully saved
        console.log('User data saved successfully.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
    // Clear the form or perform other actions after saving data
    setFormData({
      name: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <div className="mx-auto mt-2 p-10 bg-white rounded-xl border-2 flex flex-col items-center">
      <form className="w-full" onSubmit={handleSubmit}>
        <p className="mt-8 text-gray-500 font-sans text-lg font-semibold">
          Create a Learning Management System Account
        </p>

        <div className="grid grid-cols-1">
          <input
            className={inputStyle}
            type="text"
            placeholder="First Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />

          <input className={inputStyle}
          type="text"
          placeholder="Last Name"
          name='lastName'
          value={formData.lastName}
          onChange={handleInputChange}
          /> 

          <input className={inputStyle}
          type="email"
          placeholder="Email Id"
          name='email' value={formData.email}
          onChange={handleInputChange}
          />

           <input className={inputStyle}
           type="password"
           placeholder="Password"
           name='password'
           value={formData.password}
           onChange={handleInputChange}
           />

            <input className={inputStyle}
            type="password"
            placeholder="Confirm Password"
            name='confirmPassword'
            value={formData.confirmPassword}
            onChange={handleInputChange}
            /> 
            
        </div>

        <div className="text-center">
          <button type="submit"  className={`${TwdButtonsConfig.transparent} text-lg`}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
