import React, { useState } from 'react';
import PropTypes from 'prop-types';

interface NavProps {
  options?: any[];
  logo: string;
  background?: string;
  phone?: string;
  buttonText?: string;
  urlButton?: string;
}

const Nav: React.FC<NavProps> = ({ options, logo, background, phone, urlButton, buttonText }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fz-navbar navbar">
      <div className="fz-navbar__header ">
        <button className={`fz-navbar__icon ${isOpen ? 'fz-navbar__icon--open': 'fz-navbar__icon--closed'}`} onClick={toggleMenu}>
          <span className="burguer"></span>
        </button>
        {logo && (<img src={logo} alt="Logo" className="fz-navbar__logo" />)}
 
        <div className="fz-navbar__button">
          {phone}
          {urlButton && (
            <a href={urlButton} target="_blank" rel="noopener noreferrer" className="fz-btn fz-btn-default">
              {buttonText}
            </a>
          )}
        </div>
      </div>
      {isOpen && (
        <div className="fz-navbar__menu " style={{ background }}>
          <ul>
            {options?.map((option, index) => (
              <li key={index} onClick={toggleMenu}>
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

Nav.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  logo: PropTypes.string.isRequired,
  background: PropTypes.string,
  phone: PropTypes.string,
  buttonText: PropTypes.string,
  urlButton: PropTypes.string,
};

Nav.defaultProps = {
  options: [],
  background: '#EBF0E4',
};

export default Nav;
