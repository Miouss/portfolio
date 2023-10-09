import { Dispatch, useState, useEffect } from "react";

import {
  DynamicStyleAction,
  DynamicStyleEnum,
} from "../../components/Applications/Window";

export default function useFullscreenEffect(
  currentResizableDivRef: any,
  setDynamicStyle: Dispatch<DynamicStyleAction>,
  isFullscreen?: boolean
) {
  const [previousWindowPosition, setPreviousWindowPosition] =
    useState<DOMRect | null>(null);

  useEffect(() => {
    const { FULLSCREEN, DYNAMIC_STYLE } = DynamicStyleEnum;

    if (isFullscreen) {
      const windowDimensions = currentResizableDivRef.getBoundingClientRect();

      setPreviousWindowPosition(windowDimensions);
      setDynamicStyle({
        type: FULLSCREEN,
      });

      return;
    }

    if (!previousWindowPosition) return;

    setDynamicStyle({
      type: DYNAMIC_STYLE,
      currentDimensions: previousWindowPosition,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFullscreen]);
}
