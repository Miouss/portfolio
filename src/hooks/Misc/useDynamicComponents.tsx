import { RunningApp } from "../../redux";
import AppbarItem from "../../components/Taskbar/TaskbarAppbarItem";
import AppNotif from "../../components/Taskbar/TaskbarNotifbarAppNotif";
import { useState, useEffect } from "react";

export default function useDynamicComponents(
  array: RunningApp[],
  Component: typeof AppbarItem | typeof AppNotif
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
