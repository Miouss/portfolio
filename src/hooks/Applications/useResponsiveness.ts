import { useEffect } from "react";
import { useAppDispatch, setWindowResponsiveFont } from "../../redux";

enum FontSize {
  SMALL = 6,
  MEDIUM = 8,
  LARGE = 12,
  XLARGE = 16,
}

enum AppSize {
  SMALL = 1280,
  MEDIUM = 1540,
  LARGE = 1720,
}

export function useResponsiveness(width: number | undefined) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!width) return;

    const isMinLarge = width >= AppSize.MEDIUM;
    const isMinMedium = width >= AppSize.SMALL;

    const isLarge = width < AppSize.LARGE && isMinLarge;

    const isMedium = !isMinLarge && isMinMedium;

    const isSmall = !isMinMedium;

    let fontSize = FontSize.XLARGE;

    if (isLarge) {
      fontSize = FontSize.LARGE;
    }

    if (isMedium) {
      fontSize = FontSize.MEDIUM;
    }

    if (isSmall) {
      fontSize = FontSize.SMALL;
    }

    dispatch(setWindowResponsiveFont(fontSize));
  }, [width]);
}
