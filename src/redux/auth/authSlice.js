import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  authGetUserInfo,
  authLogin,
  authLogout,
  authRefresh,
  authRegister,
  authUpdate,
} from './authOperations';

const extraActions = [
  authRegister,
  authLogin,
  authLogout,
  authRefresh,
  authGetUserInfo,
  authUpdate,
];
const extraLogActions = [authRegister, authLogin];
const getExtraActions = type => extraActions.map(action => action[type]);
const getExtraLogActions = type => extraLogActions.map(action => action[type]);

//!Auth initial state
const authInitialState = {
  user: {
    name: null,
    email: null,
    phone: null,
    skype: null,
    userImgUrl: null,
    birthday: null,
  },
  isLogged: false,
  isLoading: false,
  isRefreshed: false,

  error: false,
  accessToken: null,
  refreshToken: null,
};

//!Auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder =>
    builder
      .addCase(authLogout.fulfilled, (state, action) => {
        state.accessToken = null;
        state.refreshToken = null;
        state.isLogged = false;
        state.user = {
          name: null,
          email: null,
          phone: null,
          skype: null,
          userImgUrl: null,
        };
      })
      .addCase(
        authRefresh.fulfilled,
        (
          state,
          {
            payload: {
              data: { accessToken, refreshToken },
            },
          }
        ) => {
          state.accessToken = accessToken;
          state.refreshToken = refreshToken;
          state.isLogged = true;
        }
      )
      .addCase(
        authUpdate.fulfilled,
        (
          state,
          { payload: { name, email, skype, phone, userImgUrl, birthday } }
        ) => {
          state.user = {
            name,
            email,
            phone,
            skype,
            userImgUrl,
            birthday,
          };
        }
      )
      .addCase(
        authGetUserInfo.fulfilled,
        (
          state,
          { payload: { name, email, skype, phone, userImgUrl, birthday } }
        ) => {
          state.user = {
            name,
            email,
            phone,
            skype,
            userImgUrl,
            birthday,
          };
          state.isLoading = false;
          state.error = false;
          state.isLogged = true;
        }
      )
      .addMatcher(
        isAnyOf(...getExtraLogActions('fulfilled')),
        (state, action) => {
          authLogFulfilled(state, action);
        }
      )
      .addMatcher(isAnyOf(...getExtraActions('fulfilled')), state => {
        authFulfilled(state);
      })
      .addMatcher(isAnyOf(...getExtraActions('pending')), state =>
        authPending(state)
      )
      .addMatcher(isAnyOf(...getExtraActions('rejected')), (state, action) =>
        authRejected(state, action)
      ),
});

function authLogFulfilled(state, action) {
  const { name, email, data } = action.payload;
  state.isLogged = true;
  state.isLoading = false;
  state.user.name = name;
  state.user.email = email;
  state.accessToken = data.accessToken;
  state.refreshToken = data.refreshToken;
}

function authFulfilled(state) {
  state.isLoading = false;
  state.error = false;
  // state.isLogged = true;
}

function authPending(state) {
  state.isLoading = true;
  state.error = false;
}

function authRejected(state, action) {
  state.isLogged = false;
  state.isLoading = false;
  state.user = {
    name: null,
    email: null,
    phone: null,
    skype: null,
    userImgUrl: null,
  };
  state.error = action.payload;
}

export const authReducer = authSlice.reducer;
