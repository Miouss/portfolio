import { WindowSize } from "../types";

export default function dispatchResizingEvent(
  resizableDivRef: HTMLDivElement,
  windowSize: WindowSize
) {
  resizableDivRef.dispatchEvent(
    new CustomEvent("resizing", {
      detail: {
        width: windowSize.width,
        height: windowSize.height,
      },
    })
  );
}
