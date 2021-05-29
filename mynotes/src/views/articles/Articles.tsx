import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { useAction } from '../../hooks/useAction';
import { ArticlesService } from '../../services/articles.service';
import { articlesSelector } from '../../store/selectors/articles.selector';
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

const Articles = () => {
   const classes = useStyles();
   const articlesActions = useAction(ArticlesService);
   const articles = useSelector(articlesSelector.getAll);

   const deleteArticle = (item: itemTypes) => {
      const articleToDelete = articles.find((article) => article.id === item.id);
      if (articleToDelete) {
         articlesActions.deleteArticle(articleToDelete);
      }
   };

   return (
      <MainTemplate>
         <div className={classes.wrapper}>
            <h1>Articles</h1>
            <hr />
            {articles.length !== 0 ? (
               <>
                  {articles.map((item) => (
                     <ListItem key={item.id} item={item} onDelete={deleteArticle} />
                  ))}
               </>
            ) : (
               <p className={classes.empty__state}>There's nothing here yet, please add some items! </p>
            )}
         </div>
      </MainTemplate>
   );
};

export default Articles;
