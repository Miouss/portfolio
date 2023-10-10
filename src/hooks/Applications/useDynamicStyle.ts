import { CSSProperties, useReducer } from "react";

export enum DynamicStyle {
  FULLSCREEN = "FULLSCREEN",
  DYNAMIC = "DYNAMIC",
}
export interface DynamicStyleAction {
  type: DynamicStyle;
  DOMRect?: CSSProperties;
}

export function useDynamicStyle() {
  return useReducer(reducer, {});
}

function reducer(_: CSSProperties | null, action: DynamicStyleAction) {
  const { FULLSCREEN, DYNAMIC } = DynamicStyle;

  switch (action.type) {
    case FULLSCREEN:
      return {
        width: "calc(100% + 20px)",
        height: "calc(100% - 25px)",
        top: "-10px",
        left: "-10px",
        transform: "none",
      };
    case DYNAMIC:
      const { DOMRect } = action;

      return {
        width: DOMRect!.width + "px",
        height: DOMRect!.height + "px",
        top: DOMRect!.top + "px",
        left: DOMRect!.left + "px",
      };
    default:
      return {};
  }
}
