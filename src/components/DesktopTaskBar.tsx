
import "../styles/DesktopTaskBar.css";
import { useEffect, useState } from "react";

import DesktopTaskBarApp from "./DesktopTaskBarApp";
import Date from "./DateTime";

interface Props {
  runningApp: Array<React.ReactElement>;
  activeApp: string | null;
}

function WindowsTaskBar({ runningApp, activeApp }: Props) {
  let [windowsIconColor, switchWindowsIconColor] = useState<string>("white");
  let [appsInTaskBarContainer, setAppsInTaskBarContainer] = useState<
    Array<JSX.Element>
  >([]);

  useEffect(() => {
    let newAppsInTaskBarContainer: Array<JSX.Element> = [];

    runningApp.forEach((component) => {
      newAppsInTaskBarContainer.push(
        <DesktopTaskBarApp key={`desktop-taskbar-app-${component.key}`} componentRelated={component} activeApp={activeApp} />
      );
    });

    setAppsInTaskBarContainer(newAppsInTaskBarContainer);
  }, [activeApp, runningApp]);
  
  return (
    <div id="windows-task-bar">
      <div
        id="windows-task-bar-windows-icon"
        onMouseOver={() => switchWindowsIconColor("lightblue")}
        onMouseLeave={() => switchWindowsIconColor("white")}
      >

      </div>
      <div id="windows-task-bar-apps-icons">{appsInTaskBarContainer}</div>
      <div id="windows-task-bar-date">
        <Date />
      </div>
    </div>
  );
}

export default WindowsTaskBar;
