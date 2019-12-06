import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import todoModule from './modules/todo';
import userModule from './modules/user-ph';
import rootReducer from './modules/class-room/index';

const rootReducer = combineReducers({
    todoModule: todoModule,
    userModule: userModule,
});



const store = createStore(rootReducer, applyMiddleware(logger, thunk));
export default store;




