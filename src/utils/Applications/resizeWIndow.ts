import {
  Coordinates,
  WindowSize,
  PointerOffsetRelative,
  PointerPosition,
} from "../../types";

type ResizeArea = "left" | "right" | "top" | "bottom";

export default function resizeWindow(
  event: React.PointerEvent<HTMLDivElement>,
  ref: HTMLDivElement,
  pointerPosition: PointerPosition | null,
  originalWindowOffset: Coordinates,
  originalWindowSize: WindowSize,
  pointerOffsetRelative: PointerOffsetRelative,
  minWidth: number,
  minHeight: number
) {
  const areaToResize: ResizeArea[] = pointerPosition!
    .split(/(?=[A-Z])/)
    .map((area) => area.toLowerCase() as ResizeArea);

  if (event.clientX === undefined) return;

  const resize = {
    left: {
      offsetLeft:
        originalWindowOffset.x +
        (event.clientX - originalWindowOffset.x) -
        pointerOffsetRelative.left +
        "px",
      width:
        originalWindowSize.width -
        (event.clientX -
          originalWindowOffset.x -
          pointerOffsetRelative.left) +
        "px",
      height: originalWindowSize.height + "px",
      offsetTop: originalWindowOffset.y + "px",
    },
    right: {
      width:
        originalWindowSize.width +
        (event.clientX -
          originalWindowSize.width -
          pointerOffsetRelative.right -
          originalWindowOffset.x) +
        "px",
      height: originalWindowSize.height + "px",
      offsetTop: originalWindowOffset.y + "px",
      offsetLeft: originalWindowOffset.x + "px",
    },
    top: {
      offsetTop:
        originalWindowOffset.y +
        (event.clientY - originalWindowOffset.y) -
        pointerOffsetRelative.top +
        "px",
      height:
        originalWindowSize.height -
        (event.clientY - originalWindowOffset.y - pointerOffsetRelative.top) +
        "px",
      width: originalWindowSize.width + "px",
      offsetLeft: originalWindowOffset.x + "px",
    },
    bottom: {
      height:
        originalWindowSize.height +
        (event.clientY -
          originalWindowSize.height -
          pointerOffsetRelative.bottom -
          originalWindowOffset.y) +
        "px",
      width: originalWindowSize.width + "px",
      offsetTop: originalWindowOffset.y + "px",
      offsetLeft: originalWindowOffset.x + "px",
    },
  };

  areaToResize.forEach((area: ResizeArea) => {
    if (area === "left" || area === "right") {
      const isOvershrinked = parseInt(resize[area].width) < minWidth;
      if (isOvershrinked) return;
      ref.style.width = resize[area].width;
      ref.style.left = resize[area].offsetLeft;
    } else {
      const isOvershrinked = parseInt(resize[area].height) < minHeight;
      if (isOvershrinked) return;
      ref.style.height =
        parseInt(resize[area].height) < minHeight
          ? minHeight + "px"
          : resize[area].height;
      ref.style.top = resize[area].offsetTop;
    }
  });

  const currentWindowSize = {
    height: parseInt(ref.style.height),
    width: parseInt(ref.style.width),
  };

  return currentWindowSize.width;
}

