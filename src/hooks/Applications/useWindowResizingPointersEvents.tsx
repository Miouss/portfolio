import { Dispatch, SetStateAction, useEffect } from "react";
import { verifyWindowPosition } from "../../utils";

export default function useWindowResizingPointersEvents(
  currentResizableDivRef: HTMLDivElement,
  pointerPressed: boolean,
  setPointerPressed: Dispatch<SetStateAction<boolean>>,
  handlePointerMove: (event: React.PointerEvent<HTMLDivElement>) => void,
  prevWindowPos: DOMRect
) {
  useEffect(() => {
    if (!pointerPressed) return;

    document.onpointermove = (e) =>
      handlePointerMove(e as unknown as React.PointerEvent<HTMLDivElement>);
    document.onpointerup = () => setPointerPressed(false);

    return () => {
      // Reposition window if it's outside of the screen

      const windowPos = currentResizableDivRef.getBoundingClientRect();

      const isWindowOutsideOfScreen = verifyWindowPosition(windowPos);

      if (isWindowOutsideOfScreen) {
        resetWindowPosition(currentResizableDivRef.style, prevWindowPos);
      }

      cleanUpPointerEvents();
    };
  }, [pointerPressed]);
}

function resetWindowPosition(
  style: CSSStyleDeclaration,
  prevWindowPos: DOMRect
) {
  style.left = prevWindowPos.x + "px";
  style.top = prevWindowPos.y + "px";
  style.width = prevWindowPos.width + "px";
  style.height = prevWindowPos.height + "px";
}

function cleanUpPointerEvents() {
  document.onpointermove = () => false;
  document.onpointerup = () => false;
}
