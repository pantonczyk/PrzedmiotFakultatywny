import React from 'react';
import NavPanel from '../../components/NavPanel';
import movieService from '../../services/movies.service';

const Home = () => {
   const [search, setSearch] = React.useState('harry potter');
   const [movie, setMovie] = React.useState({});

   React.useEffect(() => {
      const makeRequest = async () => {
         try {
            const response = movieService.searchByName(search, 1);
            setMovie(response);
            console.log(response);
         } catch (error) {
            console.log(error);
         }
      };
      makeRequest();
   }, []);

   // React.useEffect(() => {
   //    const makeRequest = () => {
   //       const response = fetch(
   //          `http://www.omdbapi.com/?apikey=5b55ce0e&s=harry+potter&plot=full`,
   //       ).then((resp) => {
   //          return resp.json(), console.log(resp);
   //       });
   //       console.log(response);
   //    };
   //    makeRequest();
   // });
   return (
      <div>
         <NavPanel />
         <h1>This is home page</h1>
      </div>
   );
};

export default Home;
