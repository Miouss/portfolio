import DesktopTaskBar from "./DesktopTaskBar";
import DesktopApp from "./DesktopApp";
import TerminalApp from "./TerminalApp";

import "../styles/Desktop.css";
import { ReactElement, useEffect, useState } from "react";


function Desktop() {
  let [displayApp, setDisplayApp] = useState<ReactElement | null>(null);
  let [closeApp, setCloseApp] = useState<boolean>(false);

  let appsList : Array<ReactElement> = [];

  function addApp(icon: string, app: string, component: ReactElement ){
    appsList.push(<DesktopApp
      iconName={icon}
      appName={app}
      setDisplayApp={setDisplayApp}
      component={component}
    />);
  }

  addApp("terminal", "Terminal", <TerminalApp setCloseApp={setCloseApp} />);

  useEffect(
    function resetCloseButton() {
      setCloseApp(false);
    },
    [displayApp]
  );

  useEffect(
    function resetDisplayApp() {
      setDisplayApp(null);
    },
    [closeApp]
  );

  return (
    <div id="desktop">
      <div style={{ position: "absolute", top: "100px", left: "100px" }}>
        {displayApp}
      </div>
      <div id="desktop-app-section">
        {appsList}
      </div>
      <DesktopTaskBar />
    </div>
  );
}

export default Desktop;
