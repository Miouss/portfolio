import { Dispatch, useEffect, useState } from "react";
import { cleanUpPointerEvents, verifyWindowPosition } from "../../utils";
import { WindowBarRef } from "../../components/Applications/WindowMovableBar";

interface Offset {
  left: CSSStyleDeclaration["left"];
  top: CSSStyleDeclaration["top"];
}

export default function useWindowMovingEffect(
  windowBarRef: WindowBarRef,
  isPointerDown: boolean,
  setIsPointerDown: Dispatch<boolean>,
  isFullscreen: boolean
) {
  const [originalOffset, setOriginalOffset] = useState<Offset>();

  useEffect(() => {
    if (windowBarRef.current === null) return;
    if (!isPointerDown || isFullscreen) return;

    const windowEl = windowBarRef.current.offsetParent;
    const windowStyle = windowEl.style;

    const handlePointerMove = (e: PointerEvent) => {
      e.preventDefault();
      windowStyle.left = windowEl.offsetLeft + e.movementX + "px";
      windowStyle.top = windowEl.offsetTop + e.movementY + "px";
    };

    document.onpointerup = () => setIsPointerDown(false);
    document.onpointermove = handlePointerMove;

    return () => {
      const newWindowPos = windowEl.getBoundingClientRect();
      const isLimitReached = verifyWindowPosition(newWindowPos);

      if (isLimitReached) {
        windowStyle.top = originalOffset!.top;
        windowStyle.left = originalOffset!.left;
      } else {
        setOriginalOffset({
          left: windowEl.offsetLeft + "px",
          top: windowEl.offsetTop + "px",
        });
      }

      cleanUpPointerEvents();
    };
  }, [isPointerDown, isFullscreen]);

  useEffect(() => {
    // This useEffect is used to get the very first offset of the window after it renders
    if (!windowBarRef.current || originalOffset) return;

    const { left, top } =
      windowBarRef.current.offsetParent.getBoundingClientRect();

    setOriginalOffset({
      left: `${left}px`,
      top: `${top}px`,
    });
  }, [originalOffset]);
}
