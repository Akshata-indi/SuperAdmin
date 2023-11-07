import React from 'react'
import InputComponent from './InputComponent'

export const Input = () => {
  return (
    <div>
        <input 
        className={`${InputComponent.standard}`}
        type="text" placeholder="Username"  />
    </div>
  )
}
