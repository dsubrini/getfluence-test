import React from 'react';

import './Button.css';

interface ButtonProps {
  type: 'button' | 'submit';
  text: string;
  color: 'blue' | 'white';
}

export const Button: React.FC<ButtonProps> = ({ type, text, color }) => {
  return (
    <button type={type} className={`button ${color}`}>
      {text}
    </button>
  );
};
