import "../styles/DesktopApp.css";

import { openApp, RootState, useAppDispatch, focusApp } from "../redux";
import { AppIcon } from "./AppList";
import { useState } from "react";

import {
  pointerEnterStyle,
  pointerLeaveStyle,
  pointerDownStyle,
} from "./custom/styles/appStyle";

import ShortcutIcon from '@mui/icons-material/Shortcut';
import { delay } from "../assets/usefulFunction";
import { useSelector } from "react-redux";

interface Props {
  appName: string;
  gridArea: string;
  type: string;
}

interface AppStyle {
  borderStyle?: string;
  padding?: string;
  background?: string;
  cursor?: string;
}

function DesktopApp({ appName, gridArea, type }: Props) {
  const isRunning = useSelector((state: RootState) => {
    if (type === "normal") {
      return state.apps[appName].isRunning;
    }
    return null;
  });

  const urlRedirect = useSelector((state: RootState) => {
    if(type === "shortcut"){
      return state.shortcuts[appName].link;
    }

    return null;
  })

  const dispatch = useAppDispatch();

  const [appStyle, setAppStyle] = useState<AppStyle>();

  const handlePointerEvent = (event) => {
    if (event.type === "pointerenter") {
      setAppStyle(pointerEnterStyle);
    } else if (event.type === "pointerleave") {
      setAppStyle(pointerLeaveStyle);
    } else {
      setAppStyle(pointerDownStyle);
    }
  };

  const simulateAppLoading = async () => {
    if (isRunning) {
      dispatch(focusApp(appName));
    } else {
      setAppStyle({ ...appStyle, cursor: "progress" });
      await delay(300);
      setAppStyle((appStyle) => {
        const newStyle = { ...appStyle };

        newStyle.cursor = "default";
        return newStyle;
      });
      dispatch(openApp(appName));
    }
  };

  if (type === "normal") {
    return (
      <div
        className="desktop-app"
        style={{ ...appStyle, gridArea }}
        onPointerEnter={(event) => handlePointerEvent(event)}
        onPointerLeave={(event) => handlePointerEvent(event)}
        onClick={(event) => handlePointerEvent(event)}
        onDoubleClick={simulateAppLoading}
      >
        <span style={{ fontSize: "4rem" }}>
          <AppIcon appName={appName} />
        </span>
        <div>{appName}</div>
      </div>
    );
  } else {
    return (
      <div
        className="desktop-app"
        style={{ ...appStyle, gridArea, cursor: "pointer" }}
        onPointerEnter={(event) => handlePointerEvent(event)}
        onPointerLeave={(event) => handlePointerEvent(event)}
        onClick={() => window.open(urlRedirect!)}
      >
        <div style={{ fontSize: "4rem" }}>
          <AppIcon appName={appName} />
        </div>
        <span className="desktop-app-shortcut">
          <ShortcutIcon fontSize="small" />
        </span>
        <div>{appName}</div>
      </div>
    );
  }
}

export default DesktopApp;
