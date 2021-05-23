import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import EmptyStateImage from '../assets/images/emptyState.jpg';

interface ListItemProps {
   id: Number;
   type: string;
   title: string;
   autor?: string;
   description?: string;
   link?: string;
   imageLink?: string;
}

const useStyles = makeStyles((theme) => ({
   wrapper: {
      padding: '0 30px 90px 0',
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
      marginRight: '30px',
      width: '150px',
      height: '150px',
      borderRadius: '50%',
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

const ListItem: React.FC<ListItemProps> = ({ ...item }) => {
   const classes = useStyles();
   const ImageTag = item.imageLink ? 'img' : 'div';

   return (
      <div className={classes.wrapper}>
         {item.imageLink ? (
            <ImageTag src={item.imageLink} className={classes.image} alt={item.title} />
         ) : (
            <ImageTag className={classes.imageNone} alt="Default image" />
         )}
         <div className={classes.content}>
            <h2>{item.title}</h2>
            {item.autor && <p>Autor: {item.autor}</p>}
            {item.description && <p className={classes.description}> {item.description}</p>}

            <div className={classes.buttonWrapper}>
               <Button variant="outlined" color="default">
                  show more
               </Button>
               {item.link && (
                  <Button variant="outlined" color="primary" href={item.link}>
                     visit {item.type} link
                  </Button>
               )}

               <Button variant="outlined" color="secondary">
                  delete
               </Button>
            </div>
         </div>
      </div>
   );
};

export default ListItem;
