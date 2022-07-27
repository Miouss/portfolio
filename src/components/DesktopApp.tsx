import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement } from "react";

import "../styles/DesktopApp.css";

interface Props {
  runningApp: Array<ReactElement> | null;
  setRunningApp: (param: Array<ReactElement>) => void;
  component: ReactElement;
}

function DesktopApp({ runningApp, setRunningApp, component }: Props) {
  const iconClass: string = `desktop-app-${component.props.iconName}`;

  function runApp() {
    if (runningApp === null) {
      setRunningApp([component]);
    } else {
      let isAppRunning = false;

      runningApp.forEach((componentStored) => {
        if (componentStored.key === component.key) {
          alert("App is already running");
          isAppRunning = true;
        }
      });

      if (!isAppRunning) {
        setRunningApp([...runningApp, component]);
      }
    }
  }

  return (
    <div className={iconClass} onClick={runApp}>
      <span>
        <FontAwesomeIcon icon={component.props.iconName} color="white" />
      </span>
      <div>{component.props.appName}</div>
    </div>
  );
}

export default DesktopApp;
