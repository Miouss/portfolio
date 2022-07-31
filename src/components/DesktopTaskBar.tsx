
import "../styles/DesktopTaskBar.css";
import { useEffect, useState } from "react";

import DesktopTaskBarApp from "./DesktopTaskBarApp";
import Date from "./DateTime";
import { useSelector } from "react-redux";
import { RootState } from "../redux";

function DesktopTaskBar() {
  let [windowsIconColor, switchWindowsIconColor] = useState<string>("white");
  let [appsInTaskBarContainer, setAppsInTaskBarContainer] = useState<
    Array<JSX.Element>
  >([]);

  const apps = useSelector((state: RootState) => state.apps);

  useEffect(() => {
    let newAppsInTaskBarContainer: Array<JSX.Element> = [];

    for(let appName in apps){
      if(apps[appName].isRunning){
        newAppsInTaskBarContainer.push(<DesktopTaskBarApp key={`dtbapp${appName}`} appName={appName} />)
      }
    }

    setAppsInTaskBarContainer(newAppsInTaskBarContainer);
  }, [apps]);
  
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

export default DesktopTaskBar;
