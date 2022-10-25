import { configureStore } from '@reduxjs/toolkit'
import LoginPageSlice from "./Slices/LoginPageSlice";

export const store = configureStore({
    reducer: {
        LoginPageSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch