import React from 'react';
import { Button } from '@material-ui/core';
import ListItem from './ListItem';
import styles from './ListItem.module.scss';

interface ListProps {
   title: string;
   description?: string;
   link?: string;
   type: string;
   autor?: string;
   imageLink?: string;
}

const List = ({ ...items }) => (
   <>
      {items.length ? (
         <ul className={styles.wrapper}>
            {items.map((item) => (
               <ListItem key={item.title} {...item} />
            ))}
         </ul>
      ) : (
         <h1 className={styles.noItems}>There's nothing here yet, please add some items!</h1>
      )}
   </>
);

export default ListItem;
