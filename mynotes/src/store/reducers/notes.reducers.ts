import { Reducer } from 'redux';
import { Actions, NotesStoreActions } from '../actions/notes.actions';

export interface Notes {
   id: number;
   type: string;
   title: string;
   description: string;
   link: string;
   imageLink: string;
}

export interface NotesList {
   notes: Notes[];
}

export const notesListInitialState: NotesList = {
   notes: [
      {
         id: 1,
         type: 'notes',
         title: 'Lorem Ipsum 1',
         description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
         link: 'https://twitter.com/dan_abramov',
         imageLink:
            'https://res.cloudinary.com/practicaldev/image/fetch/s--Tgpz_GKn--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg',
      },
      {
         id: 2,
         type: 'notes',
         title: 'Lorem Ipsum 2',
         description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
         link: 'https://twitter.com/dan_abramov',
         imageLink:
            'https://res.cloudinary.com/practicaldev/image/fetch/s--Tgpz_GKn--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg',
      },
      {
         id: 3,
         type: 'notes',
         title: 'Lorem Ipsum 3',
         description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
         link: 'https://twitter.com/dan_abramov',
         imageLink:
            'https://res.cloudinary.com/practicaldev/image/fetch/s--Tgpz_GKn--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg',
      },
      {
         id: 4,
         type: 'notes',
         title: 'Lorem Ipsum 4',
         description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
         link: 'https://twitter.com/dan_abramov',
         imageLink:
            'https://res.cloudinary.com/practicaldev/image/fetch/s--Tgpz_GKn--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg',
      },
      {
         id: 5,
         type: 'notes',
         title: 'Lorem Ipsum 5',
         description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
         link: 'https://twitter.com/dan_abramov',
         imageLink:
            'https://res.cloudinary.com/practicaldev/image/fetch/s--Tgpz_GKn--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg',
      },
   ],
};

export const notesStoreReducer: Reducer<NotesList, Actions> = (
   state: NotesList = notesListInitialState,
   actions: Actions,
) => {
   switch (actions.type) {
      case NotesStoreActions.SET_NEW_NOTES:
         return {
            ...state,
            list: [...state.notes, actions.payload.notes],
         };

      case NotesStoreActions.SET_DELETE_NOTES:
         return {
            ...state,
            list: state.notes.filter((el) => el.id !== actions.payload.notes.id),
         };

      default:
         return state;
   }
};
