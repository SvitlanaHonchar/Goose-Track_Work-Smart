export const selectAllTasks = state => state.tasks.data;

export const selectAreTasksLoading = state => state.tasks.isLoading;

export const selectTasksError = state => state.tasks.error;

export const selectIsTasksError = state => Boolean(state.tasks.error);
