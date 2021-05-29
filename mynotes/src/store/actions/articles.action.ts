import { Article } from '../reducers/articles.reducer';

export enum ArticlesStoreActions {
   SET_NEW_ARTICLE = 'SET_NEW_ARTICLE',
   SET_UPDATE_ARTICLE = 'SET_UPDATE_ARTICLE',
   SET_DELETE_ARTICLE = 'SET_DELETE_ARTICLE',
}

export interface SetNewArticleAction {
   type: ArticlesStoreActions.SET_NEW_ARTICLE;
   payload: {
      article: Article;
   };
}

export interface SetUpdateArticleAction {
   type: ArticlesStoreActions.SET_UPDATE_ARTICLE;
   payload: {
      article: Article;
   };
}

export interface SetDeleteArticleAction {
   type: ArticlesStoreActions.SET_DELETE_ARTICLE;
   payload: {
      article: Article;
   };
}

export type Actions = SetNewArticleAction | SetUpdateArticleAction | SetDeleteArticleAction;

export const articlesActions = {
   setNewArticle: (article: Article): SetNewArticleAction => ({
      type: ArticlesStoreActions.SET_NEW_ARTICLE,
      payload: {
         article,
      },
   }),

   setUpdateArticle: (article: Article): SetUpdateArticleAction => ({
      type: ArticlesStoreActions.SET_UPDATE_ARTICLE,
      payload: {
         article,
      },
   }),

   setDeleteArticle: (article: Article): SetDeleteArticleAction => ({
      type: ArticlesStoreActions.SET_DELETE_ARTICLE,
      payload: {
         article,
      },
   }),
};
