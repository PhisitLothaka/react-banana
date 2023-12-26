import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login as loginAPI } from "../../services/apiAuth";
import { setAccessToken } from "../../utils/token";

const initialState = {
  user: undefined,
  loading: false,
  error: {
    loginError: "",
    signupError: "",
    getUserError: "",
    editAddressError: "",
    editUserError: "",
  },
  address: undefined,
  editUser: null,
};

export const login = createAsyncThunk(
  "user/login",
  async (payload, thunkApi) => {
    try {
      const data = await loginAPI(payload);
      setAccessToken(data.accessToken);
      return data.user;
    } catch (_) {
      return thunkApi.rejectWithValue("Invalid Credential.");
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    //login
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.error.loginError = "";
      })
      .addCase(login.pending, (state) => {
        state.user = undefined;
        state.loading = true;
        state.error.loginError = "";
      })
      .addCase(login.rejected, (state, action) => {
        state.user = undefined;
        state.loading = false;
        state.error.loginError = action.payload;
      });
  },
});

export const userReducer = userSlice.reducer;
