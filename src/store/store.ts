import {configureStore} from "@reduxjs/toolkit";
import {promptsSlice} from "./slices/prompts";

export const store: any = configureStore({
    reducer: {
        [promptsSlice.name]: promptsSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppStore = typeof store
