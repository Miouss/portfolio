import "../styles/DesktopApp.css";

import { openApp, useAppDispatch } from "../redux";
import { getIcon } from "./AppList";

interface Props {
  appName : string
}

function DesktopApp({ appName }: Props) {
  const dispatch = useAppDispatch();

  return (
    <div className="desktop-app-terminal" onClick={() => dispatch(openApp(appName))}>
      <span>
        {
          getIcon(appName)
        }
      </span>
      <div>{appName}</div>
    </div>
  );
}

export default DesktopApp;
