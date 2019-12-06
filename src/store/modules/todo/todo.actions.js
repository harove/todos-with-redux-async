import { getTodo, getTodos } from '../../../client/todo.client';

import {
    TODO__TODOS_REQUEST,
    TODO__TODOS_RESPONSE_OK,
    TODO__TODOS_RESPONSE_NOK,
    TODO__TODO_REQUEST,
    TODO__TODO_RESPONSE_OK,
    TODO__TODO_RESPONSE_NOK,
} from './todo.const';

const todosRequestActionCreator = () => ({
    type: TODO__TODOS_REQUEST,
    payload: null,
});

const todosResponseOKActionCreator = d => ({
    type: TODO__TODOS_RESPONSE_OK,
    payload: d,
});

const todosResponseNOKActionCreator = e => ({
    type: TODO__TODOS_RESPONSE_NOK,
    payload: e,
});

export const todosActionAsyncCreator = () => {
    return (dispatch, getStore) => {
        dispatch(todosRequestActionCreator());
        getTodos().then(response => {
            const data = response.data;
            dispatch(todosResponseOKActionCreator(data));
        }).catch(err => {
            dispatch(todosResponseNOKActionCreator(err));
        });
    };
};

// TODO
const todoRequestActionCreator = () => ({
    type: TODO__TODO_REQUEST,
    payload: null,
});

const todoResponseOKActionCreator = d => ({
    type: TODO__TODO_RESPONSE_OK,
    payload: d,
});

const todoResponseNOKActionCreator = e => ({
    type: TODO__TODO_RESPONSE_NOK,
    payload: e,
});

export const todoActionAsyncCreator = (id) => {
    return (dispatch, getStore) => {
        dispatch(todoRequestActionCreator());
        getTodo(id).then(response => {
            const data = response.data;
            dispatch(todoResponseOKActionCreator(data));
        }).catch(err => {
            dispatch(todoResponseNOKActionCreator(err));
        });
    };
};