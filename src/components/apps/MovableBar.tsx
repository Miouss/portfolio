import { useRef, useState } from "react";

import "../../styles/WindowBar.css";
import { focusApp, useAppDispatch } from "../../redux";
import useWindowMovingEffect from "./hooks/useWindowMovingEffect";

interface Props {
  className?: string;
  appName: string;
  children: React.ReactNode;
}

export function MovableBar({ className, appName, children }: Props) {
  const dispatch = useAppDispatch();
  const windowBarRef = useRef<HTMLDivElement>() as any;
  const [mouseIsPressed, setMouseIsPressed] = useState<boolean>(false);

  const handlePointerDown = (event) => {
    event.stopPropagation();
    dispatch(focusApp(appName));
    setMouseIsPressed(true);
  };

  useWindowMovingEffect(
    windowBarRef.current,
    mouseIsPressed,
    setMouseIsPressed
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
