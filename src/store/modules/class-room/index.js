import { combineReducers } from 'redux';

import classRoomReducer from './classRoom.reducer';

const rootReducer = combineReducers({
    classRoom: classRoomReducer,
});

export default rootReducer;