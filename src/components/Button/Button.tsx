import React from "react";
import classNames from "classnames";
interface ButtonProps {
  label: string;
  onClick: () => void;
  size?: 'small' | 'large';
  variant?: 'primary' | 'secondary';
  customClass?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, size, variant, customClass }) => {
  const buttonClass = classNames(
    'btn',
    'fz-btn',
    {
      [`fz-btn--${size}`]: size,
      [`fz-btn--${variant}`]: variant
    },
    customClass
  ); 
   return (
    <div className="container">
    <button className={buttonClass} onClick={onClick}>
      {label}
    </button>
  </div>
   )
  };

export default Button;
