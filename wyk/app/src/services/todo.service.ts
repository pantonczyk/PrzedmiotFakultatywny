import store from '../store';
import { todosActions } from '../store/actions/todos.actions';
import { Todo } from '../store/reducers/todos.reducer';

export class TodoService {
   setNewTodo(todo: Todo) {
      store.dispatch(todosActions.setNewTodo(todo));
   }

   setTodoDone(todo: Todo) {
      store.dispatch(todosActions.setTodoDone(todo.id));
   }

   setDeleteTodo(todo: Todo) {
      store.dispatch(todosActions.setDeleteTodo(todo));
   }
}
