/* eslint-disable react-hooks/exhaustive-deps */
import "../styles/Desktop.css";

import { addApp, RootState, useAppDispatch } from "../redux";

import { ReactElement, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import DesktopApp from "./DesktopApp";
import DesktopTaskBar from "./DesktopTaskBar";
import { App } from "./AppList";

function Desktop() {
  const apps = useSelector((state: RootState) => state.apps);
  const dispatch = useAppDispatch();

  const [runningApps, setRunningApps] = useState<Array<ReactElement>>([]);

  const showDesktopApp = () => {
    let desktopApp: Array<ReactElement> = [];

    for (const appName in apps) {
      desktopApp.push(<DesktopApp key={appName} appName={appName} />);
    }

    return desktopApp;
  };

  useEffect(() => {
    dispatch(
      addApp({
        "terminal": {
          isRunning: false,
          isFocused: false,
          isMinimized: false
        },
        "Aperçu CV": {
          isRunning: false,
          isFocused: false,
          isMinimized: false
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
    <div id="desktop">
        {runningApps}
      <div id="desktop-app-section">{showDesktopApp()}</div>

      <DesktopTaskBar />
    </div>
  );
}

export default Desktop;
