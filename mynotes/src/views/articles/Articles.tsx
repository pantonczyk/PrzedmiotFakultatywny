import React from 'react';
import { initialState } from '../../store/initialState';
import MainTemplate from '../../templates/MainTemplate';
import ListItem from '../../components/ListItem';

const Articles = () => {
   return (
      <MainTemplate>
         <h1>Articles</h1>
         {initialState.articles.map((item) => (
            <ListItem key={item.id} {...item} />
         ))}
      </MainTemplate>
   );
};

export default Articles;
