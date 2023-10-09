import { Dispatch, PointerEvent, useEffect } from "react";
import { verifyWindowPosition } from "../../utils";

type handlePointerMoveType = (event: PointerEvent<HTMLDivElement>) => void;

export function useWindowResizing(
  currentResizableDivRef: HTMLDivElement,
  pointerPressed: boolean,
  setPointerPressed: Dispatch<boolean>,
  handlePointerMove: handlePointerMoveType,
  prevWindowPos: DOMRect
) {
  useEffect(() => {
    if (!pointerPressed) return;

    addPointerEventsListeners(handlePointerMove, setPointerPressed);

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

function addPointerEventsListeners(
  handlePointerMove: handlePointerMoveType,
  setPointerPressed: Dispatch<boolean>
) {
  document.onpointermove = (e) =>
    handlePointerMove(e as unknown as PointerEvent<HTMLDivElement>);
  document.onpointerup = () => setPointerPressed(false);
}

function cleanUpPointerEvents() {
  document.onpointermove = () => false;
  document.onpointerup = () => false;
}
