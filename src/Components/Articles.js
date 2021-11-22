import React from 'react';
import Article from './Article';
import articles from './data';

const Articles = () => {
  return (
    <article className='articles'>
      {articles.map((article) => {
        return <Article key={article.id} {...article} />;
      })}
    </article>
  );
};

export default Articles;
