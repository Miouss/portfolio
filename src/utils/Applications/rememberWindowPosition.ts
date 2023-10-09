import { Dispatch } from "react";
import { PointerOffsetRelative } from "../../types";

export default function rememberWindowPosition(
  { pageY, pageX }: React.PointerEvent<HTMLDivElement>,
  resizableDivRef: React.RefObject<HTMLDivElement>,
  setPointerOffsetRelative: Dispatch<PointerOffsetRelative | null>,
  setPointerPressed: Dispatch<boolean>,
  setPrevWindowPos: Dispatch<DOMRect | null>
) {
  const windowBoundingClientRect =
    resizableDivRef.current!.getBoundingClientRect();

  setPrevWindowPos(windowBoundingClientRect);

  setPointerOffsetRelative({
    top: pageY - windowBoundingClientRect.top,
    right: pageX - windowBoundingClientRect.right,
    bottom: pageY - windowBoundingClientRect.bottom,
    left: pageX - windowBoundingClientRect.left,
  });

  setPointerPressed(true);
}
