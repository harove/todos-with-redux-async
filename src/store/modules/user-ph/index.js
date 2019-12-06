import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import usersReducer from './users.reducer';

const userReducerRoot = combineReducers({
    user: userReducer,
    users: usersReducer,
});

export default userReducerRoot;