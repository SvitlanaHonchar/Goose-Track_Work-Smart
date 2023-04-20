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

$privateHost.interceptors.response.use(
  config => config,
  async error => {
    console.log('error: ', error.response.status);
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      try {
        originalRequest._isRetry = true;
        const response = await $refreshHost.post('user/refresh');
        localStorage.setItem(
          'persist:auth',
          JSON.stringify({
            accessToken: response.data.accessToken,
            refreshToken: response.data.refreshToken,
            _persist: '{"version":-1,"rehydrated":true}',
          })
        );
        return $privateHost.request(originalRequest);
      } catch (error) {
        console.log(error);
      }
    }
    throw error;
  }
);

export const GooseTracker_API = {
  //!UserAuth
  register: async registerData => {
    const response = await $publicHost.post('user/register', registerData);
    if (response.statusText === 'OK') {
      const accessToken = response.data.data.accessToken;
      const refreshToken = response.data.data.refreshToken;
      setInterseptor(accessToken, refreshToken);
    }

    return response.data;
  },
  login: async loginData => {
    const response = await $publicHost.post('user/login', loginData);
    if (response.statusText === 'OK') {
      const accessToken = response.data.data.accessToken;
      const refreshToken = response.data.data.refreshToken;
      setInterseptor(accessToken, refreshToken);
    }
    return response.data;
  },
  logout: async () => {
    const response = await $privateHost.get('user/logout');
    return response.data;
  },
  refreshUser: async () => {
    refreshInterseptor();
    const response = await $refreshHost.post('user/refresh');
    if (response.statusText === 'OK') {
      const accessToken = response.data.data.accessToken;
      const refreshToken = response.data.data.refreshToken;
      setInterseptor(accessToken, refreshToken);
    }
    // console.log('response: ', response);

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

function setInterseptor(accessToken, refreshToken) {
  console.log('refreshToken: ', refreshToken);
  console.log('accessToken: ', accessToken);
  const authInterceptorPrivate = config => {
    const authHeader = `Bearer ${accessToken}`;

    config.headers['Authorization'] = authHeader;
    return config;
  };

  const authInterceptorRefresh = config => {
    const refreshHeader = `Bearer ${refreshToken}`;

    config.headers['Authorization'] = refreshHeader;
    return config;
  };

  $privateHost.interceptors.request.use(authInterceptorPrivate);
  $refreshHost.interceptors.request.use(authInterceptorRefresh);
}

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
