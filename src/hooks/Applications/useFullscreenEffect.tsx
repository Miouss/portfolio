import {
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
  CSSProperties,
} from "react";

import { checkResponsiveness } from "../../utils";

import { useAppDispatch, setWindowResponsiveFont } from "../../redux";

export default function useFullscreenEffect(
  currentResizableDivRef: any,
  setDynamicStyle: Dispatch<{
    type: "FULLSCREEN" | "DYNAMIC_STYLE";
    currentDimensions?: CSSProperties;
  }>,
  isFullscreen?: boolean
) {
  const [previousWindowPosition, setPreviousWindowPosition] =
    useState<DOMRect | null>(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isFullscreen) {
      checkResponsiveness(window.innerWidth, dispatch, setWindowResponsiveFont);
      setPreviousWindowPosition(currentResizableDivRef.getBoundingClientRect());
      setDynamicStyle({
        type: "FULLSCREEN",
      });
    } else if (previousWindowPosition) {
      checkResponsiveness(
        previousWindowPosition.width,
        dispatch,
        setWindowResponsiveFont
      );

      setDynamicStyle({
        type: "DYNAMIC_STYLE",
        currentDimensions: previousWindowPosition,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFullscreen]);
}
