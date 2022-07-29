/* eslint-disable react-hooks/exhaustive-deps */
import { ReactElement, useState, useEffect } from "react";

import WindowBar from "./WindowBar";

import "../styles/WindowApp.css";

interface Props {
  windowTitle: string;
  setCloseApp: (param: string | null) => void;
  contentComponent: ReactElement;
  componentKey: string;
  setActiveApp: (param: string) => void,
  appIcon: ReactElement
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
  setActiveApp,
  appIcon
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

  let [zIndexValue, setZIndexValue] = useState<number>(1);

  const windowId = `window-app-${componentKey}`;
  let windowContainer = document.querySelector('#' + windowId) as HTMLDivElement;

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

  useEffect(
    function moveWindow() {
      windowContainer = document.querySelector(
        '#' + windowId
      ) as HTMLDivElement;

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

  useEffect(() => {
    windowContainer.style.zIndex = `${zIndexValue}`;
  }, [zIndexValue]);

  useEffect(() => {
    windowContainer.focus();
  }, []);

  document.onmousemove = handleMouseMovement;

  return (
    <div className="window-app" id={windowId} tabIndex={-1} onFocus={() => {setActiveApp(componentKey); setZIndexValue(2)}} onBlur={() => setZIndexValue(1)}>
      <WindowBar
        windowTitle={windowTitle}
        setCloseApp={setCloseApp}
        componentKey={componentKey}
        handleMousePressed={handleMousePressed}
        appIcon={appIcon}
      />
      {contentComponent}
    </div>
  );
}

export default WindowApp;
