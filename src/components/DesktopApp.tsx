import "../styles/DesktopApp.css";

import { openApp, RootState, useAppDispatch, focusApp } from "../redux";
import { AppIcon } from "./AppList";
import { useState } from "react";

import { delay } from "../assets/usefulFunction";
import { useSelector } from "react-redux";

interface Props {
  appName: string;
  gridArea: string;
}

interface AppStyle {
  borderStyle?: string;
  padding?: string;
  background?: string;
  cursor?: string;
}

function DesktopApp({ appName, gridArea }: Props) {
  const isRunning = useSelector((state : RootState) => state.apps[appName].isRunning);
  const dispatch = useAppDispatch();
  
  const [appStyle, setAppStyle] = useState<AppStyle>();

  const pointerEnterStyle = {
    borderStyle: "solid",
    padding: "calc(1rem - 1px)",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  };

  const pointerLeaveStyle = {
    borderStyle: "hidden",
    padding: "1rem",
  };

  const pointerDownStyle = {
    borderStyle: "solid",
    padding: "calc(1rem - 1px)",
    backgroundColor: "unset",
  };

  const handlePointerEvent = (event) => {
    if (event.type === "pointerenter") {
      setAppStyle(pointerEnterStyle);
    } else if (event.type === "pointerleave") {
      setAppStyle(pointerLeaveStyle);
    } else {
      setAppStyle(pointerDownStyle);
    }
  };

  const simulateAppLoading = async() => {
    if(isRunning){
      dispatch(focusApp(appName));
    }else{
      setAppStyle({ ...appStyle, cursor: "progress" });
      await delay(300);
      setAppStyle((appStyle) => {
        const newStyle = {...appStyle};
  
        newStyle.cursor = "default";
        return newStyle;
      });
      dispatch(openApp(appName));
    }
  };

  return (
    <div
      className="desktop-app"
      style={{...appStyle, gridArea}}
      onPointerEnter={(event) => handlePointerEvent(event)}
      onPointerLeave={(event) => handlePointerEvent(event)}
      onClick={(event) => handlePointerEvent(event)}
      onDoubleClick={simulateAppLoading}
    >
      <span style={{fontSize: "4rem"}}>
        <AppIcon appName={appName} />
      </span>
      <div>{appName}</div>
    </div>
  );
}

export default DesktopApp;
