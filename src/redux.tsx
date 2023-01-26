import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { PayloadAction } from "@reduxjs/toolkit";

export interface AppStatus {
  isRunning: boolean;
  isFocused: boolean;
  isMinimized: boolean;
  isFullscreen: boolean;
}

export interface RunningApp {
  name: string;
  status: AppStatus;
}

const apps = createSlice({
  name: "apps",
  initialState: [] as RunningApp[],
  reducers: {
    addApp: (state, { payload }: PayloadAction<string>) => {
      state.push({
        name: payload,
        status: {
          isRunning: false,
          isFocused: false,
          isMinimized: false,
          isFullscreen: false,
        },
      });
    },
    openApp: (state, { payload }: PayloadAction<string>) => {
      const app = state.find((app) => app.name === payload);
      if (app) {
        app.status.isRunning = true;
        focusApp(payload);
      }
    },
    closeApp: (state, { payload }: PayloadAction<string>) => {
      const app = state.find((app) => app.name === payload);

      if (app) {
        app.status.isRunning = false;
        app.status.isFocused = false;
        app.status.isMinimized = false;
        app.status.isFullscreen = false;
      }
    },
    focusApp: (state, { payload }: PayloadAction<string>) => {
      state.forEach((app) => {
        if (payload === app.name) {
          app.status.isFocused = true;
          app.status.isMinimized = false;
        } else {
          app.status.isFocused = false;
        }
      });
    },
    minimizeApp: (state, { payload }: PayloadAction<string>) => {
      const app = state.find((app) => app.name === payload);
      
      if (app) {
        app.status.isMinimized = true;
        app.status.isFocused = false;
      }
    },
    toggleFullscreenApp: (state, { payload }: PayloadAction<string>) => {
      const app = state.find((app) => app.name === payload);

      if (app) {
        app.status.isFullscreen = !app.status.isFullscreen;
        app.status.isFocused = true;
      }
    },
  },
});

const windowResponsiveFont = createSlice({
  name: "windowResponsiveFont",
  initialState: 1,
  reducers: {
    setWindowResponsiveFont: (state, { payload }: PayloadAction<number>) => {
      return payload;
    },
  },
});

export const {
  addApp,
  openApp,
  closeApp,
  focusApp,
  minimizeApp,
  toggleFullscreenApp,
} = apps.actions;

export const { setWindowResponsiveFont } = windowResponsiveFont.actions;

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    apps: apps.reducer,
    windowResponsiveFont: windowResponsiveFont.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that can be reused to resolve types
