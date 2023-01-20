/* eslint-disable react-hooks/exhaustive-deps */
import "../../styles/Desktop.css";

import { addApp, addShortcut, RootState, useAppDispatch } from "../../redux";

import { ReactElement, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import DesktopGrid from "./DesktopGrid";
import DesktopTaskBar from "../taskbar/DesktopTaskBar";
import { App } from "../apps/AppList";
import WindowsWallpaper from "../../assets/windows-wallpaper.png";

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
    dispatch(
      addApp("terminal")
    );
    dispatch(
      addApp("Aperçu CV")
    );

    dispatch(
      addShortcut(["GitHub", "https://github.com/Miouss"])
    );
    dispatch(
      addShortcut(["LinkedIn", "https://www.linkedin.com/in/samir-ghabi-aa58a2224/"])
    );

    document.onselectstart = () => {
      return false;
    };
  }, []);

  useEffect(() => {
    let runningAppsArray: Array<ReactElement> = [];

    for (const appName in apps) {
      if (apps[appName].isRunning) {
        runningAppsArray.push(<App key={`App${appName}`} appName={appName} />);
      }
    }

    setRunningApps(runningAppsArray);
  }, [apps]);

  document.onmousedown = (event) => event.preventDefault();

  return (
    <div id="desktop" style={bgImageStyle}>
      {runningApps}
      <DesktopGrid />
      <DesktopTaskBar />
    </div>
  );
}

export default Desktop;
