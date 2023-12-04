import React from 'react';
import ButtonStyle from './ButtonStyle'; // Assuming ButtonStyle.js is in the same directory


const ButtonComponent = ({ name, label, type, buttoncss, onClick }) => {
  const btnStyle = ButtonStyle[buttoncss] || ''; // Ensure there's a valid style

  console.log("ppppppppppp")
  console.log(onClick)
  return (
    <div>
      {type === 'button' && (
        <button onClick={onClick} className={btnStyle}>
          {label}
        </button>
      )}
    </div>
  );
};

export default ButtonComponent;
