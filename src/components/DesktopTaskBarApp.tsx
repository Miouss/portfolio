import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { focusApp, minimizeApp, RootState, useAppDispatch } from "../redux";
import { AppIcon } from "./AppList";

interface Props {
  appName: string;
}

function DesktopTaskBarApp({ appName }: Props) {
  const app = useSelector((state: RootState) => state.apps[appName]);
  const dispatch = useAppDispatch();

  const [bgColor, setBgColor] = useState<string>("");
  const [lineWidth, setLineWidth] = useState<string>("");
  const [opacityBgColorBoost, setOpacityBgColorBoost] = useState<number>(0);

  const handleMouseOver = (event: React.MouseEvent): void => {
    event.type === "mouseenter"
      ? setOpacityBgColorBoost(0.4)
      : setOpacityBgColorBoost(0);
  };

  const handleClick = () => {
    app.isFocused
      ? dispatch(minimizeApp(appName))
      : dispatch(focusApp(appName));
  };

  useEffect(() => {
    if (opacityBgColorBoost === 0.4 && !app.isFocused) {
      setBgColor(`rgba(100, 100, 100, ${opacityBgColorBoost})`);
      setLineWidth("45px");
    } else if (app.isFocused) {
      setBgColor(`rgba(100, 100, 100, ${0.4 + opacityBgColorBoost})`);
      setLineWidth("45px");
    } else {
      setBgColor(`rgba(100, 100, 100, ${opacityBgColorBoost})`);
      setLineWidth("35px");
    }
  }, [opacityBgColorBoost, app.isFocused]);

  return (
    <div
      onClick={handleClick}
      onMouseDown={(event) => event.preventDefault()}
      onMouseEnter={(event) => handleMouseOver(event)}
      onMouseLeave={(event) => handleMouseOver(event)}
    >
      <div style={{ backgroundColor: bgColor }}>
        <AppIcon appName={appName} />
      </div>
      <div style={{ width: lineWidth }} />
    </div>
  );
}

export default DesktopTaskBarApp;
