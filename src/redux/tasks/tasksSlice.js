import {
  createTask,
  deleteTask,
  getMonthTasks,
  updateTask,
} from './tasksOperations';

const { createSlice, isAnyOf } = require('@reduxjs/toolkit');

const extraActions = [getMonthTasks, createTask, deleteTask, updateTask];
const getExtraActions = type => extraActions.map(action => action.type);

//! Tasks initial state
const tasksInitialState = {
  data: null,
  isLoading: false,
  error: false,
};

//! Tasks slice
const tasksSlice = createSlice({
  name: 'tasks',
  initialState: tasksInitialState,
  extraReducers: builder =>
    builder
      .addCase(getMonthTasks.fulfilled, (state, { payload }) => {
        state.data = payload;
      })
      .addCase(createTask.fulfilled, (state, { payload }) => {
        state.data = [payload, ...state.data];
      })
      .addCase(deleteTask.fulfilled, (state, { payload }) => {
        const filteredTasks = state.data.filter(task => task._id !== payload);
        state.data = filteredTasks;
      })
      .addCase(
        updateTask.fulfilled,
        (state, { payload: { taskId, taskData } }) => {
          const updatedTasks = state.data.map(task =>
            task._id === taskId ? taskData : task
          );
          state.data = updatedTasks;
        }
      )

      .addMatcher(isAnyOf(...getExtraActions('fulfilled')), state =>
        tasksFulfilled(state)
      )
      .addMatcher(isAnyOf(...getExtraActions('pending')), state =>
        tasksPending(state)
      )
      .addMatcher(isAnyOf(...getExtraActions('rejected')), (state, action) =>
        tasksRejected(state, action)
      ),
});

function tasksFulfilled(state) {
  state.isLoading = false;
  state.error = null;
}

function tasksPending(state) {
  state.isLoading = true;
  state.error = null;
}

function tasksRejected(state, action) {
  state.isLoading = false;
  state.error = action.payload;
}

export const tasksReducer = tasksSlice.reducer;
