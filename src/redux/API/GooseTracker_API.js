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
  getMonthTasks: async () => {
    const response = await axios.get('task/by-month');
    return JSON.parse(response.data);
  },
  createTask: async task => {
    const response = await axios.post('task', JSON.stringify(task));
    return JSON.parse(response.data);
  },
  deleteTask: async taskId => {
    const response = await axios.delete(`task/${taskId}`);
    return JSON.parse(response.data);
  },
  updateTask: async (taskId, taskData) => {
    const response = await axios.put(
      `task/${taskId}`,
      JSON.stringify(taskData)
    );
    return JSON.parse(response.data);
  },
};

function refreshInterseptor() {
  const authInterceptorPrivate = config => {
    const accessToken = JSON.parse(
      localStorage.getItem('persist:auth')
    ).accessToken;
    console.log('accessToken: ', accessToken);

    const authHeader = `Bearer ${accessToken.slice(1, accessToken.length - 1)}`;
    console.log('authHeader: ', authHeader);

    config.headers['Authorization'] = authHeader;
    return config;
  };

  const authInterceptorRefresh = config => {
    const refreshToken = JSON.parse(
      localStorage.getItem('persist:auth')
    ).refreshToken;
    console.log('accessToken: ', refreshToken);

    const refreshHeader = `Bearer ${refreshToken.slice(
      1,
      refreshToken.length - 1
    )}`;
    console.log('refreshHeader: ', refreshHeader);

    config.headers['Authorization'] = refreshHeader;
    return config;
  };

  $privateHost.interceptors.request.use(authInterceptorPrivate);
  $refreshHost.interceptors.request.use(authInterceptorRefresh);
}
