import { createAsyncThunk } from '@reduxjs/toolkit';
import { GooseTracker_API } from 'redux/API/GooseTracker_API';

export const getMonthTasks = createAsyncThunk(
  'task/by-month',
  async ({ year, month }, thunkAPI) => {
    try {
      return await GooseTracker_API.getMonthTasks(
        { year, month },
        thunkAPI.getState().auth.accessToken
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createTask = createAsyncThunk(
  'task/create',
  async (task, thunkAPI) => {
    try {
      return GooseTracker_API.createTask(
        task,
        thunkAPI.getState().auth.accessToken
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'task/delete',
  async (taskId, thunkAPI) => {
    try {
      return await GooseTracker_API.deleteTask(
        taskId,
        thunkAPI.getState().auth.accessToken
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateTask = createAsyncThunk(
  'task/update',
  async ({ taskId, taskData }, thunkAPI) => {
    try {
      return await GooseTracker_API.updateTask(
        { taskId, taskData },
        thunkAPI.getState().auth.accessToken
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
