import { Dispatch, SetStateAction } from "react";
import { PointerCursor } from "../types";

export default function switchCursor(
  newCursor: PointerCursor,
  cursor: PointerCursor,
  setCursor: Dispatch<SetStateAction<PointerCursor>>
) {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  cursor === newCursor ? null : setCursor(newCursor);
}
