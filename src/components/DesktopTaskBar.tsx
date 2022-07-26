import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../styles/DesktopTaskBar.css";
import { useEffect, useState } from "react";
import { delay } from "../assets/usefulFunction";

interface FullDate {
  time: string;
  date: string;
}

function WindowsTaskBar() {
  let [windowsIconColor, switchWindowsIconColor] = useState<string>("white");
  let [date, setDate] = useState<Date>(new Date());

  let updatedDate: FullDate = {
    time: `${date.getHours().toString().padStart(2, "0")}:${date
      .getMinutes()
      .toString()
      .padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")}`,
    date: `${date.getDate().toString().padStart(2, "0")}/${date
      .getMonth()
      .toString()
      .padStart(2, "0")}/${date.getFullYear()}`,
  };

  useEffect(() => {
    async function updateDate() {
      await delay(1000);
      setDate(new Date());
    }

    updateDate();
  }, [date]);

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
      <div id="windows-task-bar-apps-icons"></div>
      <div id="windows-task-bar-date">
        <div>{updatedDate.time}</div>
        <div>{updatedDate.date}</div>
      </div>
    </div>
  );
}

export default WindowsTaskBar;
