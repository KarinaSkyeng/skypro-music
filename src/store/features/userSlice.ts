import { fetchToken, login, register } from "@/api/login";
import { LoginType } from "@/types/login";
import { RegisterType } from "@/types/register";
import { TokenType } from "@/types/token";
import { UserType } from "@/types/user";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const getToken = createAsyncThunk(
  "user/getToken",
  async ({ email, password }: LoginType) => {
    const response = await fetchToken({ email, password });
    return response;
  }
);

export const signIn = createAsyncThunk(
  "user/signIn",
  async ({ email, password }: LoginType) => {
    const response = await login({ email, password });
    return response;
  }
);

export const signUp = createAsyncThunk(
  "user/signUp",
  async ({ email, password, username }: RegisterType) => {
    const response = await register({ email, password, username });
    return response;
  }
);
type UserStateType = {
  user: UserType | null;
  tokens: TokenType | null;
  isAuthenticated: boolean;
  token: string | null;
};

export const initialState: UserStateType = {
  user: null,
  tokens: null,
  isAuthenticated: false,
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.tokens = null;
      state.isAuthenticated = false;
      state.token = null;
      localStorage.removeItem("authToken");
    },
    restoreAuth: (state, action: PayloadAction<{ token: string }>) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        localStorage.setItem("authToken", action.payload.token);
      })
      .addCase(signIn.rejected, (state, action) => {
        console.error("Ошибка входа:", action.error.message);
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        localStorage.setItem("authToken", action.payload.token);
      })
      .addCase(signUp.rejected, (state, action) => {
        console.error("Ошибка регистрации:", action.error.message);
      })
      .addCase(getToken.fulfilled, (state, action) => {
        state.tokens = action.payload;
        state.isAuthenticated = true;
        state.token = action.payload.token;
        localStorage.setItem("authToken", action.payload.token);
      })
      .addCase(getToken.rejected, (state, action) => {
        console.error("Ошибка получения токена:", action.error.message);
      });
  },
});

export const { logout, restoreAuth } = userSlice.actions;
export const userReducer = userSlice.reducer;