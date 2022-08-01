import "../styles/DesktopApp.css";

import { openApp, useAppDispatch } from "../redux";
import { AppIcon } from "./AppList";

interface Props {
  appName : string
}

function DesktopApp({ appName }: Props) {
  const dispatch = useAppDispatch();

  return (
    <div className="desktop-app-terminal" onClick={() => dispatch(openApp(appName))}>
      <span>
        <AppIcon appName={appName} />
      </span>
      <div>{appName}</div>
    </div>
  );
}

export default DesktopApp;
