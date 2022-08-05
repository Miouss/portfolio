import { useRef, useState, useEffect } from "react";

import "../../styles/WindowBar.css";

interface Offset {
  left: string;
  top: string;
}

export function MovableBar({ className, children }) {
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
      document.onmouseup = () => setMouseIsPressed(false);

      const windowBarRefCurrent = windowBarRef.current!;
      return () => {
        const windowPos =
          windowBarRefCurrent.offsetParent!.getBoundingClientRect();

        if (windowPos.top < 0 || windowPos.bottom > document.documentElement.clientHeight + (windowPos.height / 2) || windowPos.left < -(windowPos.width / 2) || windowPos.right > document.documentElement.clientWidth + (windowPos.width / 2)) {
          windowBarRefCurrent.offsetParent!.style.top = originalOffset!.top;
          windowBarRefCurrent.offsetParent!.style.left = originalOffset!.left;
        }

        document.onmouseup = () => {
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
      onPointerMove={(event) => handleMouseMovement(event)}
      onPointerDown={(event) => {event.stopPropagation(); setMouseIsPressed(true)}}
    >
      {children}
    </div>
  );
}
