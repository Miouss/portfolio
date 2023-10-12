import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { PayloadAction } from "@reduxjs/toolkit";

export interface AppStatus {
  isRunning: boolean;
  isFocused: boolean;
  isMinimized: boolean;
  isFullscreen: boolean;
  isSpecial?: boolean | "notif";
}

export interface RunningApp {
  name: string;
  status: AppStatus;
}

const createApp = (name: string, isSpecial?: boolean | "notif") => ({
  name,
  status: {
    isRunning: false,
    isFocused: false,
    isMinimized: false,
    isFullscreen: false,
    isSpecial,
  },
});

const createSpecialApp = (name: string) => createApp(name, true);
const createNotifApp = (name: string) => createApp(name, "notif");

const findApp = (apps: RunningApp[], name: string) =>
  apps.find((app) => app.name === name)!;

const apps = createSlice({
  name: "apps",
  initialState: [] as RunningApp[],
  reducers: {
    addApp: (state, { payload }: PayloadAction<string>) => {
      state.push(createApp(payload));
    },
    addSpecialApp: (state, { payload }: PayloadAction<string>) => {
      state.push(createSpecialApp(payload));
    },
    addNotifApp: (state, { payload }: PayloadAction<string>) => {
      state.push(createNotifApp(payload));
    },
    openApp: (state, { payload }: PayloadAction<string>) => {
      const app = findApp(state, payload);

      app.status.isRunning = true;
      focusApp(payload);
    },
    closeApp: (state, { payload }: PayloadAction<string>) => {
      const app = findApp(state, payload);

      app.status.isRunning = false;
      app.status.isFocused = false;
      app.status.isMinimized = false;
      app.status.isFullscreen = false;
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
      const app = findApp(state, payload);

      app.status.isMinimized = true;
      app.status.isFocused = false;
    },
    toggleFullscreenApp: (state, { payload }: PayloadAction<string>) => {
      const app = findApp(state, payload);

      app.status.isFullscreen = !app.status.isFullscreen;
      app.status.isFocused = true;
    },
  },
});

const windowResponsiveFont = createSlice({
  name: "windowResponsiveFont",
  initialState: 1,
  reducers: {
    setWindowResponsiveFont: (_, { payload }: PayloadAction<number>) => {
      return payload;
    },
  },
});

export const {
  addApp,
  addSpecialApp,
  addNotifApp,
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
