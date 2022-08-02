/* eslint-disable react-hooks/exhaustive-deps */
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

import CloseIcon from "@mui/icons-material/Close";
import CropFreeIcon from "@mui/icons-material/CropFree";
import MinimizeIcon from "@mui/icons-material/Minimize";

import "../styles/WindowBar.css";

import { useEffect, useState } from "react";
import { AppIcon } from "./AppList";
import { closeApp, minimizeApp, RootState, useAppDispatch } from "../redux";
import { useSelector } from "react-redux";

interface Props {
  appName: string;
  windowAppContainer: HTMLElement | null;
}

function WindowBar({ appName, windowAppContainer }: Props) {
  const isMinimized = useSelector(
    (state: RootState) => state.apps[appName].isMinimized
  );
  const dispatch = useAppDispatch();

  const [closeButtonColor, setCloseButtonColor] = useState<string>("black");
  const [bgColor, setBgColor] = useState<string>("initial");

  const [mouseIsPressed, setMouseIsPressed] = useState<boolean>(false);
  const handleMousePressed = (
    event: React.MouseEvent<HTMLDivElement>
  ): void => {
    if (event.type === "mousedown") {
      setMouseIsPressed(true);
    } else {
      setMouseIsPressed(false);
    }
  };

  const handleMouseMovement = (event: MouseEvent): void => {
    event.preventDefault();

    if (mouseIsPressed) {
      windowAppContainer!.style.left = windowAppContainer!.offsetLeft + event.movementX + "px";
      windowAppContainer!.style.top = windowAppContainer!.offsetTop + event.movementY + "px";

    }
  };

  useEffect(() => {
    if (windowAppContainer !== null) {
      if (isMinimized) {
        windowAppContainer.style.display = "none";
      } else {
        windowAppContainer.style.display = "flex";
      }
    }
  }, [isMinimized]);

  useEffect(() => {
    if (mouseIsPressed) {
      document.onmousemove = handleMouseMovement;
      document.onmouseup = () => setMouseIsPressed(false);

      return () => {
          const windonwPos = windowAppContainer!.getBoundingClientRect();
          if (windonwPos.y < 0) {
            windowAppContainer!.style.top = -windowAppContainer!.parentElement!.offsetTop + "px";
          }else if(windonwPos.y > 880){
            windowAppContainer!.style.top = -windowAppContainer!.parentElement!.offsetTop + 600 +"px";
          }

        document.onmousemove = () => {
          return false;
        };

        document.onmouseup = () => {
          return false;
        };
      };
    }
  }, [mouseIsPressed]);

  return (
    <div className="window-bar">
      <AppIcon appName={appName} />
      <Typography style={{ flexGrow: 1 }} onMouseDown={handleMousePressed}>
        {appName}
      </Typography>

      <ButtonGroup variant="outlined" color="inherit">
        <Button onClick={() => dispatch(minimizeApp(appName))}>
          <MinimizeIcon />
        </Button>
        <Button>
          <CropFreeIcon />
        </Button>
        <Button
          style={{ backgroundColor: bgColor }}
          onClick={() => dispatch(closeApp(appName))}
          onMouseOver={() => {
            setBgColor("red");
            setCloseButtonColor("white");
          }}
          onMouseLeave={() => {
            setBgColor("initial");
            setCloseButtonColor("initial");
          }}
        >
          <CloseIcon style={{ color: closeButtonColor }} />
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default WindowBar;
