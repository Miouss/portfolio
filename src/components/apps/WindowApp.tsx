/* eslint-disable react-hooks/exhaustive-deps */
import { Box } from "@mui/system";

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
  toggleFullscreenApp,
} from "../../redux";

import { ResizableDiv } from "../../styles/components/apps/ResizableDiv";
import { MovableBar } from "../../styles/components/apps/MovableBar";

import "../../styles/WindowBar.css";
import "../../styles/WindowApp.css";

interface Props {
  appName: string;
  contentComponent: ReactElement;
}

export default function WindowApp({ appName, contentComponent }: Props) {
  const dispatch = useAppDispatch();

  const [pointerWasDown, setPointerWasDown] = useState<boolean>(false);

  const [closeButtonColor, setCloseButtonColor] = useState<string>("black");
  const [bgColor, setBgColor] = useState<string>("initial");


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
    if (event === "pointerEnter") {
      if (event.type === 1) {
        setPointerWasDown(true);
      } else {
        setPointerWasDown(false);
      }
    } else {
      if (!pointerWasDown) {
        event.stopPropagation();
      }
    }
  };

  return (
    <ResizableDiv
      appName={appName}
      className="window-app"
      minWidth={800}
      minHeight={400}
    >
      <MovableBar appName={appName} className="window-bar">
        <Box
          onPointerEnter={(event) => handlePointerEvent(event)}
          onPointerDown={(event) => handlePointerEvent(event)}
        >
          <AppIcon appName={appName} />
        </Box>
        <Typography style={{ flexGrow: 1 }}>{appName}</Typography>

        <ButtonGroup
          variant="outlined"
          color="inherit"
          onPointerEnter={(event) => handlePointerEvent(event)}
          onPointerDown={(event) => handlePointerEvent(event)}
        >
          <Button onClick={() => dispatch(minimizeApp(appName))}>
            <MinimizeIcon />
          </Button>
          <Button onClick={() => dispatch(toggleFullscreenApp(appName))}>
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
