export type IsLoggedProp = boolean | "lock" | "unlock" | undefined;

export type LoginSessionProp = "Samir" | "Miouss";

export type LanguageProp = "fr" | "eng";

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

export type Animation = "spawnWindow" | "fadeInWindow" | "fadeOutWindow";
export type UndefinedBoolean = boolean | undefined;