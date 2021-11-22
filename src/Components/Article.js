import React from 'react';
import moment from 'moment';

const Article = ({ id, title, date, length, snippet }) => {
  return (
    <div className='article'>
      <h1 className='title'>{title}</h1>
      <div className='article-info'>
        <span>{moment(date).format('MMMM Do, YYYY ')}</span>
        <span>{length} min read</span>
      </div>
      <p>{snippet}</p>
    </div>
  );
};

export default Article;
