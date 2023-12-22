
import React, { useState } from 'react';
import axios from 'axios';

function Login3() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const [error, setError] = useState('');

  
  const handleLogin = async () => {
    try {
      console.log("=====")
      const response = await axios.get(`http://localhost:3000/data?email=${email}&password=${password}`);

      console.log(response)
      const users = response.data;
      console.log(users)



      if (users.length > 0) {
        alert('Login successful');
        setError(''); 

      } else {
        setError('Error: Invalid username or password');
      }
    } catch (error) {
      setError('Error: Something went wrong');
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="App">
      <div className="box">
        <h1>Login</h1>
        <input
          type="text"
          className="text1"
          value={email}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          className="text2"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button className="text3" onClick={handleLogin}>
          Log in
        </button>
        <br />
        <input type="checkbox" name="rememberMe" className="text4" /> Remember me
        <a href="/">Forgot Password?</a>
        {error && <p className="error">{error}</p>}
      </div>
      <a href="/" className="text5">
        Create a new account
      </a>
    </div>
  );
}

export default Login3;