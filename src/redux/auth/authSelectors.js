export const selectIsLoggedIn = state => state.auth.isLogged;
export const selectIsUserLoading = state => state.auth.isLoading;
export const selectIsError = state => state.auth.error;
export const selectUser = state => state.auth.user;
