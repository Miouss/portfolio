import { Dispatch } from "react";
import { PointerOffsetRelative } from "../../types";
import { WindowRef } from "../../components/Applications/Window";

export default function rememberWindowPosition(
  { pageY, pageX }: React.PointerEvent<HTMLDivElement>,
  windowRef: WindowRef,
  setPointerOffsetRelative: Dispatch<PointerOffsetRelative | null>,
  SetIsPointerDown: Dispatch<boolean>,
  setPrevWindowRect: Dispatch<DOMRect | null>
) {
  const windowBoundingClientRect = windowRef.current!.getBoundingClientRect();

  setPrevWindowRect(windowBoundingClientRect);

  setPointerOffsetRelative({
    top: pageY - windowBoundingClientRect.top,
    right: pageX - windowBoundingClientRect.right,
    bottom: pageY - windowBoundingClientRect.bottom,
    left: pageX - windowBoundingClientRect.left,
  });

  SetIsPointerDown(true);
}
