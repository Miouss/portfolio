import { Dispatch, SetStateAction, useEffect } from "react";

import { Coordinates, WindowSize } from "../ResizableDiv";

export default function useWindowResizingPointersEvents(
  currentResizableDivRef: HTMLDivElement,
  originalWindowOffset: Coordinates | null,
  originalWindowSize: WindowSize | null,
  pointerPressed: boolean,
  setPointerPressed: Dispatch<SetStateAction<boolean>>,
  handlePointerMove: (event: PointerEvent) => void
) {
  useEffect(() => {
    if (pointerPressed) {
      document.onpointermove = (event) => handlePointerMove(event);
      document.onpointerup = () => setPointerPressed(false);

      return () => {
        // Reposition window if it's outside of the screen
        const windowPos = currentResizableDivRef.getBoundingClientRect();
        const refStyle = currentResizableDivRef.style;
        const defaultPadding = 8;

        const windowIsOutsideOfScreen = verifyWindowPosition(
          windowPos,
          defaultPadding
        );

        if (windowIsOutsideOfScreen) {
          resetWindowPosition(
            refStyle,
            originalWindowOffset,
            originalWindowSize
          );
        }

        cleanUpPointerEvents();
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pointerPressed]);
}

function resetWindowPosition(
  refStyle,
  originalWindowOffset,
  originalWindowSize
) {
  refStyle.left = originalWindowOffset!.x + "px";
  refStyle.top = originalWindowOffset!.y + "px";
  refStyle.width = originalWindowSize!.width + "px";
  refStyle.height = originalWindowSize!.height + "px";
}

function verifyWindowPosition(windowPos, defaultPadding) {
  const topLimitReached = windowPos.top < -defaultPadding;
  const bottomLimitReached =
    windowPos.bottom - defaultPadding > document.documentElement.clientHeight;
  const leftLimitReached = windowPos.left < -defaultPadding;
  const rightLimitReached =
    windowPos.right - defaultPadding > document.documentElement.clientWidth;

  if (
    topLimitReached ||
    bottomLimitReached ||
    leftLimitReached ||
    rightLimitReached
  ) {
    return true;
  }

  return false;
}

function cleanUpPointerEvents() {
  document.onpointermove = () => {
    return false;
  };
  document.onpointerup = () => {
    return false;
  };
}
