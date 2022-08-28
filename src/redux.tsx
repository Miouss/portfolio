import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { PayloadAction } from "@reduxjs/toolkit";

export interface RunningAppType {
  [app: string]: {
    isRunning: boolean;
    isFocused: boolean;
    isMinimized: boolean;
    isFullscreen: boolean;
  };
}

export type ShortcutApp = [string, string];

const shortcuts = createSlice({
  name: "shortcuts",
  initialState: {} as ShortcutApp,
  reducers: {
    addShortcut: (state, action: PayloadAction<ShortcutApp>) => {
      state = Object.assign(state, {
        [`${action.payload[0]}`]: {
          link: action.payload[1],
        },
      });
    },
  },
});

const apps = createSlice({
  name: "apps",
  initialState: {} as RunningAppType,
  reducers: {
    addApp: (state, action: PayloadAction<string>) => {
      state = Object.assign(state, {
        [action.payload]: {
          isRunning: false,
          isFocused: false,
          isMinimized: false,
          isFullscreen: false
        },
      });
    },
    openApp: (state, action: PayloadAction<string>) => {
      state[action.payload].isRunning = true;
      focusApp(action.payload);
    },
    closeApp: (state, action: PayloadAction<string>) => {
      state[action.payload].isRunning = false;
      state[action.payload].isFocused = false;
      state[action.payload].isMinimized = false;
      state[action.payload].isFullscreen = false;
    },
    focusApp: (state, action: PayloadAction<string>) => {
      for (const app in state) {
        if (action.payload === app) {
          state[app].isFocused = true;
          state[app].isMinimized = false;
        } else {
          state[app].isFocused = false;
        }
      }
    },
    minimizeApp: (state, action: PayloadAction<string>) => {
      state[action.payload].isMinimized = true;
      state[action.payload].isFocused = false;
    },
    toggleFullscreenApp: (state, action: PayloadAction<string>) => {
      state[action.payload].isFullscreen = !state[action.payload].isFullscreen;
      state[action.payload].isFocused = true;
    },
  },
});

export const { addApp, openApp, closeApp, focusApp, minimizeApp, toggleFullscreenApp } =
  apps.actions;
export const { addShortcut } = shortcuts.actions;

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    apps: apps.reducer,
    shortcuts: shortcuts.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that can be reused to resolve types
