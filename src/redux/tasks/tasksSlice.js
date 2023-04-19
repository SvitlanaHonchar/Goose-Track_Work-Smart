import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  createTask,
  deleteTask,
  getMonthTasks,
  updateTask,
} from './tasksOperations';

const extraActions = [getMonthTasks, createTask, deleteTask, updateTask];
const getExtraActions = type => extraActions.map(action => action[type]);

//! Tasks initial state
const tasksInitialState = {
  data: null, // [{date: string, tasks: Task[]}]
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
        state.data = payload ?? null;
      })
      .addCase(createTask.fulfilled, (state, { payload }) => {
        console.log('payload: ', payload);
        const taskDate = payload.date.slice(0, 10);
        console.log('taskDate: ', taskDate);
        let dateFound = false;
        if (!state.data) {
          state.data = [{ date: taskDate, tasks: [payload] }];
        }
        state.data = state.data.map(el => {
          if (el.date === taskDate) {
            el.tasks = [payload, ...el.tasks];
            dateFound = true;
          }
          return el;
        });
        if (!dateFound) {
          state.data = [{ date: taskDate, tasks: [payload] }, ...state.data];
        }
      })
      .addCase(deleteTask.fulfilled, (state, { payload }) => {
        const filteredTasks = state.data.map(el => {
          el.tasks.filter(task => task._id !== payload);
          return el;
        });
        state.data = filteredTasks;
      })
      .addCase(updateTask.fulfilled, (state, { payload }) => {
        const updatedTask = payload.task;
        // =============
        state.data = state.data.map(el => {
          if (el.date !== updatedTask.date) return;
          el.tasks = el.tasks.map(task =>
            task._id === updatedTask._id ? updatedTask : task
          );
          return el;
        });
        //  =========
        //     state.data = state.data.map(el => {
        //     el.tasks.map(task => {
        //       if (task._id === updatedTask._id) {
        //         return updatedTask;
        //       }
        //       return task;
        //     });
        //     return el;
        //   });
      })

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
