import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../config/AuthService";
import axios from "axios";
const initialStateAuth = {
  token: "",

  isAuthenticated: false,

  isLoading: false,
  isRegisterLoading: false,

  auth: [],
};

export const fetchDoLogin = createAsyncThunk(
  "auth/fetchDoLogin",
  async (payload, thunkAPI) => {
    try {
      const result = await fetch(AuthService.login, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",

          "Accept-Encoding": "br;q=1.0, gzip;q=0.8, *;q=0.1",
        },

        body: JSON.stringify({
          username: payload.username,

          password: payload.password,
        }),
      })
        .then((p) => p.status === 400 ? p.json() : p.text())
        .then((p) => {
          return p;
        })
        .catch((err) => console.log(err));
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);
export const fetchDoRegister = createAsyncThunk(
  "auth/fetchDoRegister",
  async (payload) => {
    try {
      axios
        .post(AuthService.register, {
          username: payload.username,
          password: payload.password,
          email: payload.email,
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log("error xsacv", error);
    }
  }
);
const authSlice = createSlice({
  name: "auth",

  initialState: initialStateAuth,

  reducers: {
    setLogin: (state) => {
      state.isAuthenticated = true;
    },
    setLogout: (state) => {
      state.isAuthenticated = false;
    },
  },

  extraReducers: (build) => {
    build.addCase(fetchDoLogin.fulfilled, (state, action) => {
      console.log("token : " + action.payload);
      state.token = action.payload;
      if (action.payload !== "Giriş Başarısız") state.isAuthenticated = true;
       else if(action.payload === "Giriş Başarısız"){
        state.isAuthenticated = false;
       }
       else if (action.payload.code === 2001) {
        state.isAuthenticated = false;

        alert("Kullanıcı adı veya şifre hatalı");
      }
       
    });
    build.addCase(fetchDoRegister.rejected, (state, action) => {
      state.token = "";
      state.isAuthenticated = false;
      console.log("fetchDoLogin rejected: ", action.payload);
    });
    build.addCase(fetchDoRegister.pending, (state, action) => {
      state.isRegisterLoading = true;
    });
    build.addCase(fetchDoRegister.fulfilled, (state, action) => {
      state.isRegisterLoading = false;
    });
  },
});
export const { setLogin, setLogout } = authSlice.actions;
export default authSlice.reducer;
