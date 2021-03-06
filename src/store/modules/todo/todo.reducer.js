import {
    TODO__TODO_REQUEST,
    TODO__TODO_RESPONSE_OK,
    TODO__TODO_RESPONSE_NOK,
} from './todo.const';

const initialState = {
    loading: false,
    ok: null,
    nok: null,
    errorMessage: '',
    data: null,
};

/**
 * 
 * @param {*} prevState 
 * @param {*} action 
 * @param {string} action.type
 * @param {*} action.payload 
 */
const todoReducer = (prevState = initialState, action) => {
    switch (action.type) {

        case TODO__TODO_REQUEST:
            return {
                ...prevState,
                loading: true,
            };
        case TODO__TODO_RESPONSE_OK:
            return {
                ...prevState,
                loading: false,
                ok: true,
                nok: false,
                data: action.payload,
            };

        case TODO__TODO_RESPONSE_NOK:
            return {
                ...prevState,
                loading: false,
                ok: false,
                nok: true,
                errorMessage: action.payload,
            };
        default:
            return prevState;
    }
}

export default todoReducer;