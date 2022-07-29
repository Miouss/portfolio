import { ReactElement } from "react";

import TerminalIcon from '@mui/icons-material/Terminal';

import "../styles/DesktopApp.css";

interface Props {
  runningApp: Array<ReactElement> | null;
  setRunningApp: (param: Array<ReactElement>) => void;
  component: ReactElement;
  appIcon: ReactElement
}

function DesktopApp({ runningApp, setRunningApp, component, appIcon }: Props) {
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
        {appIcon}
      </span>
      <div>{component.props.appName}</div>
    </div>
  );
}

export default DesktopApp;
