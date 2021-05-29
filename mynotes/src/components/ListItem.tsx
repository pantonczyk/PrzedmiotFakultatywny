import React from 'react';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Note } from '../store/reducers/notes.reducer';
import { Article } from '../store/reducers/articles.reducer';
import { Song } from '../store/reducers/songs.reducer';
import EmptyStateImage from '../assets/images/emptyState.jpg';

export type itemTypes = Article | Song | Note;

export interface ListItemProps {
   item: itemTypes;
   onDelete?: (item: itemTypes) => void;
}

const useStyles = makeStyles((theme) => ({
   wrapper: {
      padding: '20px 30px 30px 30px',
      width: '80%',
      margin: 'auto',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      animation: 'fadeIn .5s ease-in-out',

      [theme.breakpoints.down('sm')]: {
         flexDirection: 'column',
         width: '70%',
      },
   },

   '@global': {
      '@keyframes fadeIn': {
         '0%': {
            opacity: 0,
         },
         '100%': {
            opacity: 1,
         },
      },
   },

   image: {
      flexShrink: 0,
      width: '150px',
      height: '150px',
      borderRadius: '50%',

      [theme.breakpoints.up('md')]: {
         marginRight: '40px',
      },
   },

   imageNone: {
      flexShrink: 0,
      marginRight: '30px',
      width: '150px',
      height: '150px',
      borderRadius: '50%',
      backgroundImage: `url(${EmptyStateImage})`,
      backgroundSize: 'cover',
   },

   content: {
      textAlign: 'left',
      margin: '10px 0 20px',

      [theme.breakpoints.down('sm')]: {
         textAlign: 'center',
      },
   },

   description: {
      fontWeight: 300,
   },

   buttonWrapper: {
      '& Button': {
         margin: '5px',
      },
   },
}));

const ListItem: React.FC<ListItemProps> = ({ item, onDelete }) => {
   const classes = useStyles();
   const ImageTag = item.imageLink ? 'img' : 'div';
   const history = useHistory();

   const deleteItem = () => {
      if (onDelete) {
         onDelete(item);
      }
   };

   return (
      <div className={classes.wrapper}>
         {item.imageLink ? (
            <ImageTag src={item.imageLink} className={classes.image} alt={item.title} />
         ) : (
            <ImageTag className={classes.imageNone} alt="Default image" />
         )}
         <div className={classes.content}>
            <h2>{item.title}</h2>
            {'author' in item && <p>Autor: {item.author}</p>}
            {'description' in item && <p className={classes.description}> {item.description}</p>}

            <div className={classes.buttonWrapper}>
               <Button
                  variant="outlined"
                  color="default"
                  onClick={() => history.push(`/${item.type}/${item.id}`)}
               >
                  edit
               </Button>
               {item.link && (
                  <Button variant="outlined" color="primary" href={item.link}>
                     visit {item.type} link
                  </Button>
               )}

               <Button variant="outlined" color="secondary" onClick={deleteItem}>
                  delete
               </Button>
            </div>
         </div>
      </div>
   );
};

export default ListItem;
