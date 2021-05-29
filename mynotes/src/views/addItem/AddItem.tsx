import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { useHistory } from 'react-router';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import { useAction } from '../../hooks/useAction';
import { NotesService } from '../../services/notes.service';
import { ArticlesService } from '../../services/articles.service';
import { SongsService } from '../../services/songs.service';
import MainTemplate from '../../templates/MainTemplate';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
   wrapper: {
      padding: '50px 30px 90px 0',
      width: '80%',
      margin: 'auto',
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

   radio__button__wrapper: {
      display: 'flex',
      justifyContent: 'center',
      margin: '1rem',
   },

   form__wrapper: {
      marginTop: '3rem',
   },

   form__content: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '1.5rem',
      '& > *': {
         marginTop: '1.5rem',
      },
   },

   errors: {
      fontWeight: 500,
      color: 'red',
   },
}));

interface MyFormValues {
   id: number;
   type: string;
   title: string;
   author: string | any;
   description: string;
   link: string;
   imageLink: string;
}

const validationSchema = Yup.object({
   title: Yup.string().required('to pole jest wymagane'),
});

const AddItem: React.FC<{}> = () => {
   const classes = useStyles();
   const [typeForm, setTypeForm] = useState('note');
   const history = useHistory();
   const notesActions = useAction(NotesService);
   const articlesActions = useAction(ArticlesService);
   const songsActions = useAction(SongsService);

   const initialValues: MyFormValues = {
      id: 0,
      type: typeForm,
      title: '',
      author: '',
      description: '',
      link: '',
      imageLink: '',
   };

   const addItemFunction = (values: MyFormValues, type: string) => {
      switch (type) {
         case 'note':
            notesActions.setNewNote(values);
            break;

         case 'article':
            articlesActions.setNewArticle(values);
            break;

         case 'song':
            songsActions.setNewSong(values);
            break;

         default:
            return alert('Błąd dodawania');
      }
   };

   return (
      <MainTemplate>
         <div className={classes.wrapper}>
            <h1>Add item - {typeForm}</h1>
            <p>Choose type: </p>
            <div className={classes.radio__button__wrapper}>
               <div>
                  <input
                     type="radio"
                     id="note"
                     name="type"
                     value="note"
                     defaultChecked
                     onChange={(e) => setTypeForm(e.target.value)}
                  />
                  <label htmlFor="note">note</label>
               </div>
               <div>
                  <input
                     type="radio"
                     id="article"
                     name="type"
                     value="article"
                     onChange={(e) => setTypeForm(e.target.value)}
                  />
                  <label htmlFor="article">article</label>
               </div>
               <div>
                  <input
                     type="radio"
                     id="song"
                     name="type"
                     value="song"
                     onChange={(e) => setTypeForm(e.target.value)}
                  />
                  <label htmlFor="song">song</label>
               </div>
            </div>
            <hr />
            <div className={classes.form__wrapper}>
               <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={(values, actions) => {
                     addItemFunction(values, typeForm);
                     actions.setSubmitting(false);

                     setTimeout(() => {
                        history.push(`/${typeForm}/${values.id}`);
                     }, 400);
                  }}
               >
                  {({ errors, touched, handleChange, handleBlur }) => (
                     <Form className={classes.form__content}>
                        <TextField
                           id="title"
                           label="title"
                           name="title"
                           placeholder="title"
                           variant="outlined"
                           onChange={handleChange}
                           onBlur={handleBlur}
                        />

                        {errors.title && touched.title ? (
                           <p className={classes.errors}> {errors.title} </p>
                        ) : null}

                        {typeForm !== 'note' && (
                           <>
                              <TextField
                                 id="author"
                                 label="author"
                                 name="author"
                                 placeholder="author"
                                 variant="outlined"
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                              />
                           </>
                        )}

                        <TextField
                           id="description"
                           label="description"
                           name="description"
                           placeholder="description"
                           variant="outlined"
                           onChange={handleChange}
                           onBlur={handleBlur}
                        />

                        <TextField
                           id="link"
                           label="link"
                           name="link"
                           placeholder="link"
                           variant="outlined"
                           onChange={handleChange}
                           onBlur={handleBlur}
                        />

                        <TextField
                           id="imageLink"
                           label="imageLink"
                           name="imageLink"
                           placeholder="imageLink"
                           variant="outlined"
                           onChange={handleChange}
                           onBlur={handleBlur}
                        />
                        <Button variant="outlined" color="primary" type="submit">
                           Submit
                        </Button>
                     </Form>
                  )}
               </Formik>
            </div>
            <Button variant="outlined" color="secondary" onClick={() => history.goBack()}>
               go back
            </Button>
         </div>
      </MainTemplate>
   );
};

export default AddItem;
