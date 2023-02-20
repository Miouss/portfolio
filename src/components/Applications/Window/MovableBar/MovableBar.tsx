import { useRef, useState } from "react";
import {
  focusApp,
  toggleFullscreenApp,
  useAppDispatch,
} from "../../../../redux";
import { useWindowMovingEffect, useAppStatus } from "../../../../hooks";
import {
  MovableBarContainer,
  MovableBarIcon,
  MovableBarTitle,
} from "../../../../styles";
import { AppWindowIcon } from "../Contents/list";
import BarButtonGroup from "./BarButtonGroup/BarButtonGroup";

interface Props {
  appName: string;
}

export default function MovableBar({ appName }: Props) {
  const dispatch = useAppDispatch();
  const windowBarRef = useRef<HTMLDivElement>() as any;
  const [mouseIsPressed, setMouseIsPressed] = useState<boolean>(false);

  const { isFullscreen } = useAppStatus(appName);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.stopPropagation();
    dispatch(focusApp(appName));
    setMouseIsPressed(true);
  };

  useWindowMovingEffect(
    windowBarRef.current,
    mouseIsPressed,
    setMouseIsPressed,
    isFullscreen
  );

  return (
    <MovableBarContainer
      ref={windowBarRef}
      style={{ cursor: "default" }}
      onPointerDown={handlePointerDown}
      onDoubleClick={(e) => {
        e.stopPropagation();
        dispatch(toggleFullscreenApp(appName));
        setMouseIsPressed(false);
      }}
    >
      <MovableBarIcon>
        <AppWindowIcon name={appName} />
      </MovableBarIcon>
      <MovableBarTitle>{appName}</MovableBarTitle>

      <BarButtonGroup
        appName={appName}
        refAppWindow={windowBarRef.current?.offsetParent}
      />
    </MovableBarContainer>
  );
}
