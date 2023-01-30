import { useState, useRef, CSSProperties } from "react";
import { useSelector } from "react-redux";
import {
  RootState,
  closeApp,
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
import useMinimizedEffect from "../hooks/useMinimizedEffect";

import {
  Coordinates,
  PointerCursor,
  PointerOffsetRelative,
  PointerPosition,
  WindowSize,
} from "../types";
import { WindowContainer } from "../utils/style";

interface Props {
  appName: string;
  minWidth: number;
  minHeight: number;
  zIndexValue?: string;
  onFocus?: boolean;
  children: JSX.Element | JSX.Element[];
}
export type Animation = "spawnWindow" | "fadeInWindow" | "fadeOutWindow";

export default function ResizableDiv({
  appName,
  minWidth,
  minHeight,
  children,
}: Props) {
  const dispatch = useAppDispatch();

  const isFullscreen = useSelector((store: RootState) => {
    const app = store.apps.find((app) => app.name === appName);
    return app!.status.isFullscreen;
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

  const [dynamicStyle, setDynamicStyle] = useState<CSSProperties>({});

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

  useFullscreenEffect(resizableDivRef.current!, setDynamicStyle, isFullscreen);

  const animation: Animation = useMinimizedEffect(appName);

  return (
    <WindowContainer
      onAnimationEnd={(e) => {

        // We set the style of the window after the first animation is finished
        // To avoid the style to be unset for moving/resizing the window
        if(e.animationName === "spawnWindow"){ 
          const currentDimensions = resizableDivRef!.current!.getBoundingClientRect();
    
          setDynamicStyle({
            width: currentDimensions.width + "px",
            height: currentDimensions.height + "px",
            top: currentDimensions.top + "px",
            left: currentDimensions.left + "px",
          });

          return;
        };

        if(e.animationName === "despawnWindow"){
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
      {children}
    </WindowContainer>
  );
}
