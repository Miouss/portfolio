/* eslint-disable react-hooks/exhaustive-deps */
import "../styles/Desktop.css";

import { addApp, addShortcut, RootState, useAppDispatch } from "../redux";

import { ReactElement, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Taskbar from "./taskbar/Taskbar";
import { App } from "./apps/AppList";
import WindowsWallpaper from "../assets/windows-wallpaper.png";
import AppGrid from "./desktop/AppGrid";

function Desktop() {
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
  }, []);

  useEffect(() => {
    setRunningApps(
      apps.map((app, index) =>
        app.status.isRunning ? (
          <App key={`App${index}`} appName={app.name} />
        ) : (
          <></>
        )
      )
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

export default Desktop;
