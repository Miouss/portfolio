import { useState, useRef, CSSProperties } from "react";
import { RootState, focusApp, useAppDispatch } from "../../../redux";

import resizeWindow from "./utils/resizeWIndow";
import rememberWindowPosition from "./utils/rememberWindowPosition";
import monitoringPointerMovingUnpressed from "./utils/monitoringPointerMovingUnpressed";
import useFullscreenEffect from "./hooks/useFullscreenEffect";
import useFocusEffect from "./hooks/useFocusEffect";
import useWindowResizingPointersEvents from "./hooks/useWindowResizingPointersEvents";
import useUpdateDivPosition from "./hooks/useUpdateDivPosition";
import { useSelector } from "react-redux";
import useMinimizedEffect from "./hooks/useMinimizedEffect";

interface Props {
  appName: string;
  className?: string;
  minWidth: number;
  minHeight: number;
  zIndexValue?: string;
  onFocus?: boolean;
  children: JSX.Element | JSX.Element[];
}

export interface Coordinates {
  x: number;
  y: number;
}

export interface PointerOffsetRelative {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export interface WindowSize {
  width: number;
  height: number;
}

export type PointerPosition =
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "topLeft"
  | "topRight"
  | "bottomLeft"
  | "bottomRight";

export type PointerCursor =
  | "ns-resize"
  | "ew-resize"
  | "nwse-resize"
  | "nesw-resize"
  | "default";

export function ResizableDiv({
  appName,
  className,
  minWidth,
  minHeight,
  children,
}: Props) {
  const dispatch = useAppDispatch();

  const {isMinimized, isFullscreen} = useSelector(
    (store: RootState) => {
      const app = store.apps.find((app) => app.name === appName);
      return app!.status;
    }
  );

  const resizableDivRef = useRef<HTMLDivElement>(null);
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

  const [dynamicStyle, setDynamicStyle] = useState<CSSProperties>({
    width: "auto",
    height: "auto",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  });

  const [updateDivPosition, setUpdateDivPosition] = useState(false);

  const handlePointerMove = (event) => {
    if (pointerPressed) {
      if (cursor !== "default") {
        resizeWindow(
          event,
          resizableDivRef.current!,
          pointerPosition,
          originalWindowOffset!,
          originalWindowSize!,
          pointerOffsetRelative!,
          minWidth,
          minHeight
        );
      }
    } else {
      monitoringPointerMovingUnpressed(
        event,
        resizableDivRef.current!,
        setCursor,
        cursor,
        setPointerPosition
      );
    }
  };

  const handlePointerDown = (event) => {
    dispatch(focusApp(appName));

    rememberWindowPosition(
      event,
      resizableDivRef.current!,
      setOriginalWindowOffset,
      setPointerOffsetRelative,
      setOriginalWindowSize,
      setPointerPressed
    );
  };

  const zIndexValue = useFocusEffect(appName);

  useWindowResizingPointersEvents(
    resizableDivRef.current!,
    originalWindowOffset,
    originalWindowSize,
    pointerPressed,
    setPointerPressed,
    handlePointerMove
  );

  useUpdateDivPosition(
    resizableDivRef.current,
    updateDivPosition,
    setUpdateDivPosition,
    setDynamicStyle
  );

  useFullscreenEffect(
    resizableDivRef.current!,
    setDynamicStyle,
    setUpdateDivPosition,
    isFullscreen,
  );

  const display = useMinimizedEffect(isMinimized);

  return (
    <div
      ref={resizableDivRef}
      className={className}
      tabIndex={-1}
      style={{
        cursor: cursor,
        display: display,
        zIndex: zIndexValue,
        minWidth: minWidth + "px",
        minHeight: minHeight + "px",
        ...dynamicStyle,
      }}
      onPointerMove={(event) => {
        handlePointerMove(event);
      }}
      onPointerDown={(event) => handlePointerDown(event)}
      onPointerUp={() => setPointerPressed(false)}
    >
      {children}
    </div>
  );
}
