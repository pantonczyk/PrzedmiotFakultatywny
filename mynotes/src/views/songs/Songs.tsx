import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { useAction } from '../../hooks/useAction';
import { SongsService } from '../../services/songs.service';
import { songsSelector } from '../../store/selectors/songs.selector';
import MainTemplate from '../../templates/MainTemplate';
import ListItem, { itemTypes } from '../../components/ListItem';

const useStyles = makeStyles({
   wrapper: {
      paddingTop: ' 30px',
      width: '80%',
      margin: 'auto',
   },

   empty__state: {
      color: 'gray',
      fontSize: '1.1rem',
   },
});

const Songs = () => {
   const classes = useStyles();
   const songsActions = useAction(SongsService);
   const songs = useSelector(songsSelector.getAll);

   const deleteSong = (item: itemTypes) => {
      const songToDelete = songs.find((song) => song.id === item.id);
      if (songToDelete) {
         songsActions.deleteSong(songToDelete);
      }
   };
   return (
      <MainTemplate>
         <div className={classes.wrapper}>
            <h1>Songs</h1>
            <hr />
            {songs.length !== 0 ? (
               <>
                  {songs.map((item) => (
                     <ListItem key={item.id} item={item} onDelete={deleteSong} />
                  ))}
               </>
            ) : (
               <p className={classes.empty__state}>There's nothing here yet, please add some items! </p>
            )}
         </div>
      </MainTemplate>
   );
};

export default Songs;
