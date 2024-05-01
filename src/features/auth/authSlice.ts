import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface LoginPayload {
  username: string;
  password: string;
}

interface LoginResponse {
  email: string;
  token: string;
  token_expires_in: string;
}

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
    setAccessToken: (
      state,
      action: PayloadAction<{ token: string; expiresIn: string }>
    ) => {
      state.accessToken = action.payload.token;
      state.isAuthenticated = true;
    },
    setRefreshToken: (
      state,
      action: PayloadAction<{ token: string; expiresIn: string }>
    ) => {
      state.refreshToken = action.payload.token;
      state.isAuthenticated = true;
    },
    resetAuthState: (state) => {
      state.accessToken = "";
      state.refreshToken = "";
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.accessToken = action.payload.token;
        state.refreshToken = "";
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (_state, _action) => {});
  },
});

export const loginUser = createAsyncThunk<
  LoginResponse,
  LoginPayload,
  { rejectValue: string }
>("auth/loginUser", async ({ username, password }, { rejectWithValue }) => {
  try {
    const response = await fetch(
      "https://backend-practice.euriskomobility.me/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: username, password }),
      }
    );

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Login failed");
    }
    return {
      email: data.email,
      token: data.access_token,
      token_expires_in: data.token_expires_in,
    };
  } catch (error) {
    return rejectWithValue(
      (error as any).message || "An unexpected error occurred"
    );
  }
});

export const registerUser = createAsyncThunk<
  LoginResponse,
  LoginPayload,
  { rejectValue: string }
>("auth/registerUser", async ({ username, password }, { rejectWithValue }) => {
  try {
    const response = await fetch(
      "https://backend-practice.euriskomobility.me/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: username, password }),
      }
    );
    const data = await response.json();
    if (!response.ok) {
      if (response.status === 409) {
        return rejectWithValue("Username already exists");
      }
      throw new Error(data.message || "Registration failed");
    }
    return {
      email: data.email,
      token: data.access_token,
      token_expires_in: data.token_expires_in,
    };
  } catch (error) {
    return rejectWithValue(
      (error as any).message || "An unexpected error occurred"
    );
  }
});

export const { setAccessToken, setRefreshToken, resetAuthState } =
  authSlice.actions;

export default authSlice.reducer;
