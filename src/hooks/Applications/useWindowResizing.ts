import { Dispatch, PointerEvent, useEffect } from "react";
import { getDOMRect, verifyWindowPosition } from "../../utils";
import { WindowRef } from "../../components/Applications/Window";

type handlePointerMoveType = (event: PointerEvent<HTMLDivElement>) => void;

export function useWindowResizing(
  windowRef: WindowRef,
  isPointerDown: boolean,
  SetIsPointerDown: Dispatch<boolean>,
  handlePointerMove: handlePointerMoveType,
  prevWindowRect: DOMRect
) {
  useEffect(() => {
    if (!isPointerDown) return;

    addPointerEventsListeners(handlePointerMove, SetIsPointerDown);

    return () => {
      // Reposition window if it's outside of the screen

      const windowPos = getDOMRect(windowRef);

      const isWindowOutsideOfScreen = verifyWindowPosition(windowPos);

      if (isWindowOutsideOfScreen) {
        resetWindowPosition(windowRef.current!.style, prevWindowRect);
      }

      cleanUpPointerEvents();
    };
  }, [isPointerDown]);
}

function resetWindowPosition(
  style: CSSStyleDeclaration,
  prevWindowRect: DOMRect
) {
  style.left = prevWindowRect.x + "px";
  style.top = prevWindowRect.y + "px";
  style.width = prevWindowRect.width + "px";
  style.height = prevWindowRect.height + "px";
}

function addPointerEventsListeners(
  handlePointerMove: handlePointerMoveType,
  SetIsPointerDown: Dispatch<boolean>
) {
  document.onpointermove = (e) =>
    handlePointerMove(e as unknown as PointerEvent<HTMLDivElement>);
  document.onpointerup = () => SetIsPointerDown(false);
}

function cleanUpPointerEvents() {
  document.onpointermove = () => false;
  document.onpointerup = () => false;
}
