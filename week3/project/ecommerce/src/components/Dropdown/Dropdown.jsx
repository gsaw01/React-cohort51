import { useState, useEffect, useRef } from 'react';
import './Dropdown.css';

export const Dropdown = ({ options, selectedOption, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  const handleOptionClick = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className='dropdown' ref={dropdownRef}>
      <button className='dropdown-toggle' onClick={() => setIsOpen(!isOpen)}>
        <span className='selected-option'>{selectedOption}</span>
        <span className='dropdown-arrow'>{isOpen ? '↑' : '↓'}</span>
      </button>

      <div className={`dropdown-menu ${isOpen ? 'open' : 'closed'}`}>
        {options.map((option) => (
          <div
            key={option}
            className={`dropdown-item ${
              option === selectedOption ? 'active' : ''
            }`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};
