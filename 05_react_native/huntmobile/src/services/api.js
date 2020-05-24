import axios from 'axios';

const api = axios.create({
  baseURL: 'https://mafda-hunts-api.herokuapp.com/api/'

});

export default api;