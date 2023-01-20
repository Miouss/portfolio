import "../../styles/DesktopTaskBar.css";
import { useEffect, useState } from "react";

import DesktopTaskBarApp from "./Appbar/AppContainer/AppContainer";
import DateTime from "./Date/DateTime";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { WindowsIcon } from "../custom/icons/iconsList";

function DesktopTaskBar() {
  const [windowsIconColor, switchWindowsIconColor] = useState<string>("white");
  const [appsInTaskBarContainer, setAppsInTaskBarContainer] = useState<
    Array<JSX.Element>
  >([]);

  const apps = useSelector((state: RootState) => state.apps);

  useEffect(() => {
    setAppsInTaskBarContainer(
      apps.map((app, index) => {
        return app.status.isRunning ? (
          <DesktopTaskBarApp key={`TaskBarApp${index}`} appName={app.name} />
        ) : (
          <></>
        );
      })
    );
  }, [apps]);

  return (
    <div id="windows-task-bar">
      <div
        id="windows-task-bar-windows-icon"
        onMouseOver={() => switchWindowsIconColor("dodgerblue")}
        onMouseLeave={() => switchWindowsIconColor("white")}
      >
        <WindowsIcon color={windowsIconColor} />
      </div>
      <div id="windows-task-bar-apps-icons">{appsInTaskBarContainer}</div>
      <div id="windows-task-bar-date">
        <DateTime />
      </div>
    </div>
  );
}

export default DesktopTaskBar;
