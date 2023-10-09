import { PointerOffsetRelative, PointerPosition } from "../../types";

type ResizeArea = "left" | "right" | "top" | "bottom";

const MIN_HEIGHT = 400;
const MIN_WIDTH = 600;

export default function resizeWindow(
  { clientX, clientY }: React.PointerEvent<HTMLDivElement>,
  { style }: HTMLDivElement,
  pointerPosition: PointerPosition,
  pointerOffsetRelative: PointerOffsetRelative,
  prevWindowPos: DOMRect
) {
  if (!clientX) return;

  const areaToResize: ResizeArea[] = pointerPosition
    .split(/(?=[A-Z])/) // split area like bottomLeft in [bottom, left]
    .map((area) => area.toLowerCase() as ResizeArea);

  const prevOffsetTop = prevWindowPos.top + "px";
  const prevOffsetLeft = prevWindowPos.left + "px";
  const prevHeight = prevWindowPos.height + "px";
  const prevWidth = prevWindowPos.width + "px";

  const offsetFromInitialPos = {
    y: clientY - prevWindowPos.top,
    x: clientX - prevWindowPos.left,
  };

  const resize = {
    left: {
      offsetLeft:
        prevWindowPos.left +
        offsetFromInitialPos.x -
        pointerOffsetRelative.left +
        "px",
      width:
        prevWindowPos.width -
        (offsetFromInitialPos.x - pointerOffsetRelative.left) +
        "px",
      height: prevHeight,
      offsetTop: prevOffsetTop,
    },
    right: {
      width:
        prevWindowPos.width +
        (offsetFromInitialPos.x -
          prevWindowPos.width -
          pointerOffsetRelative.right) +
        "px",
      height: prevHeight,
      offsetTop: prevOffsetTop,
      offsetLeft: prevOffsetLeft,
    },
    top: {
      offsetTop:
        prevWindowPos.top +
        offsetFromInitialPos.y -
        pointerOffsetRelative.top +
        "px",
      height:
        prevWindowPos.height -
        (offsetFromInitialPos.y - pointerOffsetRelative.top) +
        "px",
      width: prevWidth,
      offsetLeft: prevOffsetLeft,
    },
    bottom: {
      height:
        prevWindowPos.height +
        (offsetFromInitialPos.y -
          prevWindowPos.height -
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
