import { ReactElement, useEffect, useState } from "react";
import { useRunningAppsNonNotif } from "../";
import { AppComponent } from "../../apps";
import { AppWindow } from "../../components";

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
              minHeight={400}
              minWidth={600}
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
