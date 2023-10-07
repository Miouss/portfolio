import { useEffect, useState } from "react";

import { Animation } from "../../types";
import { useAppStatus } from "../";

export default function useMinimizedEffect(appName: string) {
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [animation, setAnimation] = useState<Animation>("spawnWindow");
  const { isMinimized } = useAppStatus(appName);

  useEffect(() => {
    let newAnimation: Animation;

    if (isFirstRender) {
      newAnimation = "spawnWindow";
      setIsFirstRender(false);
    } else {
      newAnimation = isMinimized ? "fadeOutWindow" : "fadeInWindow";
    }

    setAnimation(newAnimation);
  }, [isMinimized]);

  return animation;
}
