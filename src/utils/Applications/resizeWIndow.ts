import {
  Coordinates,
  WindowSize,
  PointerOffsetRelative,
} from "../../types";

export default function resizeWindow(
  event: MouseEvent,
  currentResizableDivRef: HTMLDivElement,
  pointerPosition: string | null,
  originalWindowOffset: Coordinates,
  originalWindowSize: WindowSize,
  pointerOffsetRelative: PointerOffsetRelative,
  minWidth: number,
  minHeight: number
) {
  const areaToResize = pointerPosition!
    .split(/(?=[A-Z])/)
    .map((value) => value.toLowerCase());

  if (event.x === undefined) return;

  const resize = {
    left: {
      offsetLeft:
        originalWindowOffset!.x +
        (event.x - originalWindowOffset!.x) -
        pointerOffsetRelative!.left +
        "px",
      width:
        originalWindowSize!.width -
        (event.x - originalWindowOffset!.x - pointerOffsetRelative!.left) +
        "px",
    },
    right: {
      width:
        originalWindowSize!.width +
        (event.x -
          originalWindowSize!.width -
          pointerOffsetRelative!.right -
          originalWindowOffset!.x) +
        "px",
    },
    top: {
      offsetTop:
        originalWindowOffset!.y +
        (event.y - originalWindowOffset!.y) -
        pointerOffsetRelative!.top +
        "px",
      height:
        originalWindowSize!.height -
        (event.y - originalWindowOffset!.y - pointerOffsetRelative!.top) +
        "px",
    },
    bottom: {
      height:
        originalWindowSize!.height +
        (event.y -
          originalWindowSize!.height -
          pointerOffsetRelative!.bottom -
          originalWindowOffset!.y) +
        "px",
    },
  };

  areaToResize.forEach((area) => {
    if (parseInt(resize[area!].width) < minWidth) {
      resize[area!].width = minWidth + "px";
    } else {
      currentResizableDivRef.style.left = resize[area!].offsetLeft;
    }

    if (parseInt(resize[area!].height) < minHeight) {
      resize[area!].height = minHeight + "px";
    } else {
      currentResizableDivRef.style.top = resize[area!].offsetTop;
    }

    currentResizableDivRef.style.width = resize[area!].width;
    currentResizableDivRef.style.height = resize[area!].height;
  });
  
  const currentWindowSize = {
    height: parseInt(currentResizableDivRef.style.height),
    width: parseInt(currentResizableDivRef.style.width),
  };

  return currentWindowSize.width;
}
