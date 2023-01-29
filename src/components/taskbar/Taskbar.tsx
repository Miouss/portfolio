import DateTime from "./Date/DateTime";
import Appbar from "./Appbar/Appbar";
import StartMenu from "./StartMenu/StartMenu";
import { Taskbar } from "./styled/Taskbar";
import Notifbar from "./Notifbar/Notifbar";

export default function DesktopTaskBar() {
  return (
    <Taskbar direction={"row"}>
      <StartMenu />
      <Appbar />
      <Notifbar />
      <DateTime />
    </Taskbar>
  );
}