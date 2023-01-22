export interface Coordinates {
  x: number;
  y: number;
}

export interface PointerOffsetRelative {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export interface WindowSize {
  width: number;
  height: number;
}

export type PointerPosition =
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "topLeft"
  | "topRight"
  | "bottomLeft"
  | "bottomRight";

export type PointerCursor =
  | "ns-resize"
  | "ew-resize"
  | "nwse-resize"
  | "nesw-resize"
  | "default";
