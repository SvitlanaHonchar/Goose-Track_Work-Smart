export const selectIsLoggedIn = state => state.auth.isLogged;
export const selectIsUserLoading = state => state.auth.isLoading;
export const selectUserError = state => state.auth.error;
export const selectIsUserError = state => Boolean(state.auth.error);
export const selectUser = state => state.auth.user;
export const selectIsAccessToken = state => state.auth.accessToken;
export const selectIsRefreshToken = state => state.auth.refreshToken;
export const selectIsRefreshed = state => state.auth.isRefreshed;
