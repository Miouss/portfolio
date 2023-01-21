import { useRef, useState, useEffect } from "react";

import "../../../styles/WindowBar.css";
import { focusApp, useAppDispatch } from "../../../redux";

interface Offset {
  left: string;
  top: string;
}

interface Props {
  className?: string;
  appName: string;
  children: React.ReactNode;
}

export function MovableBar({ className, appName, children } : Props) {
  const dispatch = useAppDispatch();
  const windowBarRef = useRef<HTMLDivElement>(null) as any;
  const [mouseIsPressed, setMouseIsPressed] = useState<boolean>(false);
  const [originalOffset, setOriginalOffset] = useState<Offset>();

  const handleMouseMovement = (event): void => {
    event.preventDefault();

    if (mouseIsPressed) {
      windowBarRef.current!.offsetParent!.style.left =
        windowBarRef.current!.offsetParent!.offsetLeft + event.movementX + "px";
      windowBarRef.current!.offsetParent!.style.top =
        windowBarRef.current!.offsetParent!.offsetTop + event.movementY + "px";
    }
  };

  useEffect(() => {
    if (mouseIsPressed) {
      document.onpointerup = () => setMouseIsPressed(false);
      document.onpointermove = (event) => {
        handleMouseMovement(event);
      };

      const windowBarRefCurrent = windowBarRef.current!;
      return () => {        
        const windowPos =
          windowBarRefCurrent.offsetParent!.getBoundingClientRect();

        if (
          windowPos.top < -30 ||
          windowPos.bottom >
            document.documentElement.clientHeight + windowPos.height / 2 ||
          windowPos.left < -(windowPos.width / 2) ||
          windowPos.right >
            document.documentElement.clientWidth + windowPos.width / 2
        ) {
          windowBarRefCurrent.offsetParent!.style.top = originalOffset!.top;
          windowBarRefCurrent.offsetParent!.style.left = originalOffset!.left;
        }

        document.onpointerup = () => {
          return false;
        };

        document.onpointermove = () => {
          return false;
        };
      };
    } else {
      setOriginalOffset({
        left: windowBarRef.current!.offsetParent!.offsetLeft + "px",
        top: windowBarRef.current!.offsetParent!.offsetTop + "px",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mouseIsPressed]);

  return (
    <div
      className={className}
      ref={windowBarRef}
      style={{cursor: "default"}}
      onPointerDown={(event) => {
        event.stopPropagation();
        dispatch(focusApp(appName));
        setMouseIsPressed(true);
      }}
    >
      {children}
    </div>
  );
}
