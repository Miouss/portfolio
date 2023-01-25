import { useState, useRef, CSSProperties } from "react";
import { useSelector } from "react-redux";
import {
  RootState,
  focusApp,
  setWindowResponsiveFont,
  useAppDispatch,
} from "../../../redux";

import resizeWindow from "../utils/resizeWIndow";
import rememberWindowPosition from "../utils/rememberWindowPosition";
import monitoringPointerMovingUnpressed from "../utils/monitoringPointerMovingUnpressed";
import checkResponsiveness from "../utils/checkResponsiveness";

import useFullscreenEffect from "../hooks/useFullscreenEffect";
import useFocusEffect from "../hooks/useFocusEffect";
import useWindowResizingPointersEvents from "../hooks/useWindowResizingPointersEvents";
import useUpdateDivPosition from "../hooks/useUpdateDivPosition";
import useMinimizedEffect from "../hooks/useMinimizedEffect";

import {
  Coordinates,
  PointerCursor,
  PointerOffsetRelative,
  PointerPosition,
  WindowSize,
} from "../types";
import { WindowContainer } from "../styled/Window";

interface Props {
  appName: string;
  className?: string;
  minWidth: number;
  minHeight: number;
  zIndexValue?: string;
  onFocus?: boolean;
  children: JSX.Element | JSX.Element[];
}

export default function ResizableDiv({
  appName,
  className,
  minWidth,
  minHeight,
  children,
}: Props) {
  const dispatch = useAppDispatch();

  const { isMinimized, isFullscreen } = useSelector((store: RootState) => {
    const app = store.apps.find((app) => app.name === appName);
    return app!.status;
  });

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
    width: "50%",
    height: "50%",
    top: "25%",
    left: "25%",
  });

  const [updateDivPosition, setUpdateDivPosition] = useState(false);

  const handlePointerMove = (event) => {
    if (!isFullscreen) {
      if (pointerPressed) {
        if (cursor !== "default") {
          const currentWidth = resizeWindow(
            event,
            resizableDivRef.current!,
            pointerPosition,
            originalWindowOffset!,
            originalWindowSize!,
            pointerOffsetRelative!,
            minWidth,
            minHeight
          );

          checkResponsiveness(currentWidth, dispatch, setWindowResponsiveFont);
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

  const zIndex = useFocusEffect(appName);

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
    isFullscreen
  );

  const display: "flex" | "none" = useMinimizedEffect(isMinimized);

  return (
    <WindowContainer
      display={display}
      zIndex={zIndex}
      cursor={cursor}
      ref={resizableDivRef}
      tabIndex={-1}
      style={{
        ...dynamicStyle,
      }}
      onPointerMove={(event) => {
        handlePointerMove(event);
      }}
      onPointerDown={(event) => handlePointerDown(event)}
      onPointerUp={() => setPointerPressed(false)}
    >
      {children}
    </WindowContainer>
  );
}
