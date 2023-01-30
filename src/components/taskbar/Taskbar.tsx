import DateTime from "./Date/DateTime";
import Appbar from "./Appbar/Appbar";
import StartMenu from "./StartMenu/StartMenu";
import Notifbar from "./Notifbar/Notifbar";
import { Taskbar } from "./style";

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
