import { useEffect, useState } from "react";

import { Animation } from "../../types/types";
import useAppStatus from "../Store/useAppStatus";

export default function useMinimizedEffect(appName: string) {
  const [animation, setAnimation] = useState<Animation>("spawnWindow");
  const [isFirstRender, setIsFirstRender] = useState(true);

  const {isMinimized} = useAppStatus(appName);
  
  useEffect(
    () => {
      if(isFirstRender) {
        setAnimation("spawnWindow");
        setIsFirstRender(false);
        return;
      }

      setAnimation(isMinimized ? "fadeOutWindow" : "fadeInWindow")
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isMinimized]
  );

  return animation;
}
