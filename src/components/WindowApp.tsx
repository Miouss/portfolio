/* eslint-disable react-hooks/exhaustive-deps */
import "../styles/WindowApp.css";

import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

import CloseIcon from "@mui/icons-material/Close";
import CropFreeIcon from "@mui/icons-material/CropFree";
import MinimizeIcon from "@mui/icons-material/Minimize";

import { AppIcon } from "./AppList";

import { ReactElement, useEffect, useState } from "react";
import {
  focusApp,
  closeApp,
  minimizeApp,
  RootState,
  useAppDispatch,
} from "../redux";
import { useSelector } from "react-redux";

import { ResizableDiv } from "./custom/ResizableDiv";
import { MovableBar } from "./custom/MovableBar";

import "../styles/WindowBar.css";
import "../styles/WindowApp.css";

interface Props {
  appName: string;
  contentComponent: ReactElement;
}

function WindowApp({ appName, contentComponent }: Props) {
  const isMinimized = useSelector(
    (state: RootState) => state.apps[appName].isMinimized
  );

  const isFocused = useSelector(
    (state: RootState) => state.apps[appName].isFocused
  );
  const dispatch = useAppDispatch();

  const [pointerWasDown, setPointerWasDown] = useState<boolean>(false);

  const [closeButtonColor, setCloseButtonColor] = useState<string>("black");
  const [bgColor, setBgColor] = useState<string>("initial");

  const [display, setDisplay] = useState<string>("flex");
  const [zIndexValue, setZIndexValue] = useState<string>("1");

  useEffect(() => {
    isMinimized ? setDisplay("none") : setDisplay("flex");
  }, [isMinimized]);

  useEffect(() => {
    isFocused ? setZIndexValue("2") : setZIndexValue("1");
  }, [isFocused]);

  useEffect(() => {
    dispatch(focusApp(appName));
  }, []);

  const switchCloseButtonColor = (event) => {
    if (event.type === "mouseover") {
      setBgColor("red");
      setCloseButtonColor("white");
    } else {
      setBgColor("initial");
      setCloseButtonColor("initial");
    }
  };

  const handlePointerEvent = (event) => {
    if(event === "pointerEnter"){
      if(event.type === 1){
        setPointerWasDown(true);
      }else{
        setPointerWasDown(false);
      }
    }else{
      if(!pointerWasDown){
        event.stopPropagation();
      }
    }
  }

  return (
    <ResizableDiv
      className="window-app"
      minWidth={400}
      minHeight={300}
      display={display}
      zIndexValue={zIndexValue}
      onFocus={() => {
        dispatch(focusApp(appName));
      }}
    >
      <MovableBar
        className="window-bar"
      >
        <AppIcon appName={appName} />
        <Typography style={{ flexGrow: 1 }}>{appName}</Typography>

        <ButtonGroup variant="outlined" color="inherit" onPointerEnter={(event) => handlePointerEvent(event)} onPointerDown={(event) => handlePointerEvent(event)}>
          <Button onClick={() => dispatch(minimizeApp(appName))}>
            <MinimizeIcon />
          </Button>
          <Button>
            <CropFreeIcon />
          </Button>
          <Button
            style={{ backgroundColor: bgColor }}
            onClick={() => dispatch(closeApp(appName))}
            onMouseOver={(event) => switchCloseButtonColor(event)}
            onMouseLeave={(event) => switchCloseButtonColor(event)}
          >
            <CloseIcon style={{ color: closeButtonColor }} />
          </Button>
        </ButtonGroup>
      </MovableBar>

      {contentComponent}
    </ResizableDiv>
  );
}

export default WindowApp;
