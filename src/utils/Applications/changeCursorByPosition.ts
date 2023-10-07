import { Dispatch, SetStateAction } from "react";
import { PointerCursor, PointerPosition } from "../../types";

export function changeCursorByPosition(
  { clientX, clientY }: React.PointerEvent<HTMLDivElement>,
  { offsetLeft, offsetTop, offsetHeight, offsetWidth }: HTMLDivElement,
  setCursor: Dispatch<SetStateAction<PointerCursor>>,
  setPointerPosition: Dispatch<SetStateAction<PointerPosition | null>>
) {
  const pointerOffset = {
    left: clientX - offsetLeft,
    top: clientY - offsetTop,
    bottom: offsetHeight - (clientY - offsetTop),
    right: offsetWidth - (clientX - offsetLeft),
  };

  const area = (areaName: string, cond: boolean, cursorName: string) => ({
    area: areaName,
    isInArea: cond,
    cursor: cursorName + "-resize",
  });

  const currentPointerPosition = [
    area(
      "topLeft",
      pointerOffset.left <= 10 && pointerOffset.top <= 10,
      "nwse"
    ),
    area(
      "topRight",
      pointerOffset.right <= 10 && pointerOffset.top <= 10,
      "nesw"
    ),
    area(
      "bottomLeft",
      pointerOffset.left <= 10 && pointerOffset.bottom <= 10,
      "nesw"
    ),
    area(
      "bottomRight",
      pointerOffset.right <= 10 && pointerOffset.bottom <= 10,
      "nwse"
    ),
    area("top", pointerOffset.left > 10 && pointerOffset.top <= 10, "ns"),
    area(
      "bottom",
      pointerOffset.right > 10 && pointerOffset.bottom <= 10,
      "ns"
    ),
    area("left", pointerOffset.left <= 10 && pointerOffset.top > 10, "ew"),
    area("right", pointerOffset.right <= 10 && pointerOffset.bottom > 10, "ew"),
  ];

  for (const position of currentPointerPosition) {
    if (position.isInArea) {
      setPointerPosition(position.area as PointerPosition);
      setCursor(position.cursor as PointerCursor);
      return;
    }
  }

  setPointerPosition(null);
}
