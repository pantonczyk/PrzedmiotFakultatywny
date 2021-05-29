import { StoreState } from '../store';
import { createSelector } from 'reselect';

export const articlesSelector = {
   getAll: createSelector(
      (state: StoreState) => state.articles,
      (articles) => articles.articlesList,
   ),
   getArticle: (itemId: string) =>
      createSelector(
         (state: StoreState) => state.articles,
         (articles) => articles.articlesList.filter(({ id }) => id === parseInt(itemId))[0],
      ),
};
