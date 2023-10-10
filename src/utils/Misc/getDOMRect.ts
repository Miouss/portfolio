import { MutableRefObject } from "react";

export function getDOMRect(ref: MutableRefObject<any>): DOMRect {
  return ref.current?.getBoundingClientRect() ?? new DOMRect();
}
