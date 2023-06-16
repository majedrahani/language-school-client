import React, { useContext, useState } from 'react';
import { DarkModeSystemContext } from './DarkModeContext';


const DarkModeToggle = () => {
    const {darkMode, setDarkMode} = useState
//   const { darkMode } = useContext(DarkModeSystemContext);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? 'Disable Dark Mode' : 'Enable Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;