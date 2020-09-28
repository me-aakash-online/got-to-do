import TodoReducer from './todo-reducer';
import CategoryReducer from './category-reducer';
import CurrentSelectionReducer from './current-selection-reducer';
import CurrentTodoReducer from './current-todo-reducer';
import BucketListStatusReducer from './bucket-list-status';

const { combineReducers } = require('redux');

const RootReducer = combineReducers({
    todos: TodoReducer,
    categories: CategoryReducer,
    currentSelection: CurrentSelectionReducer,
    currentTodo: CurrentTodoReducer,
    isBucketListOpen: BucketListStatusReducer,
});

export default RootReducer;
