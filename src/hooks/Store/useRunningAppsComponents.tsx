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
      runningAppsNonNotif.map(({ status, name }) => {
        if (status.isSpecial === true) {
          return <AppComponent key={`Component ${name}`} name={name} />;
        } else {
          return <AppWindow key={`Component ${name}`} appName={name} />;
        }
      })
    );
  }, [runningAppsNonNotif]);

  return runningAppComponents;
}
