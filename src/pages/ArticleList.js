import React from 'react';
import articleContent from './article-content';
import Articles from '../components/Articles';
import articles from './article-content';

const ArticleList = () => {
  return (
    <div>
      <h1 className='text-center sm:text-4xl text-2xl font-bold my-6 text-gray-900'>
        Hello, welcome to ArticleList !!
      </h1>
      <div className='container py-4 mx-auto'>
        <div className='flex flex-wrap m-4'>
         <Articles  articles={articleContent}/> 
        </div>
      </div>
    </div>
  );
};

export default ArticleList;
 