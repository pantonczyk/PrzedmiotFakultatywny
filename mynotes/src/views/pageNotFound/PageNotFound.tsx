import React from 'react';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import notFoundGif from '../../assets/images/notfound.gif';

const useStyles = makeStyles({
   wrapper: {
      margin: '40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
   },

   image: {
      width: '400px',
   },
});

const PageNotFound = () => {
   const history = useHistory();
   const classes = useStyles();
   return (
      <div className={classes.wrapper}>
         <h1>404! Strony nie znaleziono!</h1>
         <img className={classes.image} src={notFoundGif} alt="" />
         <div>
            <h2>Wygląda na to, że się zgubiłeś...</h2>
            <p>strona, której szukasz, jest niedostępna! </p>
            <Button variant="outlined" color="primary" onClick={() => history.goBack()}>
               Powrót
            </Button>
         </div>
      </div>
   );
};

export default PageNotFound;
