import "../styles/DesktopTaskBar.css";
import { useEffect, useState } from "react";

import DesktopTaskBarApp from "./DesktopTaskBarApp";
import DateTime from "./DateTime";
import { useSelector } from "react-redux";
import { RootState } from "../redux";
import { SvgIcon } from "@mui/material";
import { windowsIcon } from "./AppList";

function DesktopTaskBar() {
  let [windowsIconColor, switchWindowsIconColor] = useState<string>("white");
  let [appsInTaskBarContainer, setAppsInTaskBarContainer] = useState<
    Array<JSX.Element>
  >([]);

  const apps = useSelector((state: RootState) => state.apps);

  useEffect(() => {
    let newAppsInTaskBarContainer: Array<JSX.Element> = [];

    for (let appName in apps) {
      if (apps[appName].isRunning) {
        newAppsInTaskBarContainer.push(
          <DesktopTaskBarApp key={`dtbapp${appName}`} appName={appName} />
        );
      }
    }

    setAppsInTaskBarContainer(newAppsInTaskBarContainer);
  }, [apps]);

  return (
    <div id="windows-task-bar">
      <div
        id="windows-task-bar-windows-icon"
        onMouseOver={() => switchWindowsIconColor("dodgerblue")}
        onMouseLeave={() => switchWindowsIconColor("white")}
      >
        <SvgIcon>{windowsIcon(windowsIconColor)}</SvgIcon>
      </div>
      <div id="windows-task-bar-apps-icons">{appsInTaskBarContainer}</div>
      <div id="windows-task-bar-date">
        <DateTime />
      </div>
    </div>
  );
}

export default DesktopTaskBar;
