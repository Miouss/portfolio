import DateTime from "./Date/DateTime";
import Appbar from "./Appbar/Appbar";
import StartMenu from "./StartMenu/StartMenu";
import { Taskbar } from "./style";
import Notifbar from "./Notifbar/Notifbar";

export default function DesktopTaskBar() {
  return (
    <Taskbar>
      <StartMenu />
      <Appbar />
      <Notifbar />
      <DateTime />
    </Taskbar>
  );
}