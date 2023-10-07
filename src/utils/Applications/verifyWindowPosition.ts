export default function verifyWindowPosition(newWindowPos: DOMRect) {
  const defaultPadding = 8;
  const coeff = 0.5; // set the % of the window that can be outside the screen

  const calcMaxSizeOutside = (size: number) => (size + defaultPadding) * coeff;

  const maxSizeOutside = {
    width: calcMaxSizeOutside(newWindowPos.width),
    height: calcMaxSizeOutside(newWindowPos.height),
  };

  const screen = {
    width: document.documentElement.offsetWidth,
    height: document.documentElement.offsetHeight,
  };

  const maxOffsetFromScreen = {
    top: 0 - defaultPadding,
    left: -maxSizeOutside.width,
    right: maxSizeOutside.width + screen.width,
    bottom: maxSizeOutside.height + screen.height,
  };

  const isTopLimitReached = maxOffsetFromScreen.top > newWindowPos.top;
  const isBottomLimitReached = newWindowPos.bottom > maxOffsetFromScreen.bottom;
  const isLeftLimitReached = maxOffsetFromScreen.left > newWindowPos.left;
  const isRightLimitReached = newWindowPos.right > maxOffsetFromScreen.right;

  return (
    isTopLimitReached ||
    isBottomLimitReached ||
    isLeftLimitReached ||
    isRightLimitReached
  );
}
