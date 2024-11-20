import React from 'react';
import './frightWiseButton.css';


function CustomButton({ label, onClick, color = 'blue', size = 'medium', disabled = false }) {
  return (
    <button
      className={`custom-button ${size} ${color}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

export default CustomButton;
