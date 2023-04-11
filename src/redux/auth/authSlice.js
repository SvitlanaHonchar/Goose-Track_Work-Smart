import {
  authGetUserInfo,
  authLogin,
  authLogout,
  authRefresh,
  authRegister,
  authUpdate,
} from './authOperations';

const { createSlice, isAnyOf } = require('@reduxjs/toolkit');

const extraActions = [
  authRegister,
  authLogin,
  authLogout,
  authRefresh,
  authGetUserInfo,
  authUpdate,
];
const extraLogActions = [authRegister, authLogin];
const getExtraActions = type => extraActions.map(action => action.type);
const getExtraLogActions = type => extraLogActions.map(action => action.type);

const authInitialState = {
  user: {
    name: null,
    email: null,
    phone: null,
    skype: null,
    userImgUrl: null,
  },
  isLogged: false,
  isLoading: false,
  error: false,
  accessToken: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder =>
    builder
      .addCase(authLogout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.accessToken = null;
        state.refreshToken = null;
        state.user = {
          name: null,
          email: null,
          phone: null,
          skype: null,
          userImgUrl: null,
        };
      })
      .addMatcher(
        isAnyOf(...getExtraLogActions('fulfilled')),
        (state, action) => {
          authFulfilled(state, action);
        }
      )
      .addMatcher(isAnyOf(...getExtraActions('pending')), state =>
        authPending(state)
      )
      .addMatcher(isAnyOf(...getExtraActions('rejected')), (state, action) =>
        authRejected(state, action)
      ),
});

function authFulfilled(state, action) {
  const { name, email, data } = action.payload;
  state.isLogged = true;
  state.isLoading = false;
  state.user.name = name;
  state.user.email = email;
  state.accessToken = data.accessToken;
  state.refreshToken = data.refreshToken;
}

function authPending(state) {
  state.isLogged = false;
  state.isLoading = true;
  state.error = null;
}

function authRejected(state, action) {
  state.isLogged = false;
  state.isLoading = false;
  state.error = action.payload;
  state.accessToken = null;
  state.refreshToken = null;
}

export const authReducer = authSlice.reducer;
