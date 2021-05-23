import React from 'react';
import { useSelector } from 'react-redux';
import { todosSelector } from '../../store/selectors/notes.selectos';
import MainTemplate from '../../templates/MainTemplate';
import ListItem from '../../components/ListItem';

const Notes = () => {
   const notes = useSelector(todosSelector);
   return (
      <MainTemplate>
         <h1>Notes</h1>
         {notes.map((item) => (
            <ListItem key={item.id} {...item} />
         ))}
      </MainTemplate>
   );
};

export default Notes;
