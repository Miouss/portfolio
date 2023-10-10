import { Dispatch, useEffect, useState } from "react";

import { DynamicStyle, DynamicStyleAction, useAppStatus } from "..";
import { Animation, WindowRef } from "../../components/Applications/Window";
import { getDOMRect } from "../../utils";

export default function useMinimizedEffect(
  appName: string,
  windowRef: WindowRef,
  setDynamicStyle: Dispatch<DynamicStyleAction>
) {
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [prevWindowDim, setPrevWindowDim] = useState<DOMRect | null>(null);

  const [animation, setAnimation] = useState<Animation>(Animation.SPAWN);
  const { isMinimized } = useAppStatus(appName);

  useEffect(
    function triggerAnim() {
      let newAnimation: Animation;
      const { SPAWN, FADE_IN, FADE_OUT } = Animation;

      if (isFirstRender) {
        newAnimation = SPAWN;
        setIsFirstRender(false);
      } else {
        newAnimation = isMinimized ? FADE_OUT : FADE_IN;
      }

      setAnimation(newAnimation);
    },
    [isMinimized]
  );

  useEffect(
    function updateStyle() {
      if (isFirstRender) return;

      if (!isMinimized) {
        setDynamicStyle({
          type: DynamicStyle.DYNAMIC,
          DOMRect: prevWindowDim!,
        });
      } else {
        const windowDimensions = getDOMRect(windowRef);
        setPrevWindowDim(windowDimensions);
      }
    },
    [isMinimized]
  );

  return animation;
}
