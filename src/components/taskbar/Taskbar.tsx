import { Taskbar } from "../../styles";
import DateTime from "./TaskbarDateTime";
import Appbar from "./TaskbarAppbar";
import LangPref from "./TaskbarLangPref";
import Notifbar from "./TaskbarNotifbar";
import StartMenu from "./TaskbarStartMenu";

export default function DesktopTaskBar() {
  return (
    <Taskbar onContextMenu={(e: React.MouseEvent) => e.preventDefault()}>
      <StartMenu />
      <Appbar />
      <Notifbar />
      <LangPref />
      <DateTime />
    </Taskbar>
  );
}
