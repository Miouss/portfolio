/* eslint-disable react-hooks/exhaustive-deps */
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

import CloseIcon from "@mui/icons-material/Close";
import CropFreeIcon from "@mui/icons-material/CropFree";
import MinimizeIcon from "@mui/icons-material/Minimize";

import "../styles/WindowBar.css";

import { useEffect, useState } from "react";
import { getIcon } from "./AppList";
import { closeApp, minimizeApp, RootState, useAppDispatch } from "../redux";
import { useSelector } from "react-redux";

interface Props {
  appName: string; 
  windowAppContainer: HTMLElement | null
}

interface Coordinates {
  x: number;
  y: number;
}

function WindowBar({ appName, windowAppContainer }: Props) {
  const isMinimized = useSelector(
    (state: RootState) => state.apps[appName].isMinimized
  );
  const dispatch = useAppDispatch();

  let [closeButtonColor, setCloseButtonColor] = useState<string>("black");
  let [bgColor, setBgColor] = useState<string>("initial");

  let [mouseIsPressed, setMouseIsPressed] = useState<boolean>(false);

  let [mouseInitialPosition, setMouseInitialPosition] = useState<Coordinates>({
    x: 0,
    y: 0,
  });

  let [mouseNewPostion, setMouseNewPostion] = useState<Coordinates>({
    x: 0,
    y: 0,
  });

  const handleMousePressed = (
    event: React.MouseEvent<HTMLDivElement>
  ): void => {
    if (event.type === "mousedown") {
      setMouseIsPressed(true);
      setMouseInitialPosition({
        x: event.clientX,
        y: event.clientY,
      });
    } else {
      setMouseIsPressed(false);
    }
  };

  const handleMouseMovement = (event: MouseEvent): void => {
    event.preventDefault();

    if (mouseIsPressed) {
      setMouseNewPostion({
        x: event.clientX,
        y: event.clientY,
      });
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

  useEffect(
    function moveWindow() {
      if (windowAppContainer !== null) {
        const xMove = mouseInitialPosition.x - mouseNewPostion.x;
        const yMove = mouseInitialPosition.y - mouseNewPostion.y;

        const windowAppContainerScreenPosition =
          windowAppContainer?.getBoundingClientRect();

        if (windowAppContainerScreenPosition.y >= -1) {
          windowAppContainer.style.left =
            windowAppContainer.offsetLeft - xMove + "px";
          windowAppContainer.style.top = windowAppContainer.offsetTop - yMove + "px";

          setMouseInitialPosition({
            x: mouseNewPostion.x,
            y: mouseNewPostion.y,
          });
        } else {
          windowAppContainer.style.top =
            windowAppContainer.offsetTop - windowAppContainerScreenPosition.y + "px";
          setMouseIsPressed(false);
        }
      }
    },
    [mouseNewPostion]
  );

  useEffect(() => {
    if (mouseIsPressed) {
      document.onmousemove = handleMouseMovement;
      return () => {
        document.onmousemove = () => {
          return false;
        };
      };
    }
  }, [mouseIsPressed]);

  return (
    <div className="window-bar">
      {getIcon(appName)}
      <Typography
        style={{ flexGrow: 1 }}
        onMouseDown={handleMousePressed}
        onMouseUp={handleMousePressed}
      >
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
