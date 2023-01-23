import { ReactElement, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { addApp, RootState, useAppDispatch } from "../redux";
import AppGrid from "./desktop/DesktopGrid";
import Taskbar from "./taskbar/Taskbar";

import AppWindow from "./apps/AppWindow";
import WindowsWallpaper from "../assets/windows-wallpaper.png";
import "../styles/Desktop.css";

export default function App() {
  const apps = useSelector((state: RootState) => state.apps);
  const dispatch = useAppDispatch();

  const [runningApps, setRunningApps] = useState<Array<ReactElement>>([]);

  const bgImageStyle = {
    backgroundImage: `url(${WindowsWallpaper})`,
    backgroundPosition: "76% 50%",
    backgroundSize: "1920px 1080px",
    backgroundRepeat: "no-repeat",
  };

  useEffect(() => {
    const dispatchAddApp = (name: string) => {
      dispatch(addApp(name));
    };

    dispatchAddApp("terminal");
    dispatchAddApp("Aperçu CV");

    document.onselectstart = () => {
      return false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    const appsRunning = apps.filter((app) => app.status.isRunning);
    setRunningApps(
      appsRunning.map((appRunning) => (
        <AppWindow key={`Component ${appRunning.name}`} appName={appRunning.name}  />
      ))
    );
  }, [apps]);

  document.onmousedown = (event) => event.preventDefault();

  return (
    <div id="desktop" style={bgImageStyle}>
      {runningApps}
      <AppGrid />
      <Taskbar />
    </div>
  );
}
