import { createAsyncThunk } from '@reduxjs/toolkit';
import { GooseTracker_API } from 'redux/API/GooseTracker_API';

//!Register
export const authRegister = createAsyncThunk(
  'user/register',
  async (user, thunkAPI) => {
    try {
      return await GooseTracker_API.register(user);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//!Login
export const authLogin = createAsyncThunk(
  'user/login',
  async (user, thunkAPI) => {
    try {
      return await GooseTracker_API.login(user);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//!Logout
export const authLogout = createAsyncThunk(
  'user/logout',
  async (_, thunkAPI) => {
    try {
      return await GooseTracker_API.logout();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//!Refresh
export const authRefresh = createAsyncThunk(
  'user/refresh',
  async (_, thunkAPI) => {
    try {
      return await GooseTracker_API.refreshUser();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//!Get user info
export const authGetUserInfo = createAsyncThunk(
  'user/info',
  async (_, thunkAPI) => {
    try {
      return await GooseTracker_API.getUserInfo();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//!Update
export const authUpdate = createAsyncThunk(
  'user/update',
  async (user, thunkAPI) => {
    try {
      return await GooseTracker_API.updateUser(user);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
