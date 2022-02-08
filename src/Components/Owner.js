import React from 'react';
import photo from './Utils/dan.jpg';

const Owner = () => {
  return (
    <div className='profile'>
      <div className='profile-img'>
        <img src={photo} alt='dan' />
      </div>
      <div className='profile-info'>
        <span className='line'>
          Personal blog by<span className='name'> Dan Abramov.</span>
        </span>
        <span className='line'>I explain with words and code.</span>
      </div>
    </div>
  );
};

export default Owner;
