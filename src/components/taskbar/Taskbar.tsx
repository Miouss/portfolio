import DateTime from "./Date/DateTime";
import Appbar from "./Appbar/Appbar";
import StartMenu from "./StartMenu/StartMenu";
import { Taskbar } from "./styled/Taskbar";

export default function DesktopTaskBar() {
  return (
    <Taskbar direction={"row"}>
      <StartMenu />
      <Appbar />
      <DateTime />
    </Taskbar>
  );
}