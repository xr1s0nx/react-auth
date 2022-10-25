import {createSlice} from '@reduxjs/toolkit'

export interface LoginState {
    loginStatus: boolean;
    loginText: string;
    loginPassword: string;
    passwordConfirm: string;
}

const initialState: LoginState = {
    loginStatus: false,
    loginText: '',
    loginPassword: '',
    passwordConfirm: '',
}

export const loginSlice = createSlice({
    name: 'loginPage',
    initialState,
    reducers: {
        changeLogin: (state, action) => {
            state.loginStatus = action.payload;
        },
        changeLoginText: (state, action) => {
            state.loginText = action.payload;
        },
        changePasswordText: (state, action) => {
            state.loginPassword = action.payload;
        },
        changePasswordConfirmValue: (state, action) => {
            state.passwordConfirm = action.payload;
        }
    },
})

export const { changeLogin, changeLoginText, changePasswordText, changePasswordConfirmValue } = loginSlice.actions
export default loginSlice.reducer