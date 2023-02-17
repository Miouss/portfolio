import { useState, useRef, CSSProperties, useEffect } from "react";
import {
  closeApp,
  focusApp,
  setWindowResponsiveFont,
  useAppDispatch,
} from "../../redux";

import {
  resizeWindow,
  rememberWindowPosition,
  monitoringPointerMovingUnpressed,
  checkResponsiveness,
} from "../../utils";
import {
  useFullscreenEffect,
  useFocusEffect,
  useWindowResizingPointersEvents,
  useMinimizedEffect,
  useAppStatus,
} from "../../hooks";
import {
  Coordinates,
  PointerCursor,
  PointerOffsetRelative,
  PointerPosition,
  WindowSize,
  Animation,
} from "../../types";
import { WindowContainer } from "../../styles";
import MovableBar from "./Window/MovableBar/MovableBar";
import Content from "./Window/Contents/Content";

interface Props {
  appName: string;
  minWidth: number;
  minHeight: number;
}

export default function AppWindow({ appName, minWidth, minHeight }: Props) {
  const dispatch = useAppDispatch();

  const { isFullscreen } = useAppStatus(appName);

  const resizableDivRef = useRef<HTMLDivElement>(null);
  const [pointerPressed, setPointerPressed] = useState<boolean>(false);

  useEffect(() => {
    dispatch(focusApp(appName));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [originalWindowOffset, setOriginalWindowOffset] =
    useState<Coordinates | null>(null);
  const [pointerOffsetRelative, setPointerOffsetRelative] =
    useState<PointerOffsetRelative | null>(null);

  const [originalWindowSize, setOriginalWindowSize] =
    useState<WindowSize | null>(null);

  const [cursor, setCursor] = useState<PointerCursor>("default");

  const [pointerPosition, setPointerPosition] =
    useState<PointerPosition | null>(null);

  const [dynamicStyle, setDynamicStyle] = useState<CSSProperties>({});

  const handlePointerMove = (event) => {
    if (isFullscreen) return;

    if (pointerPressed) {
      if (cursor === "default") return;

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

      return checkResponsiveness(
        currentWidth,
        dispatch,
        setWindowResponsiveFont
      );
    }

    monitoringPointerMovingUnpressed(
      event,
      resizableDivRef.current!,
      setCursor,
      cursor,
      setPointerPosition
    );
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

  useWindowResizingPointersEvents(
    resizableDivRef.current!,
    originalWindowOffset,
    originalWindowSize,
    pointerPressed,
    setPointerPressed,
    handlePointerMove
  );

  useFullscreenEffect(resizableDivRef.current!, setDynamicStyle, isFullscreen);

  const zIndex = useFocusEffect(appName);
  const animation: Animation = useMinimizedEffect(appName);

  return (
    <WindowContainer
      onAnimationEnd={(e) => {
        // We set the style of the window after the first animation is finished
        // To avoid the style to be unset for moving/resizing the window
        if (e.animationName === "spawnWindow") {
          const currentDimensions =
            resizableDivRef!.current!.getBoundingClientRect();

          setDynamicStyle({
            width: currentDimensions.width + "px",
            height: currentDimensions.height + "px",
            top: currentDimensions.top + "px",
            left: currentDimensions.left + "px",
          });

          return;
        }

        if (e.animationName === "despawnWindow") {
          dispatch(closeApp(appName));

          return;
        }
      }}
      animationName={animation}
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
      <MovableBar appName={appName} />
      <Content appName={appName} />
    </WindowContainer>
  );
}
