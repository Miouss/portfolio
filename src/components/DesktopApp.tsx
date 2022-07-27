import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement } from "react";

import "../styles/DesktopApp.css";

interface Props {
  iconName: any;
  appName: string;
  displayApp: Array<ReactElement> | null;
  setDisplayApp: (param: Array<ReactElement>) => void;
  component: ReactElement;
}

function DesktopApp({
  iconName,
  appName,
  displayApp,
  setDisplayApp,
  component,
}: Props) {
  const iconClass: string = `desktop-app-${iconName}`;

  function runApp() {
    if (displayApp === null) {
      setDisplayApp([component]);
    } else {
      let isAppRunning = false;

      displayApp.forEach((componentStored) => {
        if (componentStored.key === component.key) {
          alert("App is already running");
          isAppRunning = true;
        }
      });

      if(!isAppRunning){
        setDisplayApp([...displayApp, component]);
      }
    }
  }

  return (
    <div className={iconClass} onClick={runApp}>
      <span>
        <FontAwesomeIcon icon={iconName} color="white" />
      </span>
      <div>{appName}</div>
    </div>
  );
}

export default DesktopApp;
