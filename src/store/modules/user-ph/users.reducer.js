import {
    USER__USERS_REQUEST,
    USER__USERS_RESPONSE_OK,
    USER__USERS_RESPONSE_NOK,
} from './user.const';

const initialState = {
    loading: false,
    ok: null,
    nok: null,
    errorMessage: '',
    data: [],
};

/**
 * 
 * @param {*} prevState 
 * @param {*} action 
 * @param {string} action.type
 * @param {*} action.payload 
 */
const usersReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case USER__USERS_REQUEST:
            return {
                ...prevState,
                loading: true,
            };
        case USER__USERS_RESPONSE_OK:
            return {
                ...prevState,
                loading: false,
                ok: true,
                nok: false,
                data: action.payload,
            };

        case USER__USERS_RESPONSE_NOK:
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

export default usersReducer;