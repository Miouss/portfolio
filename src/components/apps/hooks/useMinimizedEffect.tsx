import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux";

export default function useMinimizedEffect(appName: string) {
  const [display, setDisplay] = useState<"default" | "visible" | "hidden">("default");
  const [isFirstRender, setIsFirstRender] = useState(true);

  const isMinimized = useSelector((store: RootState) => {
    const app = store.apps.find((app) => app.name === appName);
    return app!.status.isMinimized;
  });
  
  useEffect(
    () => {
      if(isFirstRender) {
        setDisplay("default");
        setIsFirstRender(false);
        return;
      }

      setDisplay(isMinimized ? "hidden" : "visible")
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isMinimized]
  );

  return display;
}
