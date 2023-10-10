import {
  useState,
  useRef,
  useEffect,
  PointerEvent,
  MutableRefObject,
} from "react";
import { closeApp, focusApp, useAppDispatch } from "../../redux";

import {
  resizeWindow,
  rememberWindowPosition,
  changeCursorByPosition,
  getDOMRect,
} from "../../utils";
import {
  useFullscreenEffect,
  useFocusEffect,
  useWindowResizing,
  useMinimizedEffect,
  useAppStatus,
  useResponsiveness,
  useDynamicStyle,
  DynamicStyle,
} from "../../hooks";
import {
  PointerCursor,
  PointerOffsetRelative,
  PointerPosition,
} from "../../types";
import { WindowContainer } from "../../styles";
import MovableBar from "./WindowMovableBar";
import Content from "./WindowContent";

export enum Animation {
  SPAWN = "spawnWindow",
  DESPAWN = "despawnWindow",
  FADE_IN = "fadeInWindow",
  FADE_OUT = "fadeOutWindow",
}

export type WindowRef = MutableRefObject<HTMLDivElement | null>;

interface Props {
  appName: string;
}

export default function Window({ appName }: Props) {
  const dispatch = useAppDispatch();

  const { isFullscreen } = useAppStatus(appName);

  const windowRef: WindowRef = useRef(null);
  const [isPointerDown, SetIsPointerDown] = useState<boolean>(false);

  useEffect(() => {
    dispatch(focusApp(appName));
  }, []);

  const [pointerOffsetRelative, setPointerOffsetRelative] =
    useState<PointerOffsetRelative | null>(null);

  const [cursor, setCursor] = useState<PointerCursor>(PointerCursor.DEFAULT);

  const [pointerPosition, setPointerPosition] =
    useState<PointerPosition | null>(null);

  const [dynamicStyle, setDynamicStyle] = useDynamicStyle();

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (isFullscreen) return;

    if (!isPointerDown)
      return changeCursorByPosition(
        e,
        windowRef,
        setCursor,
        setPointerPosition
      );

    if (!pointerPosition) return;

    resizeWindow(
      e,
      windowRef,
      pointerPosition,
      pointerOffsetRelative!,
      prevWindowRect!
    );
  };

  const [prevWindowRect, setPrevWindowRect] = useState<DOMRect | null>(null);

  const handlePointerDown = (e: PointerEvent<HTMLDivElement>) => {
    dispatch(focusApp(appName));

    rememberWindowPosition(
      e,
      windowRef,
      setPointerOffsetRelative,
      SetIsPointerDown,
      setPrevWindowRect
    );
  };

  const handleAnimationEnd = ({
    animationName,
  }: React.AnimationEvent<HTMLDivElement>) => {
    const { SPAWN, DESPAWN } = Animation;

    const hasSpawned = animationName === SPAWN;
    const hasDespawned = animationName === DESPAWN;

    if (hasDespawned) {
      dispatch(closeApp(appName));
      return;
    }

    if (hasSpawned) return;

    setDynamicStyle({
      type: DynamicStyle.DYNAMIC,
      DOMRect: getDOMRect(windowRef),
    });
  };

  useWindowResizing(
    windowRef,
    isPointerDown,
    SetIsPointerDown,
    handlePointerMove,
    prevWindowRect!
  );

  useFullscreenEffect(windowRef, setDynamicStyle, isFullscreen);

  useResponsiveness(getDOMRect(windowRef).width);

  const zIndex = useFocusEffect(appName);
  const animation = useMinimizedEffect(appName, windowRef, setDynamicStyle);

  return (
    <WindowContainer
      onAnimationEnd={handleAnimationEnd}
      animation={animation}
      zIndex={zIndex}
      cursor={cursor}
      ref={windowRef}
      tabIndex={-1}
      style={dynamicStyle}
      onPointerMove={handlePointerMove}
      onPointerDown={handlePointerDown}
      onPointerUp={() => SetIsPointerDown(false)}
    >
      <MovableBar appName={appName} />
      <Content appName={appName} />
    </WindowContainer>
  );
}
