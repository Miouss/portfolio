import { useEffect, useState } from "react";
import TerminalIcon from "@mui/icons-material/Terminal";
import { useSelector } from "react-redux";
import { changeFocusedApp, RootState, useAppDispatch } from "../redux";

interface Props {
  appName: string;
}

function DesktopTaskBarApp({ appName }: Props) {
  const app = useSelector((state: RootState) => state.apps[appName]);
  const dispatch = useAppDispatch();

  let [bgColor, setBgColor] = useState<string>("");
  let [lineWidth, setLineWidth] = useState<string>("");

  useEffect(() => {
    if (app.isFocused) {
      setBgColor("rgba(100, 100, 100, 0.6)");
      setLineWidth("45px");
    } else {
      setBgColor("black");
      setLineWidth("35px");
    }
  }, [app.isFocused]);

  return (
    <div onClick={() => dispatch(changeFocusedApp(appName))} onMouseDown={(event) => event.preventDefault()}>
      <div style={{ backgroundColor: bgColor }}>
        <TerminalIcon sx={{ color: "white" }} />
      </div>
      <div style={{ width: lineWidth }} />
    </div>
  );
}

export default DesktopTaskBarApp;
