import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [theme, setTheme] = useState('light-theme');

  const changeTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  };
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);
  return (
    <nav>
      <div className='nav-center'>
        <h1 className='logo'>Overreacted</h1>
        <button onClick={changeTheme}>Toggle</button>
      </div>
    </nav>
  );
};

export default Navbar;
