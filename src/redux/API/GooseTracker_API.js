import axios from 'axios';

const baseURL = 'https://goose-tracker-backend.p.goit.global/';
// axios.defaults.baseURL = baseURL;
const $publicHost = axios.create({
  baseURL,
});

const $privateHost = axios.create({
  baseURL,
});

const $refreshHost = axios.create({
  baseURL,
});

export const GooseTracker_API = {
  //!UserAuth
  register: async registerData => {
    const response = await $publicHost.post('user/register', registerData);
    console.log('register response: ', response);

    return response.data;
  },
  login: async loginData => {
    const response = await $publicHost.post('user/login', loginData);
    return response.data;
  },
  logout: async () => {
    refreshInterseptor();
    const response = await $privateHost.get('user/logout');
    return response.data;
  },
  refreshUser: async () => {
    refreshInterseptor();
    const response = await $refreshHost.post('user/refresh');

    return response.data;
  },
  getUserInfo: async () => {
    refreshInterseptor();
    const response = await $privateHost.get('user/info');
    return response.data;
  },
  updateUser: async updateData => {
    refreshInterseptor();
    const response = await $privateHost.patch('user/update', updateData);
    return response.data;
  },

  //!Tasks
  getMonthTasks: async ({ year, month }) => {
    if (typeof month !== 'number' || month > 12 || month < 1)
      throw new Error('Bad month tasks request: enter correct values!');
    const response = await $privateHost.get(
      `task/by-month?year=${year}&month=${month}`
    );
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
  updateTask: async ({ taskId, taskData }) => {
    const response = await $privateHost.put(`task/${taskId}`, taskData);
    return response.data;
  },
};

function refreshInterseptor() {
  const authInterceptorPrivate = config => {
    const accessToken = JSON.parse(
      localStorage.getItem('persist:auth')
    ).accessToken;

    const authHeader = `Bearer ${accessToken.slice(1, accessToken.length - 1)}`;

    config.headers['Authorization'] = authHeader;
    return config;
  };

  const authInterceptorRefresh = config => {
    const refreshToken = JSON.parse(
      localStorage.getItem('persist:auth')
    ).refreshToken;

    const refreshHeader = `Bearer ${refreshToken.slice(
      1,
      refreshToken.length - 1
    )}`;

    config.headers['Authorization'] = refreshHeader;
    return config;
  };

  $privateHost.interceptors.request.use(authInterceptorPrivate);
  $refreshHost.interceptors.request.use(authInterceptorRefresh);
}
