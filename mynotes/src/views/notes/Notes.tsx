import React from 'react';
import MainTemplate from '../../templates/MainTemplate';
import ListItem from '../../components/ListItem';
const state = {
   notes: [
      {
         title: 'Dan Abramov',
         link: 'https://twitter.com/dan_abramov',
         imageLink:
            'https://res.cloudinary.com/practicaldev/image/fetch/s--Tgpz_GKn--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg',
         description: 'test1',
      },
      {
         title: 'Dan Abramov',
         link: 'https://twitter.com/dan_abramov',
         imageLink:
            'https://res.cloudinary.com/practicaldev/image/fetch/s--Tgpz_GKn--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg',
         description:
            'Making React accessible for users and developers at https://reach.tech . Online learning, workshops, OSS, and consulting.',
      },
      {
         title: 'Michael Jackson',
         link: 'https://twitter.com/mjackson',
         imageLink: 'https://twitter.com/dan_abramov/photo',
         description:
            'Maker. Co-author of React Router. Working on @ReactTraining. Created @unpkg. Head over heels for @cari.',
      },
      {
         title: 'Kent C. Dodds',
         link: 'https://twitter.com/kentcdodds',
         imageLink: 'https://twitter.com/dan_abramov/photo',
         description:
            'Making software development more accessible · Husband, Father, Latter-day Saint, Teacher, OSS, GDE, @TC39 · @PayPalEng @eggheadio @FrontendMasters · #JS',
      },
   ],
};

const Notes = () => {
   return (
      <MainTemplate>
         <h1>Notes View</h1>
         {state.notes.map((item) => (
            <ListItem key={item.title} {...item} type="notes" />
         ))}
      </MainTemplate>
   );
};

export default Notes;
