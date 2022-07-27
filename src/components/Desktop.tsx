/* eslint-disable react-hooks/exhaustive-deps */
import DesktopTaskBar from "./DesktopTaskBar";
import DesktopApp from "./DesktopApp";
import TerminalApp from "./TerminalApp";

import "../styles/Desktop.css";
import { ReactElement, useEffect, useState } from "react";

function Desktop() {
  let [displayApp, setDisplayApp] = useState<Array<ReactElement>>([]);
  let [closeApp, setCloseApp] = useState<string | null>(null);

  let appsList: Array<ReactElement> = [];

  function addApp(icon: string, app: string, component: ReactElement) {
    appsList.push(
      <DesktopApp
        key={`app${appsList.length}`}
        iconName={icon}
        appName={app}
        displayApp={displayApp}
        setDisplayApp={setDisplayApp}
        component={component}
      />
    );
  }

  addApp(
    "terminal",
    "Terminal",
    <TerminalApp
      key="terminal"
      setCloseApp={setCloseApp}
      componentKey="terminal"
    />
  );

  useEffect(() => {
    setCloseApp(null);
  }, [displayApp]);

  useEffect(() => {
    let appsCurrentlyRunning: Array<ReactElement> = displayApp.filter(
      (component: ReactElement) => {
        return component.key !== closeApp;
      }
    );

    setDisplayApp(appsCurrentlyRunning);
  }, [closeApp]);

  return (
    <div id="desktop">
      <div style={{ position: "absolute", top: "100px", left: "100px" }}>
        {displayApp}
      </div>
      <div id="desktop-app-section">{appsList}</div>
      <DesktopTaskBar />
    </div>
  );
}

export default Desktop;
