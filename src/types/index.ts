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

export enum PointerPosition {
  TL = "topLeft",
  TR = "topRight",
  BL = "bottomLeft",
  BR = "bottomRight",
  T = "top",
  B = "bottom",
  L = "left",
  R = "right",
}

export enum PointerCursor {
  NS = "ns-resize",
  EW = "ew-resize",
  NWSE = "nwse-resize",
  NESW = "nesw-resize",
  DEFAULT = "default",
}

export type UndefinedBoolean = boolean | undefined;

export type DynamicFontSize = "24px" | "16px" | "12px";

export type DropDownMenuContent = "File" | "Edit" | "Format" | "Help" | null;

export type MailSentProps = boolean | undefined | "sending";

export interface BodyMessageProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type UndefinedDirection = "left" | "right" | undefined;
export type Direction = "left" | "right";
