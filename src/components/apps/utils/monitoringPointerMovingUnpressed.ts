import { Dispatch, SetStateAction } from "react";
import switchCursor from "./switchCursor";
import { PointerCursor, PointerPosition } from "../types/types";


export default function monitoringPointerMovingUnpressed(
  event: PointerEvent,
  currentResizableDivRef: HTMLDivElement,
  setCursor: Dispatch<SetStateAction<PointerCursor>>,
  cursor: PointerCursor,
  setPointerPosition: Dispatch<SetStateAction<PointerPosition | null>>
) {
  const pointerOffset = {
    left: event.clientX - currentResizableDivRef.offsetLeft,
    top: event.clientY - currentResizableDivRef.offsetTop,
    bottom:
      currentResizableDivRef.offsetHeight -
      (event.clientY - currentResizableDivRef.offsetTop),
    right:
      currentResizableDivRef.offsetWidth -
      (event.clientX - currentResizableDivRef.offsetLeft),
  };

  const currentPointerPosition = [
    {
      area: "topLeft",
      coordinates: pointerOffset.left <= 10 && pointerOffset.top <= 10,
      cursor: "nwse-resize",
    },
    {
      area: "topRight",
      coordinates: pointerOffset.right <= 10 && pointerOffset.top <= 10,
      cursor: "nesw-resize",
    },
    {
      area: "bottomLeft",
      coordinates: pointerOffset.left <= 10 && pointerOffset.bottom <= 10,
      cursor: "nesw-resize",
    },
    {
      area: "bottomRight",
      coordinates: pointerOffset.right <= 10 && pointerOffset.bottom <= 10,
      cursor: "nwse-resize",
    },
    {
      area: "top",
      coordinates: pointerOffset.left > 10 && pointerOffset.top <= 10,
      cursor: "ns-resize",
    },
    {
      area: "bottom",
      coordinates: pointerOffset.right > 10 && pointerOffset.bottom <= 10,
      cursor: "ns-resize",
    },
    {
      area: "left",
      coordinates: pointerOffset.left <= 10 && pointerOffset.top > 10,
      cursor: "ew-resize",
    },
    {
      area: "right",
      coordinates: pointerOffset.right <= 10 && pointerOffset.bottom > 10,
      cursor: "ew-resize",
    },
  ];
  let positionFound = false;

  currentPointerPosition.forEach((position) => {
    if (position.coordinates && !positionFound) {
      setPointerPosition(position.area as PointerPosition);
      switchCursor(position.cursor as PointerCursor, cursor, setCursor);
      positionFound = true;
    }
  });

  if (!positionFound) {
    setPointerPosition(null);
    switchCursor("default", cursor, setCursor);
  }
}
