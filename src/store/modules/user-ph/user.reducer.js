import {
    USER__USER_REQUEST,
    USER__USER_RESPONSE_OK,
    USER__USER_RESPONSE_NOK,
} from './user.const';

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
const userReducer = (prevState = initialState, action) => {
    switch (action.type) {

        case USER__USER_REQUEST:
            return {
                ...prevState,
                loading: true,
            };
        case USER__USER_RESPONSE_OK:
            return {
                ...prevState,
                loading: false,
                ok: true,
                nok: false,
                data: action.payload,
            };

        case USER__USER_RESPONSE_NOK:
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

export default userReducer;