/* eslint-disable react-hooks/exhaustive-deps */
import "../styles/Desktop.css";

import { addApp, RootState, useAppDispatch } from "../redux";

import { ReactElement, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import DesktopGrid from "./DesktopGrid";
<<<<<<< HEAD
=======
import DesktopApp from "./DesktopApp";
>>>>>>> 57e7dd09119da761e46cb0913fe9c5ca363ce06b
import DesktopTaskBar from "./DesktopTaskBar";
import { App } from "./AppList";
import WindowsWallpaper from "../assets/windows-wallpaper.png";

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
      addApp({
        terminal: {
          isRunning: false,
          isFocused: false,
          isMinimized: false,
        },
        "Aperçu CV": {
          isRunning: false,
          isFocused: false,
          isMinimized: false,
        },
      })
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

  return (
    <div id="desktop" style={bgImageStyle}>
      {runningApps}
      <DesktopGrid />
      <DesktopTaskBar />
    </div>
  );
}

export default Desktop;
