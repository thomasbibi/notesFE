import axios from 'axios';

const api = axios.create({
    baseURL: 'https://notes-app-btpi.onrender.com/api/v1',
});

export default api;
