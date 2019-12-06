import { USER__ADD_USER, USER__DELETE_USER, USER__EDIT_USER } from './user.const';

export const addUserActionCreator = (user) => {
    return {
        type: USER__ADD_USER,
        payload: user,
    };
};

export const deleteUserActionCreator = (obj) => {
    return {
        type: USER__DELETE_USER,
        payload: obj,
    };
};

/**
 * 
 * @param {Array<any>} userList 
 * @param {*} user 
 */
export const editUserActionCreator = (userList, user) => {
    const nList = userList;
    const id = userList.findIndex(e => e.id === user.id);
    nList[id].name = user.name;
    return {
        type: USER__EDIT_USER,
        payload: nList,
    };
};