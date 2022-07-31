import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { PayloadAction } from "@reduxjs/toolkit";

export interface RunningAppType {
  [app: string] : {
    isRunning: boolean,
    isFocused: boolean,
    isMinimized: boolean
  }
}

const apps = createSlice({
  name: "apps",
  initialState: {} as RunningAppType,
  reducers: {
    addApp: (state, action: PayloadAction<RunningAppType>) => {
      state = Object.assign(state, action.payload);
    },
    openApp: (state, action: PayloadAction<string>) => {
        state[action.payload].isRunning = true;
          changeFocusedApp(action.payload);
        },
    closeApp: (state, action: PayloadAction<string>) => {
      state[action.payload].isRunning = false;
    },
    changeFocusedApp: (state, action: PayloadAction<string>) => {
      for(const app in state){
        if(action.payload === app){
          state[app].isFocused = true;
        }else{
          state[app].isFocused = false;
        }
      }
    }
  },
});

export const { addApp, openApp, closeApp, changeFocusedApp } = apps.actions;

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    apps: apps.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that can be reused to resolve types
