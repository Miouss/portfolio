/* eslint-disable react-hooks/exhaustive-deps */
import { ReactElement, useState, useEffect } from "react";

import WindowBar from "./WindowBar";

import "../styles/WindowApp.css";

interface Props {
  windowTitle: string;
  setCloseApp: (param: string | null) => void;
  contentComponent: ReactElement;
  componentKey: string;
}

interface Coordinates {
  x: number;
  y: number;
}

function WindowApp({
  windowTitle,
  setCloseApp,
  contentComponent,
  componentKey,
}: Props) {
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
    event.preventDefault();
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

  useEffect(
    function moveWindow() {
      const windowContainer = document.querySelector(
        ".window-app"
      ) as HTMLElement;

      const xMove = mouseInitialPosition.x - mouseNewPostion.x;
      const yMove = mouseInitialPosition.y - mouseNewPostion.y;

      const windowContainerScreenPosition =
        windowContainer.getBoundingClientRect();

      if (windowContainerScreenPosition.y >= -1) {
        windowContainer.style.left = windowContainer.offsetLeft - xMove + "px";
        windowContainer.style.top = windowContainer.offsetTop - yMove + "px";

        setMouseInitialPosition({
          x: mouseNewPostion.x,
          y: mouseNewPostion.y,
        });
      } else {
        windowContainer.style.top =
          windowContainer.offsetTop - windowContainerScreenPosition.y + "px";
        setMouseIsPressed(false);
      }
    },
    [mouseNewPostion]
  );

  document.onmousemove = handleMouseMovement;

  return (
    <div className="window-app">
      <WindowBar
        windowTitle={windowTitle}
        setCloseApp={setCloseApp}
        componentKey={componentKey}
        handleMousePressed={handleMousePressed}
      />
      {contentComponent}
    </div>
  );
}

export default WindowApp;