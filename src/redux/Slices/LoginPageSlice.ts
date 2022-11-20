import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LoginState {
  loginStatus: boolean;
  loginText: string;
  loginPassword: string;
  passwordConfirm: string;
  emailError: boolean;
  passwordError: boolean;
  confirmPasswordError: boolean;
  errorText: string;
  mousePos: { x: number; y: number };
  theme: string;
}

const initialState: LoginState = {
  loginStatus: false,
  loginText: "",
  loginPassword: "",
  passwordConfirm: "",
  emailError: false,
  passwordError: false,
  confirmPasswordError: false,
  errorText: "",
  mousePos: { x: 0, y: 0 },
  theme: "dark",
};

export const loginSlice = createSlice({
  name: "loginPage",
  initialState,
  reducers: {
    changeLogin: (state, action) => {
      state.loginStatus = action.payload;
    },
    changeLoginText: (state, action) => {
      state.loginText = action.payload;
      state.emailError = false;
    },
    changePasswordText: (state, action) => {
      state.loginPassword = action.payload;
      state.passwordError = false;
    },
    changePasswordConfirmValue: (state, action) => {
      state.passwordConfirm = action.payload;
      state.confirmPasswordError = false;
    },
    loginBtnClick: (state) => {
      let validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (!state.loginText.match(validRegex)) {
        state.emailError = true;
        state.errorText = "Invalid Email";
      } else if (state.loginPassword.length < 8) {
        state.passwordError = true;
        state.errorText = "Password must contain more than 8 characters";
      } else {
        state.emailError = false;
        state.passwordError = false;
      }
    },
    registrationBtnClick: (state) => {
      let validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (!state.loginText.match(validRegex)) {
        state.emailError = true;
        state.errorText = "Invalid Email";
      } else if (state.loginPassword.length < 8) {
        state.passwordError = true;
        state.errorText = "Password must contain more than 8 characters";
      } else if (state.passwordConfirm !== state.loginPassword) {
        state.confirmPasswordError = true;
        state.errorText = "Passwords must match";
      } else {
        state.emailError = false;
        state.passwordError = false;
      }
    },
    mouseMove: (state, action) => {
      state.mousePos = {
        x: action.payload.x / window.innerWidth,
        y: action.payload.y / window.innerHeight,
      };
    },
    changeTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
  },
});

export const {
  changeLogin,
  changeLoginText,
  changePasswordText,
  changePasswordConfirmValue,
  loginBtnClick,
  mouseMove,
  registrationBtnClick,
  changeTheme,
} = loginSlice.actions;
export default loginSlice.reducer;
