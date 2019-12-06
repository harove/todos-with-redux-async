import { getUser, getUsers } from '../../../client/user.client';

import {
    USER__USERS_REQUEST,
    USER__USERS_RESPONSE_OK,
    USER__USERS_RESPONSE_NOK,
    USER__USER_REQUEST,
    USER__USER_RESPONSE_OK,
    USER__USER_RESPONSE_NOK,
} from './user.const';

const usersRequestActionCreator = () => ({
    type: USER__USERS_REQUEST,
    payload: null,
});

const usersResponseOKActionCreator = d => ({
    type: USER__USERS_RESPONSE_OK,
    payload: d,
});

const usersResponseNOKActionCreator = e => ({
    type: USER__USERS_RESPONSE_NOK,
    payload: e,
});

export const usersActionAsyncCreator = () => {
    return (dispatch, getStore) => {
        dispatch(usersRequestActionCreator());
        getUsers().then(response => {
            const data = response.data;
            dispatch(usersResponseOKActionCreator(data));
        }).catch(err => {
            dispatch(usersResponseNOKActionCreator(err));
        });
    };
};

// USER
const userRequestActionCreator = () => ({
    type: USER__USER_REQUEST,
    payload: null,
});

const userResponseOKActionCreator = d => ({
    type: USER__USER_RESPONSE_OK,
    payload: d,
});

const userResponseNOKActionCreator = e => ({
    type: USER__USER_RESPONSE_NOK,
    payload: e,
});

export const userActionAsyncCreator = (id) => {
    return (dispatch, getStore) => {
        dispatch(userRequestActionCreator());
        getUser(id).then(response => {
            const data = response.data;
            dispatch(userResponseOKActionCreator(data));
        }).catch(err => {
            dispatch(userResponseNOKActionCreator(err));
        });
    };
};