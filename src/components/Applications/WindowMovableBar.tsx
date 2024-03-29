import { RefObject, useRef, useState } from "react";
import { focusApp, toggleFullscreenApp, useAppDispatch } from "../../redux";
import { useWindowMovingEffect, useAppStatus } from "../../hooks";
import {
  MovableBarContainer,
  MovableBarIcon,
  MovableBarTitle,
} from "../../styles";
import { AppWindowIcon } from "../../apps";
import BarButtonGroup from "./WindowMovableBarButtonGroup";
import { PointerCursor } from "../../types";

interface WindowBarRefCurrent extends HTMLDivElement {
  offsetParent: HTMLDivElement;
}

export interface WindowBarRef extends RefObject<HTMLDivElement> {
  current: WindowBarRefCurrent | null;
}

interface Props {
  appName: string;
}

export default function MovableBar({ appName }: Props) {
  const dispatch = useAppDispatch();
  const windowBarRef: WindowBarRef = useRef(null);
  const [isPointerDown, setIsPointerDown] = useState<boolean>(false);

  const { isFullscreen } = useAppStatus(appName);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.stopPropagation();
    dispatch(focusApp(appName));
    setIsPointerDown(true);
  };

  const handleDbClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    dispatch(toggleFullscreenApp(appName));
    setIsPointerDown(false);
  };

  useWindowMovingEffect(
    windowBarRef,
    isPointerDown,
    setIsPointerDown,
    isFullscreen
  );

  return (
    <MovableBarContainer
      ref={windowBarRef}
      style={{ cursor: PointerCursor.DEFAULT }}
      onPointerDown={handlePointerDown}
      onDoubleClick={handleDbClick}
    >
      <MovableBarIcon>
        <AppWindowIcon name={appName} />
      </MovableBarIcon>
      <MovableBarTitle>{appName}</MovableBarTitle>

      <BarButtonGroup
        appName={appName}
        windowEl={windowBarRef.current?.offsetParent}
      />
    </MovableBarContainer>
  );
}
