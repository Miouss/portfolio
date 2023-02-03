import { RunningApp } from "../redux";
import AppTask from "../components/Taskbar/Appbar/AppTask/AppTask";
import AppNotif from "../components/Taskbar/Notifbar/AppNotif/AppNotif";
import { useState, useEffect } from "react";

export default function useDynamicComponents(
  array: RunningApp[],
  Component: typeof AppTask | typeof AppNotif
) {
  const [appsContainers, setAppsContainers] = useState<JSX.Element[]>([]);

  useEffect(() => {
    setAppsContainers(
      array
        .map((app, index) => (
          <Component key={`TaskBarApp${index}`} appName={app.name} />
        ))
        .reverse()
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [array]);

  return appsContainers;
}
