import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../config/AuthService";
const initialStateAuth = {
  token: "",

  isAuthenticated: false,

  isLoading: false,

  auth: [],
};
export const fetchDoLogin = createAsyncThunk(
  "auth/fetchDoLogin",
  async (payload, thunkAPI) => {
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
      .then((p) => p.json())
      .catch((err) => console.log(err));
    return result;
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

  extraReducers:(build) =>{

    build.addCase(fetchDoLogin.fulfilled,(state,action)=>{
        console.log("token : "+action.payload);
        state.token = action.payload;

        state.isAuthenticated = true;

    })

},
});
export const { setLogin, setLogout } = authSlice.actions;
export default authSlice.reducer;
