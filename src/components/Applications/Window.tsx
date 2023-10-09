import {
  useState,
  useRef,
  CSSProperties,
  useEffect,
  useReducer,
  PointerEvent,
} from "react";
import { closeApp, focusApp, useAppDispatch } from "../../redux";

import {
  resizeWindow,
  rememberWindowPosition,
  changeCursorByPosition,
} from "../../utils";
import {
  useFullscreenEffect,
  useFocusEffect,
  useWindowResizing,
  useMinimizedEffect,
  useAppStatus,
  useResponsiveness,
} from "../../hooks";
import {
  PointerCursor,
  PointerOffsetRelative,
  PointerPosition,
  Animation,
} from "../../types";
import { WindowContainer } from "../../styles";
import MovableBar from "./WindowMovableBar";
import Content from "./WindowContent";

export enum DynamicStyleEnum {
  FULLSCREEN = "FULLSCREEN",
  DYNAMIC_STYLE = "DYNAMIC_STYLE",
}

enum AnimationNameEnum {
  SPAWN = "spawnWindow",
  DESPAWN = "despawnWindow",
}

export interface DynamicStyleAction {
  type: DynamicStyleEnum;
  currentDimensions?: CSSProperties;
}

interface Props {
  appName: string;
}

function dynamicStyleReducer(
  _: CSSProperties | null,
  action: DynamicStyleAction
) {
  const { FULLSCREEN, DYNAMIC_STYLE } = DynamicStyleEnum;

  switch (action.type) {
    case FULLSCREEN:
      return {
        width: "calc(100% + 20px)",
        height: "calc(100% - 25px)",
        top: "-10px",
        left: "-10px",
        transform: "none",
      };
    case DYNAMIC_STYLE:
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

  const [cursor, setCursor] = useState<PointerCursor>(PointerCursor.DEFAULT);

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

    resizeWindow(
      e,
      resizableDivRef.current!,
      pointerPosition,
      pointerOffsetRelative!,
      prevWindowPos!
    );
  };

  const [prevWindowPos, setPrevWindowPos] = useState<DOMRect | null>(null);

  const handlePointerDown = (e: PointerEvent<HTMLDivElement>) => {
    dispatch(focusApp(appName));

    rememberWindowPosition(
      e,
      resizableDivRef,
      setPointerOffsetRelative,
      setPointerPressed,
      setPrevWindowPos
    );
  };

  const handleAnimationEnd = ({
    animationName,
  }: React.AnimationEvent<HTMLDivElement>) => {
    const hasSpawned = animationName === AnimationNameEnum.SPAWN;
    const hasDespawned = animationName === AnimationNameEnum.DESPAWN;

    if (hasDespawned) {
      dispatch(closeApp(appName));
      return;
    }

    if (hasSpawned) return;

    const currentDimensions = resizableDivRef!.current!.getBoundingClientRect();

    setDynamicStyle({
      type: DynamicStyleEnum.DYNAMIC_STYLE,
      currentDimensions,
    });
  };

  useWindowResizing(
    resizableDivRef.current!,
    pointerPressed,
    setPointerPressed,
    handlePointerMove,
    prevWindowPos!
  );

  useFullscreenEffect(resizableDivRef.current!, setDynamicStyle, isFullscreen);
  useResponsiveness(resizableDivRef.current?.getBoundingClientRect().width);

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
