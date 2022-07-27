import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../styles/DesktopTaskBar.css";
import { useState } from "react";

import Date from "./DateTime"

interface Props {
  runningApp : Array<React.ReactElement>
}

function WindowsTaskBar({ runningApp } : Props) {
  let [windowsIconColor, switchWindowsIconColor] = useState<string>("white");

  return (
    <div id="windows-task-bar">
      <div
        id="windows-task-bar-windows-icon"
        onMouseOver={() => switchWindowsIconColor("lightblue")}
        onMouseLeave={() => switchWindowsIconColor("white")}
      >
        <FontAwesomeIcon
          icon={["fab", "windows"]}
          color={windowsIconColor}
          size={"lg"}
        />
      </div>
      <div id="windows-task-bar-apps-icons">

      </div>
      <div id="windows-task-bar-date">
      <Date />
    </div>

    </div>
  );
}

export default WindowsTaskBar;
