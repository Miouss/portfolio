import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux";

import { Animation } from "../AppWindow/Window";

export default function useMinimizedEffect(appName: string) {
  const [animation, setAnimation] = useState<Animation>("spawnWindow");
  const [isFirstRender, setIsFirstRender] = useState(true);

  const isMinimized = useSelector((store: RootState) => {
    const app = store.apps.find((app) => app.name === appName);
    return app!.status.isMinimized;
  });
  
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
