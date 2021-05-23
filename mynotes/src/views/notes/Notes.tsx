import React from 'react';
import { initialState } from '../../store/initialState';
import MainTemplate from '../../templates/MainTemplate';
import ListItem from '../../components/ListItem';

const Notes = () => {
   return (
      <MainTemplate>
         <h1>Notes</h1>
         {initialState.notes.map((item) => (
            <ListItem key={item.id} {...item} />
         ))}
      </MainTemplate>
   );
};

export default Notes;
