import "../../styles/DesktopTaskBar.css";

import DateTime from "./Date/DateTime";
import Appbar from "./Appbar/Appbar";
import StartMenu from "./StartMenu/StartMenu";

function DesktopTaskBar() {
  return (
    <div id="windows-task-bar">
      <StartMenu />
      <Appbar />
      <DateTime />
    </div>
  );
}

export default DesktopTaskBar;
