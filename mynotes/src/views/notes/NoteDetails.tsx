import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Note } from '../../store/reducers/notes.reducer';
import { notesSelector } from '../../store/selectors/notes.selector';
import { useAction } from '../../hooks/useAction';
import { NotesService } from '../../services/notes.service';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import MainTemplate from '../../templates/MainTemplate';
import EmptyStateImage from '../../assets/images/emptyState.jpg';

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

   note__content: {
      display: 'grid',
      textAlign: 'justify',
      textJustify: 'inter-word',
      marginBottom: '1.5rem',
      [theme.breakpoints.up('md')]: {
         gridTemplateColumns: '1fr 1fr',
         gridGap: '45px',
      },
   },

   image: {
      marginLeft: '5rem',
      width: '300px',
      height: '300px',
      borderRadius: '50%',
   },

   imageNone: {
      marginLeft: '5rem',
      width: '300px',
      height: '300px',
      borderRadius: '50%',
      backgroundImage: `url(${EmptyStateImage})`,
      backgroundSize: 'cover',
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

interface ParamTypes {
   id: string;
}

const validationSchema = Yup.object({
   title: Yup.string().required('This field is required'),
   description: Yup.string().required('This field is required'),
});

const NoteDetails: React.FC<{}> = () => {
   const { id } = useParams<ParamTypes>();
   const note = useSelector(notesSelector.getNote(id));
   const notesActions = useAction(NotesService);
   const classes = useStyles();
   const history = useHistory();
   const ImageTag = note.imageLink ? 'img' : 'div';

   const initialValues: Note = {
      id: note.id,
      type: note.type,
      title: note.title,
      description: note.description,
      link: note.link,
      imageLink: note.imageLink,
   };

   const updateNoteFunction = (values: Note) => {
      notesActions.updateNote(values);
   };

   return (
      <MainTemplate>
         <div className={classes.wrapper}>
            <h1>Note: {note.title}</h1>
            <div className={classes.note__content}>
               <p>{note.description}</p>
               {note.imageLink ? (
                  <ImageTag src={note.imageLink} className={classes.image} alt={note.title} />
               ) : (
                  <ImageTag className={classes.imageNone} alt="Default image" />
               )}
            </div>

            {note.link && (
               <Button variant="outlined" color="primary" href={note.link}>
                  visit {note.type} link
               </Button>
            )}

            <hr />
            <div className={classes.form__wrapper}>
               <h2>Edit note</h2>
               <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={(values, actions) => {
                     updateNoteFunction(values);
                     actions.setSubmitting(false);
                  }}
               >
                  {({ errors, touched, handleChange, handleBlur }) => (
                     <Form className={classes.form__content}>
                        <TextField
                           id="title"
                           label="title"
                           name="title"
                           placeholder="title"
                           defaultValue={note.title}
                           variant="outlined"
                           onChange={handleChange}
                           onBlur={handleBlur}
                        />

                        {errors.title && touched.title ? (
                           <p className={classes.errors}> {errors.title} </p>
                        ) : null}

                        <TextField
                           id="description"
                           label="description"
                           name="description"
                           placeholder="description"
                           defaultValue={note.description}
                           variant="outlined"
                           multiline
                           onChange={handleChange}
                           onBlur={handleBlur}
                        />
                        {errors.description && touched.description ? (
                           <p className={classes.errors}> {errors.description} </p>
                        ) : null}

                        <TextField
                           id="link"
                           label="link"
                           name="link"
                           placeholder="link"
                           defaultValue={note.link}
                           variant="outlined"
                           onChange={handleChange}
                           onBlur={handleBlur}
                        />

                        <TextField
                           id="imageLink"
                           label="imageLink"
                           name="imageLink"
                           placeholder="image link"
                           defaultValue={note.imageLink}
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

export default NoteDetails;
