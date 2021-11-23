import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [theme, setTheme] = useState('light-theme');
  const [color, setColor] = useState(false);

  const changeTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
      setColor(true);
    } else {
      setTheme('light-theme');
      setColor(false);
    }
  };
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);
  return (
    <nav>
      <div className='nav-center'>
        <h1 className='logo'>Overreacted</h1>
        <button onClick={changeTheme} className='btn'>
          <i
            class='fas fa-adjust'
            style={{ color: color ? 'white' : 'black' }}
          ></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
