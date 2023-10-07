import { Dispatch, SetStateAction } from "react";
import { PointerOffsetRelative } from "../../types";

export default function rememberWindowPosition(
  { pageY, pageX }: React.PointerEvent<HTMLDivElement>,
  currentResizableDivRef: HTMLDivElement,
  setPointerOffsetRelative: Dispatch<
    SetStateAction<PointerOffsetRelative | null>
  >,
  setPointerPressed: Dispatch<SetStateAction<boolean>>,
  setPrevWindowPos: Dispatch<SetStateAction<DOMRect | null>>
) {
  const windowBoundingClientRect =
    currentResizableDivRef.getBoundingClientRect();

  setPrevWindowPos(windowBoundingClientRect);

  setPointerOffsetRelative({
    top: pageY - windowBoundingClientRect.top,
    right: pageX - windowBoundingClientRect.right,
    bottom: pageY - windowBoundingClientRect.bottom,
    left: pageX - windowBoundingClientRect.left,
  });

  setPointerPressed(true);
}
