import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { relative } from 'path';

interface ListItemProps {
   title: string;
   description?: string;
   link?: string;
   type: string;
   autor?: string;
   imageLink?: string;
}

const useStyles = makeStyles({
   wrapper: {
      padding: '0 30px 90px 0',
      width: '80%',
      margin: 'auto',
      border:
         '2px solid linear-gradient(90deg,rgba(111, 128, 255, 1) 100%,rgba(145, 179, 250, 0.770483193277311) 63%)',
      display: 'flex',
      alignItems: 'center',

      animation: 'appear 0.5s ease',
   },

   '@keyframes appear': {
      '0%': {
         opacity: 0,
         top: '35px',
      },
      '100%': {
         opacity: 1,
         top: 0,
      },
   },

   image: {
      flexShrank: 0,
      marginRight: '30px',
      width: '150px',
      height: '150px',
      bordeRadius: '50%',
   },
   imageNone: {
      //  @extend .image;

      background: 'url("https://unsplash.it/200/200") no-repet',
      backgroundSize: 'cover',
   },
   description: {
      margin: '10px 0 20px',
      fontWeight: 300,
   },
});

const ListItem: React.FC<ListItemProps> = ({ ...item }) => {
   const classes = useStyles();
   const ImageTag = item.imageLink ? 'img' : 'div';

   return (
      <div className={classes.wrapper}>
         {item.imageLink && (
            <ImageTag src={item.imageLink} className={classes.image} alt={item.title} />
         )}
         <div>
            <h1>{item.title}</h1>
            <p className={classes.description}> {item.description}</p>
            {item.link && (
               <Button variant="outlined" color="primary" href={item.link}>
                  visit page
               </Button>
            )}
            <p>{item.autor}</p>
         </div>
      </div>
   );
};

export default ListItem;
