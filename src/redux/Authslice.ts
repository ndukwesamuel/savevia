import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: string;
  email: string;
  fullName: string;
  phone: string;
}

interface AuthState {
  isLoggedIn: boolean;
  user: any;
  token: string | null;
  verified: any;
  email: any;
}

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
  token: null,
  verified: null,
  email: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ user: User; token: string }>) => {
      state.isLoggedIn = true;
      state.user = action.payload;
      state.token = action.payload.token;
      state.verified = action.payload.verified;
    },
    signUp: (state, action: PayloadAction<{ user: User; token: string }>) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },

    emailData: (state, action: PayloadAction<{ email: any }>) => {
      state.email = action.payload;
    },

    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.token = null;
      state.verified = null;
    },
    updateUser: (state, action: PayloadAction<Partial<User>>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },
  },
});

export const { login, signUp, logout, updateUser, emailData } =
  authSlice.actions;
export default authSlice.reducer;
