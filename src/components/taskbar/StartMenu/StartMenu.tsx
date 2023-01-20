import { useState } from "react";
import { WindowsIcon } from "../../custom/icons/iconsList";

export default function StartMenu() {
  const [windowsIconColor, switchWindowsIconColor] = useState("white");

  return (
    <div
      id="windows-task-bar-windows-icon"
      onMouseOver={() => switchWindowsIconColor("dodgerblue")}
      onMouseLeave={() => switchWindowsIconColor("white")}
    >
      <WindowsIcon color={windowsIconColor} />
    </div>
  );
}
