import { useSelector } from "react-redux";
import { RootState, RunningApp } from "../../redux";

export default function useAppStatus(appName: string) {
  const emptyStatus: RunningApp["status"] = {
    isRunning: false,
    isMinimized: false,
    isFullscreen: false,
    isFocused: false,
  };

  return useSelector((store: RootState) => {
    const app = store.apps.find((app) => app.name === appName);
    return app ? app.status : emptyStatus;
  });
}
