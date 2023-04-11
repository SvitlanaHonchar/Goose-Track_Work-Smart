import axios from 'axios';

const $publicHost = axios.create({
  baseURL: 'https://goose-tracker-backend.p.goit.global/api-docs/',
});

const $privateHost = axios.create({
  baseURL: 'https://goose-tracker-backend.p.goit.global/api-docs/',
});

const $refreshHost = axios.create({
  baseURL: 'https://goose-tracker-backend.p.goit.global/api-docs/',
});

const authInterceptorPrivate = config => {
  config.headers['Authorization'] = localStorage.getItem('accessToken');
  return config;
};

const authInterceptorRefresh = config => {
  config.headers['Authorization'] = localStorage.getItem('refreshToken');
  return config;
};

$privateHost.interceptors.request.use(authInterceptorPrivate);
$refreshHost.interceptors.request.use(authInterceptorRefresh);

export const GooseTracker_API = {
  //!UserAuth
  register: async registerData => {
    const response = await $publicHost.post('user/register', registerData);
    return response.data;
  },
  login: async loginData => {
    const response = await $publicHost.post('user/login', loginData);
    return response.data;
  },
  logout: async () => {
    const response = await $privateHost.get('user/logout');
    return response.data;
  },
  refreshUser: async () => {
    const response = await $refreshHost.post('user/refresh');
    return response.data;
  },
  getUserInfo: async () => {
    const response = await $privateHost.get('user/info');
    return response.data;
  },
  updateUser: async updateData => {
    const response = await $privateHost.patch('user/update', updateData);
    return response.data;
  },

  //!Tasks
  getMonthTasks: async () => {
    const response = await $privateHost.get('task/by-month');
    return response.data;
  },
  createTask: async task => {
    const response = await $privateHost.post('task', task);
    return response.data;
  },
  deleteTask: async taskId => {
    const response = await $privateHost.delete(`task/${taskId}`);
    return response.data;
  },
  updateTask: async (taskId, taskData) => {
    const response = await $privateHost.put(`task/${taskId}`, taskData);
    return response.data;
  },
};
