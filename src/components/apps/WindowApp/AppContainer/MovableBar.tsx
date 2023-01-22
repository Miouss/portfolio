import { useRef, useState } from "react";

import "../../../../styles/WindowBar.css";
import { RootState, focusApp, useAppDispatch } from "../../../../redux";
import useWindowMovingEffect from "../../../hooks/useWindowMovingEffect";
import { useSelector } from "react-redux";

interface Props {
  className?: string;
  appName: string;
  children: React.ReactNode;
}

export default function MovableBar({ className, appName, children }: Props) {
  const dispatch = useAppDispatch();
  const windowBarRef = useRef<HTMLDivElement>() as any;
  const [mouseIsPressed, setMouseIsPressed] = useState<boolean>(false);

  const isFullscreen = useSelector(
    (store: RootState) =>
      store.apps.find((app) => app.name === appName)!.status.isFullscreen
  );

  const handlePointerDown = (event) => {
    event.stopPropagation();
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
    <div
      className={className}
      ref={windowBarRef}
      style={{ cursor: "default" }}
      onPointerDown={(event) => handlePointerDown(event)}
    >
      {children}
    </div>
  );
}
