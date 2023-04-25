import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const ACCESS_KEY = "u-access";
const USERNAME = "u-username";

interface AuthState {
  access: string;
  username: string;
  isAuth: boolean;
}

const initialState: AuthState = {
  access: localStorage.getItem(ACCESS_KEY) ?? "",
  username: localStorage.getItem(USERNAME) ?? "",
  isAuth: Boolean(localStorage.getItem(USERNAME)),
};

interface AuthPayload {
  username: string;
  access: string;
}

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<AuthPayload>) {
      state.access = action.payload.access;
      state.username = action.payload.username;
      state.isAuth = Boolean(action.payload.username);

      localStorage.setItem(ACCESS_KEY, action.payload.access);
      localStorage.setItem(USERNAME, action.payload.username);
    },
    logout(state) {
      state.access = "";
      state.username = "";
      state.isAuth = false;

      localStorage.removeItem(ACCESS_KEY);
      localStorage.removeItem(USERNAME);
    },
  },
});

export const { login, logout } = AuthSlice.actions;

export default AuthSlice.reducer;
