import React from 'react';

interface ButtonProps{
    label: string;
    onClick: ()=> void
}


const Button: React.FC<ButtonProps> = ({label, onClick})=>(
    <button className='btn btn-primary' onClick={onClick}>{label}</button>
);


export default Button;
