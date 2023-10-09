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

  const area = (
    areaName: PointerPosition,
    cond: boolean,
    cursorName: PointerCursor
  ) => ({
    area: areaName,
    isInArea: cond,
    cursor: cursorName,
  });

  const { NWSE, NESW, NS, EW, DEFAULT } = PointerCursor;
  const { TL, TR, BL, BR, T, B, L, R } = PointerPosition;

  const currentPointerPosition = [
    area(TL, pointerOffset.left <= 10 && pointerOffset.top <= 10, NWSE),
    area(TR, pointerOffset.right <= 10 && pointerOffset.top <= 10, NESW),
    area(BL, pointerOffset.left <= 10 && pointerOffset.bottom <= 10, NESW),
    area(BR, pointerOffset.right <= 10 && pointerOffset.bottom <= 10, NWSE),
    area(T, pointerOffset.left > 10 && pointerOffset.top <= 10, NS),
    area(B, pointerOffset.right > 10 && pointerOffset.bottom <= 10, NS),
    area(L, pointerOffset.left <= 10 && pointerOffset.top > 10, EW),
    area(R, pointerOffset.right <= 10 && pointerOffset.bottom > 10, EW),
  ];

  for (const position of currentPointerPosition) {
    if (position.isInArea) {
      setPointerPosition(position.area);
      setCursor(position.cursor);
      return;
    }
  }
  setPointerPosition(null);
  setCursor(DEFAULT);
}
