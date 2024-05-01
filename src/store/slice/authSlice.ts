import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  accessToken: string;
  refreshToken: string;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  accessToken: "",
  refreshToken: "",
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
      state.isAuthenticated = true;
    },
    setRefreshToken: (state, action: PayloadAction<string>) => {
      state.refreshToken = action.payload;
      state.isAuthenticated = true;
    },
    resetAuthState: (state) => {
      state.accessToken = "";
      state.refreshToken = "";
      state.isAuthenticated = false;
    },
  },
});

export const selectAccessToken = (state: { auth: AuthState }) =>
  state.auth.accessToken;
export const selectRefreshToken = (state: { auth: AuthState }) =>
  state.auth.refreshToken;
export const selectIsAuthenticated = (state: { auth: AuthState }) =>
  state.auth.isAuthenticated;

export const { setAccessToken, setRefreshToken, resetAuthState } =
  authSlice.actions;

export default authSlice.reducer;
