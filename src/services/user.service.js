import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:3000/api/home/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'intents');
  }

  getUserBoard() {
    return axios.get(API_URL + 'intents', { headers: authHeader() });
  }
}

export default new UserService();
