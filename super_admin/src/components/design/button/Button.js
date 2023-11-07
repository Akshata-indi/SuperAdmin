import React from 'react'
import ButtonComponent from './ButtonComponent';

const Button = () => {
  return (
    <div>
      <button type="submit" className={`${ButtonComponent.primary}`}>
              Login
      </button><br></br><br></br>

      <button type="submit" className={`${ButtonComponent.transparent}`}>
              Login
      </button><br></br><br></br>

      <button type="submit" className={`${ButtonComponent.hover}`}>
              Login
      </button><br></br><br></br>
    </div>
  )
}

export default Button;