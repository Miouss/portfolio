import { ReactElement, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { addApp, addShortcut, RootState, useAppDispatch } from "../redux";
import AppGrid from "./desktop/AppGrid";
import Taskbar from "./taskbar/Taskbar";
import { AppComponent } from "./apps/collection/Collection";
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
    const dispatchAddShortcut = (name: string, link: string) => {
      dispatch(
        addShortcut({
          name,
          link,
        })
      );
    };

    const dispatchAddApp = (name: string) => {
      dispatch(addApp(name));
    };

    dispatchAddApp("terminal");
    dispatchAddApp("Aperçu CV");
    dispatchAddShortcut("GitHub", "https://github.com/Miouss");
    dispatchAddShortcut(
      "LinkedIn",
      "https://www.linkedin.com/in/samir-ghabi-aa58a2224/"
    );

    document.onselectstart = () => {
      return false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const appsRunning = apps.filter((app) => app.status.isRunning);
    setRunningApps(
      appsRunning.map((app) => (
        <AppComponent key={`${app.name}`} appName={app.name} />
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
