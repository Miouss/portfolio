import { ReactElement, useEffect, useState } from "react";
import useRunningAppsNonNotif from "./useRunningAppsNonNotif";
import { AppComponent } from "../../components/Applications/Window/Contents/list";
import AppWindow from "../../components/Applications/AppWindow";

export default function useRunningAppsComponents() {
  const [runningAppComponents, setRunningAppComponents] = useState<
    ReactElement[]
  >([]);

  const runningAppsNonNotif = useRunningAppsNonNotif();

  useEffect(() => {
    setRunningAppComponents(
      runningAppsNonNotif.map((runningApp) => {
        if (runningApp.status.isSpecial === true) {
          return (
            <AppComponent
              key={`Component ${runningApp.name}`}
              name={runningApp.name}
            />
          );
        } else {
          return (
            <AppWindow
              minHeight={600}
              minWidth={800}
              key={`Component ${runningApp.name}`}
              appName={runningApp.name}
            />
          );
        }
      })
    );
  }, [runningAppsNonNotif]);

  return runningAppComponents;
}
