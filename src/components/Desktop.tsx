/* eslint-disable react-hooks/exhaustive-deps */
import DesktopTaskBar from "./DesktopTaskBar";
import DesktopApp from "./DesktopApp";
import TerminalApp from "./TerminalApp";

import "../styles/Desktop.css";
import { ReactElement, useEffect, useState } from "react";

function Desktop() {
  let [runningApp, setRunningApp] = useState<Array<ReactElement>>([]);
  let [closeApp, setCloseApp] = useState<string | null>(null);

  let appsList: Array<ReactElement> = [];

  function addApp(component: ReactElement) {
    appsList.push(
      <DesktopApp
        key={`app${appsList.length}`}
        runningApp={runningApp}
        setRunningApp={setRunningApp}
        component={component}
      />
    );
  }

  addApp(
    <TerminalApp
      key="terminal"
      setCloseApp={setCloseApp}
      componentKey="terminal"
      iconName="terminal"
      appName="Terminal"
    />
  );

  useEffect(() => {
    setCloseApp(null);
  }, [runningApp]);

  useEffect(() => {
    let appsCurrentlyRunning: Array<ReactElement> = runningApp.filter(
      (component: ReactElement) => {
        return component.key !== closeApp;
      }
    );

    setRunningApp(appsCurrentlyRunning);
  }, [closeApp]);

  return (
    <div id="desktop">
      <div style={{ position: "absolute", top: "100px", left: "100px" }}>
        {runningApp}
      </div>
      <div id="desktop-app-section">{appsList}</div>
      <DesktopTaskBar runningApp={runningApp} />
    </div>
  );
}

export default Desktop;
