import {
  useState,
  useRef,
  CSSProperties,
  useEffect,
  useReducer,
  PointerEvent,
} from "react";
import {
  closeApp,
  focusApp,
  setWindowResponsiveFont,
  useAppDispatch,
} from "../../redux";

import {
  resizeWindow,
  rememberWindowPosition,
  changeCursorByPosition,
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
import MovableBar from "./WindowMovableBar";
import Content from "./WindowContent";

interface Props {
  appName: string;
}

function dynamicStyleReducer(
  _: CSSProperties | null,
  action: {
    type: "FULLSCREEN" | "DYNAMIC_STYLE";
    currentDimensions?: CSSProperties;
  }
) {
  switch (action.type) {
    case "FULLSCREEN":
      return {
        width: "calc(100% + 20px)",
        height: "calc(100% - 25px)",
        top: "-10px",
        left: "-10px",
        transform: "none",
      };
    case "DYNAMIC_STYLE":
      const { currentDimensions } = action;

      return {
        width: currentDimensions!.width + "px",
        height: currentDimensions!.height + "px",
        top: currentDimensions!.top + "px",
        left: currentDimensions!.left + "px",
      };
    default:
      return {};
  }
}

export default function Window({ appName }: Props) {
  const dispatch = useAppDispatch();

  const { isFullscreen } = useAppStatus(appName);

  const resizableDivRef = useRef<HTMLDivElement>(null);
  const [pointerPressed, setPointerPressed] = useState<boolean>(false);

  useEffect(() => {
    dispatch(focusApp(appName));
  }, []);

  const [pointerOffsetRelative, setPointerOffsetRelative] =
    useState<PointerOffsetRelative | null>(null);

  const [cursor, setCursor] = useState<PointerCursor>("default");

  const [pointerPosition, setPointerPosition] =
    useState<PointerPosition | null>(null);

  const [dynamicStyle, setDynamicStyle] = useReducer(dynamicStyleReducer, {});

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (isFullscreen) return;

    if (!pointerPressed) {
      changeCursorByPosition(
        e,
        resizableDivRef.current!,
        setCursor,
        setPointerPosition
      );
      return;
    }

    if (!pointerPosition) return;

    const currentWidth = resizeWindow(
      e,
      resizableDivRef.current!,
      pointerPosition,
      pointerOffsetRelative!,
      prevWindowPos!
    );

    checkResponsiveness(currentWidth, dispatch, setWindowResponsiveFont);
  };

  const [prevWindowPos, setPrevWindowPos] = useState<DOMRect | null>(null);

  const handlePointerDown = (e: PointerEvent<HTMLDivElement>) => {
    dispatch(focusApp(appName));

    rememberWindowPosition(
      e,
      resizableDivRef.current!,
      setPointerOffsetRelative,
      setPointerPressed,
      setPrevWindowPos
    );
  };

  const handleAnimationEnd = ({
    animationName,
  }: React.AnimationEvent<HTMLDivElement>) => {
    if (animationName === "despawnWindow") {
      dispatch(closeApp(appName));
      return;
    }

    if (animationName !== "spawnWindow") return;

    const currentDimensions = resizableDivRef!.current!.getBoundingClientRect();

    setDynamicStyle({ type: "DYNAMIC_STYLE", currentDimensions });
  };

  useWindowResizingPointersEvents(
    resizableDivRef.current!,
    pointerPressed,
    setPointerPressed,
    handlePointerMove,
    prevWindowPos!
  );

  useFullscreenEffect(resizableDivRef.current!, setDynamicStyle, isFullscreen);

  const zIndex = useFocusEffect(appName);
  const animation: Animation = useMinimizedEffect(appName);

  return (
    <WindowContainer
      onAnimationEnd={handleAnimationEnd}
      animationName={animation}
      zIndex={zIndex}
      cursor={cursor}
      ref={resizableDivRef}
      tabIndex={-1}
      style={dynamicStyle}
      onPointerMove={handlePointerMove}
      onPointerDown={handlePointerDown}
      onPointerUp={() => setPointerPressed(false)}
    >
      <MovableBar appName={appName} />
      <Content appName={appName} />
    </WindowContainer>
  );
}
