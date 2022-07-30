/* eslint-disable react-hooks/exhaustive-deps */
import "../styles/Desktop.css";

import { getApp } from "./AppList";

import { addApp, RootState, useAppDispatch } from "../redux";

import { ReactElement, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import DesktopApp from "./DesktopApp";
import DesktopTaskBar from "./DesktopTaskBar";

function Desktop() {
  const apps = useSelector((state: RootState) => state.apps);
  const dispatch = useAppDispatch();

  let [runningApps, setRunningApps] = useState<Array<ReactElement>>([]);

  const showDesktopApp = () => {
    let destopApp : Array<ReactElement> = [];

    for (const appName in apps) {
      destopApp.push(<DesktopApp key={appName} appName={appName} />);
    };
    
    return destopApp;
  };

  useEffect(() => {
    dispatch(
      addApp({
        "terminal" : {
          isRunning: false,
          isFocused: false,
        },
        "PDFViewer" : {
          isRunning: false,
          isFocused: false,
        },  
      })
    );
  }, []);

  useEffect(() => {
    let runningAppsArray : Array<ReactElement> = [];

    for (const appName in apps) {
      if(apps[appName].isRunning){
        runningAppsArray.push(getApp(appName));
      }
    }

    setRunningApps(runningAppsArray);
  }, [apps]);

  return (
    <div id="desktop">
      <div style={{ position: "absolute", top: "100px", left: "100px" }}>
        {runningApps}
      </div>
      <div id="desktop-app-section">{showDesktopApp()}</div>

      <DesktopTaskBar />
    </div>
  );
}

export default Desktop;
