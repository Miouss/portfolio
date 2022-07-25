import DesktopTaskBar from "./DesktopTaskBar";
import DesktopApp from "./DesktopApp";
import TerminalApp from "./TerminalApp";


import "../styles/Desktop.css"
import { useEffect, useState } from "react";

function Desktop() {

  let [displayApp, setDisplayApp] = useState<boolean>(false);
  let [closeApp, setCloseApp] = useState<boolean>(false);

  function launchApp(){
    if(displayApp && !closeApp){
      return <TerminalApp setCloseApp={setCloseApp} />
    }

    return null;
  }

  useEffect(() => {
    setCloseApp(false)
  }, [displayApp]);

  useEffect(() => {
    setDisplayApp(false)
  }, [closeApp]);

  return (
  <div id="desktop">
    <div style={{position: "absolute", top: "100px", left: "100px"}}>
      {launchApp()}
    </div>
    <div id="desktop-app-section">
      <DesktopApp iconName="terminal" appName="Terminal" setDisplayApp={setDisplayApp} />
    </div>
    <DesktopTaskBar />
  </div>
    );
}

export default Desktop;
