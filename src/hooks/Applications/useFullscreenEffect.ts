import { Dispatch, useState, useEffect, MutableRefObject } from "react";

import { DynamicStyle, DynamicStyleAction } from "../../hooks";

import { getDOMRect } from "../../utils";

export default function useFullscreenEffect(
  resizableDivRef: MutableRefObject<HTMLDivElement | null>,
  setDynamicStyle: Dispatch<DynamicStyleAction>,
  isFullscreen?: boolean
) {
  const [previousWindowPosition, setPreviousWindowPosition] =
    useState<DOMRect | null>(null);

  useEffect(() => {
    const { FULLSCREEN, DYNAMIC } = DynamicStyle;

    if (isFullscreen) {
      const windowDimensions = getDOMRect(resizableDivRef);

      setPreviousWindowPosition(windowDimensions);
      setDynamicStyle({
        type: FULLSCREEN,
      });

      return;
    }

    if (!previousWindowPosition) return;

    setDynamicStyle({
      type: DYNAMIC,
      DOMRect: previousWindowPosition,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFullscreen]);
}
