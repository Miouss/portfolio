import { WindowRef } from "../../components/Applications/Window";
import { PointerOffsetRelative, PointerPosition } from "../../types";

type ResizeArea = "left" | "right" | "top" | "bottom";

const MIN_HEIGHT = 400;
const MIN_WIDTH = 600;

export default function resizeWindow(
  { clientX, clientY }: React.PointerEvent<HTMLDivElement>,
  windowRef: WindowRef,
  pointerPosition: PointerPosition,
  pointerOffsetRelative: PointerOffsetRelative,
  prevWindowRect: DOMRect
) {
  if (!clientX) return;

  const { style } = windowRef.current!;

  const areaToResize: ResizeArea[] = pointerPosition
    .split(/(?=[A-Z])/) // split area like bottomLeft in [bottom, left]
    .map((area) => area.toLowerCase() as ResizeArea);

  const prevOffsetTop = prevWindowRect.top + "px";
  const prevOffsetLeft = prevWindowRect.left + "px";
  const prevHeight = prevWindowRect.height + "px";
  const prevWidth = prevWindowRect.width + "px";

  const offsetFromInitialPos = {
    y: clientY - prevWindowRect.top,
    x: clientX - prevWindowRect.left,
  };

  const resize = {
    left: {
      offsetLeft:
        prevWindowRect.left +
        offsetFromInitialPos.x -
        pointerOffsetRelative.left +
        "px",
      width:
        prevWindowRect.width -
        (offsetFromInitialPos.x - pointerOffsetRelative.left) +
        "px",
      height: prevHeight,
      offsetTop: prevOffsetTop,
    },
    right: {
      width:
        prevWindowRect.width +
        (offsetFromInitialPos.x -
          prevWindowRect.width -
          pointerOffsetRelative.right) +
        "px",
      height: prevHeight,
      offsetTop: prevOffsetTop,
      offsetLeft: prevOffsetLeft,
    },
    top: {
      offsetTop:
        prevWindowRect.top +
        offsetFromInitialPos.y -
        pointerOffsetRelative.top +
        "px",
      height:
        prevWindowRect.height -
        (offsetFromInitialPos.y - pointerOffsetRelative.top) +
        "px",
      width: prevWidth,
      offsetLeft: prevOffsetLeft,
    },
    bottom: {
      height:
        prevWindowRect.height +
        (offsetFromInitialPos.y -
          prevWindowRect.height -
          pointerOffsetRelative.bottom) +
        "px",
      width: prevWidth,
      offsetTop: prevOffsetTop,
      offsetLeft: prevOffsetLeft,
    },
  };

  areaToResize.forEach((area: ResizeArea) => {
    const resizeDim = area === "left" || area === "right" ? "width" : "height";
    const MIN_DIM = resizeDim === "width" ? MIN_WIDTH : MIN_HEIGHT;

    const isOvershrinked = parseInt(resize[area][resizeDim]) < MIN_DIM;
    if (isOvershrinked) return;

    if (resizeDim === "width") {
      style.width = resize[area].width;
      style.left = resize[area].offsetLeft;
    } else {
      style.height =
        parseInt(resize[area].height) < MIN_HEIGHT
          ? MIN_HEIGHT + "px"
          : resize[area].height;
      style.top = resize[area].offsetTop;
    }
  });
}
