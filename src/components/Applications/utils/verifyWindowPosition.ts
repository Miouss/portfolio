export default function verifyWindowPosition(newWindowPos) {
  const defaultPadding = 8;
  const coeff = 0.5; // set the % of the window that can be outside the screen

  // the window can be outside the screen by a certain % of its size
  const maxWidthOutside = (newWindowPos.width + defaultPadding) * coeff;
  const maxHeightOutside = (newWindowPos.height + defaultPadding) * coeff;

  // get the size of the screen
  const viewWidth = document.documentElement.offsetWidth;
  const viewHeight = document.documentElement.offsetHeight;

  // the max offset of the window from the screen
  const maxOffset = {
    top: 0 - defaultPadding,
    left: -maxWidthOutside,
    right: maxWidthOutside + viewWidth, //
    bottom: maxHeightOutside + viewHeight,
  };

  // check if the window is outside the (screen + its max offsets)
  const topLimitReached = maxOffset.top > newWindowPos.top;
  const bottomLimitReached = newWindowPos.bottom > maxOffset.bottom;
  const leftLimitReached = maxOffset.left > newWindowPos.left;
  const rightLimitReached = newWindowPos.right > maxOffset.right;

  // return true if the window is outside the screen
  return (
    topLimitReached ||
    bottomLimitReached ||
    leftLimitReached ||
    rightLimitReached
  );
}
