import { Taskbar } from "../../styles";
import DateTime from "./DateTime/DateTime";
import Appbar from "./Appbar/Appbar";
import LangPref from "./LangPref/LangPref";
import Notifbar from "./Notifbar/Notifbar";
import StartMenu from "./StartMenu/StartMenu";

export default function DesktopTaskBar() {
  return (
    <Taskbar onContextMenu={(e) => e.preventDefault()}>
      <StartMenu />
      <Appbar />
      <Notifbar />
      <LangPref />
      <DateTime />
    </Taskbar>
  );
}
