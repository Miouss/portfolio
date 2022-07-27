import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponentElement, ReactElement } from "react";

import "../styles/DesktopApp.css";

interface Props {
  iconName: any;
  appName: string;
  setDisplayApp: (param: null | ReactElement) => void;
  component: ReactElement
}

function DesktopApp({ iconName, appName, setDisplayApp, component }: Props) {
  const iconClass: string = `desktop-app-${iconName}`;

  return (
      <div className={iconClass} onClick={() => setDisplayApp(component)}>
        <span>
          <FontAwesomeIcon icon={iconName} color="white" />
        </span>
        <div>{appName}</div>
      </div>
  );
}

export default DesktopApp;
