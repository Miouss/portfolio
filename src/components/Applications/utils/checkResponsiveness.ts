export default function checkResponsiveness(
  currentWidth,
  dispatch,
  setWindowResponsiveFont
) {
  if(currentWidth === undefined) return;
  
  if (currentWidth < 1720 && currentWidth >= 1540) {
    dispatch(setWindowResponsiveFont(12));
    return;
  }

  if (currentWidth < 1540 && currentWidth >= 1280) {
    dispatch(setWindowResponsiveFont(8));
    return;
  }

  if (currentWidth < 1280 && currentWidth >= 800) {
    dispatch(setWindowResponsiveFont(6));
    return;
  }

  dispatch(setWindowResponsiveFont(16));
}
