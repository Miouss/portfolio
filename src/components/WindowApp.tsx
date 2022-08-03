/* eslint-disable react-hooks/exhaustive-deps */
import "../styles/WindowApp.css";
import WindowBar from "./WindowBar";

import { ReactElement, useEffect, useRef, useState } from "react";
import { focusApp, RootState, useAppDispatch } from "../redux";
import { useSelector } from "react-redux";

interface Props {
  appName: string;
  contentComponent: ReactElement;
}
interface Coordinates {
  x: number;
  y: number;
}

interface PointerOffsetRelative {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

interface WindowSize {
  width: number;
  height: number;
}

type PointerPosition =
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "topLeft"
  | "topRight"
  | "bottomLeft"
  | "bottomRight";

type PointerCursor =
  | "ns-resize"
  | "ew-resize"
  | "nwse-resize"
  | "nesw-resize"
  | "default";

function WindowApp({ appName, contentComponent }: Props) {
  const isFocused = useSelector(
    (state: RootState) => state.apps[appName].isFocused
  );
  const dispatch = useAppDispatch();

  const windowAppContainer = useRef<HTMLDivElement | null>(null);
  const [zIndexValue, setZIndexValue] = useState<string>("1");
  const [pointerPressed, setPointerPressed] = useState<boolean>(false);

  const [originalWindowOffset, setOriginalWindowOffset] =
    useState<Coordinates | null>(null);
  const [pointerOffsetRelative, setPointerOffsetRelative] =
    useState<PointerOffsetRelative | null>(null);

  const [originalWindowSize, setOriginalWindowSize] =
    useState<WindowSize | null>(null);
  const [cursor, setCursor] = useState<PointerCursor>("default");
  const [pointerPosition, setPointerPosition] =
    useState<PointerPosition | null>(null);

  const switchCursor = (newCursor: PointerCursor) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    cursor === newCursor ? null : setCursor(newCursor);
  };

  const resizeWindow = (event) => {
    const areaToResize = pointerPosition!.split(/(?=[A-Z])/).map((value) => value.toLowerCase());

    const resize = {
      left: {
        offsetLeft:
          originalWindowOffset!.x +
          (event.x - originalWindowOffset!.x) -
          pointerOffsetRelative!.left +
          "px",
        width:
          originalWindowSize!.width -
          (event.x - originalWindowOffset!.x - pointerOffsetRelative!.left) +
          "px",
      },
      right: {
        width:
          originalWindowSize!.width +
          (event.x -
            originalWindowSize!.width -
            pointerOffsetRelative!.right -
            originalWindowOffset!.x) +
          "px",
      },
      top: {
        offsetTop:
          originalWindowOffset!.y +
          (event.y - originalWindowOffset!.y) -
          pointerOffsetRelative!.top +
          "px",
        height:
          originalWindowSize!.height -
          (event.y - originalWindowOffset!.y - pointerOffsetRelative!.top) +
          "px",
      },
      bottom: {
        height:
          originalWindowSize!.height +
          (event.y -
            originalWindowSize!.height -
            pointerOffsetRelative!.bottom -
            originalWindowOffset!.y) +
          "px",
      },
    };

    areaToResize.forEach((area) => {
      windowAppContainer.current!.style.left = resize[area!].offsetLeft;
      windowAppContainer.current!.style.top = resize[area!].offsetTop;
      windowAppContainer.current!.style.width = resize[area!].width;
      windowAppContainer.current!.style.height = resize[area!].height;
    });
  };

  const handlePointerMove = (event) => {
    if (pointerPressed) {
      if (cursor !== "default") {
        resizeWindow(event);
      }
    } else {
      const pointerOffset = {
        left: event.clientX - windowAppContainer.current!.offsetLeft,
        top: event.clientY - windowAppContainer.current!.offsetTop,
        bottom:
          windowAppContainer.current!.offsetHeight -
          (event.clientY - windowAppContainer.current!.offsetTop),
        right:
          windowAppContainer.current!.offsetWidth -
          (event.clientX - windowAppContainer.current!.offsetLeft),
      };

      const currentPointerPosition = {
        topLeft: {
          position: pointerOffset.left <= 10 && pointerOffset.top <= 10,
          cursor: "nwse-resize",
        },
        topRight: {
          position: pointerOffset.right <= 10 && pointerOffset.top <= 10,
          cursor: "nesw-resize",
        },
        bottomLeft: {
          position: pointerOffset.left <= 10 && pointerOffset.bottom <= 10,
          cursor: "nesw-resize",
        },
        bottomRight: {
          position: pointerOffset.right <= 10 && pointerOffset.bottom <= 10,
          cursor: "nwse-resize",
        },
        top: {
          position: pointerOffset.left > 10 && pointerOffset.top <= 10,
          cursor: "ns-resize",
        },
        bottom: {
          position: pointerOffset.right > 10 && pointerOffset.bottom <= 10,
          cursor: "ns-resize",
        },
        left: {
          position: pointerOffset.left <= 10 && pointerOffset.top > 10,
          cursor: "ew-resize",
        },
        right: {
          position: pointerOffset.right <= 10 && pointerOffset.bottom > 10,
          cursor: "ew-resize",
        },
      };

      let areaFound = false;

      for (let area in currentPointerPosition) {
        if (currentPointerPosition[area].position && !areaFound) {
          setPointerPosition(area as PointerPosition);
          switchCursor(currentPointerPosition[area].cursor);
          areaFound = true;
        }
      }

      if (!areaFound) {
        setPointerPosition(null);
        switchCursor("default");
      }
    }
  };

  const handlePointerPressed = (event) => {
    const windowBoundingClientRect =
      windowAppContainer.current!.getBoundingClientRect();
    setOriginalWindowOffset({
      x: windowAppContainer.current?.offsetLeft as number,
      y: windowAppContainer.current?.offsetTop as number,
    });
    setPointerOffsetRelative({
      top: event.pageY - windowBoundingClientRect.top,
      right: event.pageX - windowBoundingClientRect.right,
      bottom: event.pageY - windowBoundingClientRect.bottom,
      left: event.pageX - windowBoundingClientRect.left,
    });
    setOriginalWindowSize({
      width: windowBoundingClientRect.width,
      height: windowBoundingClientRect.height,
    });
    setPointerPressed(true);
  };

  useEffect(() => {
    if (isFocused) {
      setZIndexValue("2");
    } else {
      setZIndexValue("1");
    }
  }, [isFocused]);

  useEffect(() => {
    if (pointerPressed) {
      document.onmousemove = (event) => handlePointerMove(event);
      document.onpointerup = () => setPointerPressed(false);
      return () => {
        document.onmousemove = () => {
          return false;
        };
        document.onpointerup = () => {
          return false;
        };
      };
    }
  }, [pointerPressed]);

  useEffect(() => {
    dispatch(focusApp(appName));
  }, []);

  return (
    <div
      ref={windowAppContainer}
      className="window-app"
      tabIndex={-1}
      onFocus={() => {
        dispatch(focusApp(appName));
      }}
      style={{
        zIndex: zIndexValue,
        cursor: cursor,
      }}
      onPointerMove={(event) => {
        if (!pointerPressed) handlePointerMove(event);
      }}
      onPointerDown={(event) => handlePointerPressed(event)}
      onPointerUp={() => setPointerPressed(false)}
    >
      <WindowBar
        appName={appName}
        windowAppContainer={windowAppContainer.current}
      />
      {contentComponent}
    </div>
  );
}

export default WindowApp;
