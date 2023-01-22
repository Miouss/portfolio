import { Dispatch, SetStateAction } from "react";
import { Coordinates, PointerOffsetRelative, WindowSize } from "../types/types";


export default function rememberWindowPosition(
  event: MouseEvent,
  currentResizableDivRef: HTMLDivElement,
  setOriginalWindowOffset: Dispatch<SetStateAction<Coordinates | null>>,
  setPointerOffsetRelative: Dispatch<
    SetStateAction<PointerOffsetRelative | null>
  >,
  setOriginalWindowSize: Dispatch<SetStateAction<WindowSize | null>>,
  setPointerPressed: Dispatch<SetStateAction<boolean>>,
) {
  const windowBoundingClientRect =
    currentResizableDivRef.getBoundingClientRect();

  setOriginalWindowOffset({
    x: currentResizableDivRef.offsetLeft,
    y: currentResizableDivRef.offsetTop,
  });
  setPointerOffsetRelative({
    top: event.pageY - windowBoundingClientRect.top,
    right: event.pageX - windowBoundingClientRect.right,
    bottom: event.pageY - windowBoundingClientRect.bottom,
    left: event.pageX - windowBoundingClientRect.left,
  });
  setOriginalWindowSize({
    width: windowBoundingClientRect.width,
    height: windowBoundingClientRect.height,
  });
  setPointerPressed(true);
}
