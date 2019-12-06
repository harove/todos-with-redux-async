import axios from 'axios';

import { API_HOST } from './config';
const RESOURCE = 'users';

const URL = `${API_HOST}/${RESOURCE}`;

export const getUsers = () => {
    const url = URL
    return axios(url);
}

export const getUser = (id) => {
    const url = `${URL}/${id}`
    return axios(url);
}