import React from "react";
interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
  <div className="container">
    <button className="btn fz-btn btn-warning" onClick={onClick}>
      {label}
    </button>
  </div>
);

export default Button;
