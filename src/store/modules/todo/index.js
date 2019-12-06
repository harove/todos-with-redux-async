import { combineReducers } from 'redux';
import todoReducer from './todo.reducer';
import todosReducer from './todos.reducer';

const todoReducerRoot = combineReducers({
    todo: todoReducer,
    todos: todosReducer,
});

export default todoReducerRoot;