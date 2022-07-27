import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement } from "react";

import "../styles/DesktopApp.css";

interface Props {
  displayApp: Array<ReactElement> | null;
  setDisplayApp: (param: Array<ReactElement>) => void;
  component: ReactElement;
}

function DesktopApp({ displayApp, setDisplayApp, component }: Props) {
  const iconClass: string = `desktop-app-${component.props.iconName}`;

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

      if (!isAppRunning) {
        setDisplayApp([...displayApp, component]);
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
