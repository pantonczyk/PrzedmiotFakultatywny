import React from 'react';
import { initialState } from '../../store/initialState';
import MainTemplate from '../../templates/MainTemplate';
import ListItem from '../../components/ListItem';

const Songs = () => {
   return (
      <MainTemplate>
         <h1>Songs</h1>
         {initialState.songs.map((item) => (
            <ListItem key={item.id} {...item} />
         ))}
      </MainTemplate>
   );
};

export default Songs;
