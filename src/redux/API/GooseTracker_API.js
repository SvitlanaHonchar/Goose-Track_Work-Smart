import axios from 'axios';

const $publicHost = axios.create({
  baseURL: 'https://goose-tracker-backend.p.goit.global/',
});

const $privateHost = axios.create({
  baseURL: 'https://goose-tracker-backend.p.goit.global/',
});

const $refreshHost = axios.create({
  baseURL: 'https://goose-tracker-backend.p.goit.global/',
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
    const response = await $publicHost.post(
      'user/register',
      JSON.stringify(registerData)
    );
    console.log('register response: ', response);

    return JSON.parse(response.data);
  },
  login: async loginData => {
    const response = await $publicHost.post(
      'user/login',
      JSON.stringify(loginData)
    );
    return JSON.parse(response.data);
  },
  logout: async () => {
    const response = await $privateHost.get('user/logout');
    return JSON.parse(response.data);
  },
  refreshUser: async () => {
    const response = await $refreshHost.post('user/refresh');
    return JSON.parse(response.data);
  },
  getUserInfo: async () => {
    const response = await $privateHost.get('user/info');
    return JSON.parse(response.data);
  },
  updateUser: async updateData => {
    const response = await $privateHost.patch(
      'user/update',
      JSON.stringify(updateData)
    );
    return JSON.parse(response.data);
  },

  //!Tasks
  getMonthTasks: async () => {
    const response = await $privateHost.get('task/by-month');
    return JSON.parse(response.data);
  },
  createTask: async task => {
    const response = await $privateHost.post('task', JSON.stringify(task));
    return JSON.parse(response.data);
  },
  deleteTask: async taskId => {
    const response = await $privateHost.delete(`task/${taskId}`);
    return JSON.parse(response.data);
  },
  updateTask: async (taskId, taskData) => {
    const response = await $privateHost.put(
      `task/${taskId}`,
      JSON.stringify(taskData)
    );
    return JSON.parse(response.data);
  },
};
