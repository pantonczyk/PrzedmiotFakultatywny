import store from '../store';
import { articlesActions } from '../store/actions/articles.action';
import { Article } from '../store/reducers/articles.reducer';

export class ArticlesService {
   setNewArticle(article: Article) {
      store.dispatch(articlesActions.setNewArticle(article));
   }

   updateArticle(article: Article) {
      store.dispatch(articlesActions.setUpdateArticle(article));
   }

   deleteArticle(article: Article) {
      store.dispatch(articlesActions.setDeleteArticle(article));
   }
}
