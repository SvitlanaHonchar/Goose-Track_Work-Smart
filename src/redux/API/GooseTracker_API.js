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
  register: async (registerData, accessToken) => {
    setAccessToken(accessToken);
    const response = await $publicHost.post('user/register', registerData);

    return response.data;
  },
  login: async (loginData, accessToken) => {
    setAccessToken(accessToken);
    const response = await $publicHost.post('user/login', loginData);

    return response.data;
  },
  logout: async accessToken => {
    setAccessToken(accessToken);
    const response = await $privateHost.get('user/logout');
    return response.data;
  },
  refreshUser: async refreshToken => {
    setRefreshToken(refreshToken);
    const response = await $refreshHost.post('user/refresh');
    return response.data;
  },
  getUserInfo: async accessToken => {
    setAccessToken(accessToken);
    const response = await $privateHost.get('user/info');
    return response.data;
  },
  updateUser: async (updateData, accessToken) => {
    setAccessToken(accessToken);
    const response = await $privateHost.patch('user/update', updateData);
    return response.data;
  },

  //!Tasks
  getMonthTasks: async ({ year, month }, accessToken) => {
    if (typeof month !== 'number' || month > 12 || month < 1)
      throw new Error('Bad month tasks request: enter correct values!');
    setAccessToken(accessToken);
    const response = await $privateHost.get(
      `task/by-month?year=${year}&month=${month}`
    );
    return response.data;
  },
  createTask: async (task, accessToken) => {
    setAccessToken(accessToken);
    const response = await $privateHost.post('task', task);
    return response.data;
  },
  deleteTask: async (taskId, accessToken) => {
    setAccessToken(accessToken);
    const response = await $privateHost.delete(`task/${taskId}`);
    return response.data;
  },
  updateTask: async ({ taskId, taskData }, accessToken) => {
    setAccessToken(accessToken);
    const response = await $privateHost.put(`task/${taskId}`, taskData);
    return response.data;
  },
};

function setAccessToken(token) {
  $privateHost.defaults.headers.common.Authorization = 'Bearer ' + token;
}

function setRefreshToken(token) {
  $privateHost.defaults.headers.common.Authorization = 'Bearer ' + token;
}
