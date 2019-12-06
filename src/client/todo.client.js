import axios from 'axios';

import { API_HOST } from './config';
const RESOURCE = 'todos';

const URL = `${API_HOST}/${RESOURCE}`;

export const getTodos = () => {
    const url = URL
    return axios(url);
}

export const getTodo = (id) => {
    const url = `${URL}/${id}`
    return axios(url);
}