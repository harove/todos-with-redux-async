import { USER__ADD_USER, USER__DELETE_USER, USER__EDIT_USER } from './user.const';
const initialState = {
    id: 1,
    list: [{
        id: 1,
        name: 'Goku',
    }],
    idRemove: null,
};

/*
agregar usuario USER/ADD_USER
eliminar usuario USER/DELETE_USER
editar usuario USER/EDIT_USER
*/

/**
 * @param {any} action
 * @param {string} action.type
 * @param {any} action.payload
 */
const userReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case USER__ADD_USER:
            const newId = prevState.id + 1;
            const newUser = {
                id: newId,
                name: action.payload.name,
            };
            const newList = prevState.list;
            newList.push(newUser);
            return {
                ...prevState,
                id: newId,
                list: newList,
            };
        case USER__DELETE_USER:
            return {
                ...prevState,
                // payload.list , payload.idRemove
                ...action.payload,
            };
        case USER__EDIT_USER:
            return {
                ...prevState,
                list: action.payload,
            };
        default:
            return prevState;
    }
};

export default userReducer;