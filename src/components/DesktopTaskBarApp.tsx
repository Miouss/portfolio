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
  let [opacityBgColorBoost, setOpacityBgColorBoost] = useState<number>(0);

  const handleMouseOver = (event: React.MouseEvent): void => {
    event.type === "mouseenter"
      ? setOpacityBgColorBoost(0.4)
      : setOpacityBgColorBoost(0);
  };

  useEffect(() => {
    if (opacityBgColorBoost === 0.4 && !app.isFocused) {
      setLineWidth("45px");
    }else{
      if (app.isFocused) {
        setBgColor(`rgba(100, 100, 100, ${0.4 + opacityBgColorBoost})`);
        setLineWidth("45px");
      } else {
        setBgColor(`rgba(100, 100, 100, ${opacityBgColorBoost})`);
        setLineWidth("35px");
      }
    }
  }, [opacityBgColorBoost, app.isFocused]);

  return (
    <div
      onClick={() => dispatch(changeFocusedApp(appName))}
      onMouseDown={(event) => event.preventDefault()}
      onMouseEnter={(event) => handleMouseOver(event)}
      onMouseLeave={(event) => handleMouseOver(event)}
    >
      <div style={{ backgroundColor: bgColor }}>
        <TerminalIcon sx={{ color: "white" }} />
      </div>
      <div style={{ width: lineWidth }} />
    </div>
  );
}

export default DesktopTaskBarApp;
