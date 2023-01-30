import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux";

import AppTask from "./AppTask/AppTask";

import { AppbarContainer } from "./style";

export default function Appbar() {
  const [appsContainers, setAppsContainers] = useState<JSX.Element[]>([]);

  const apps = useSelector((store: RootState) => store.apps);

  useEffect(() => {
    const appsRunning = apps.filter((app) => app.status.isRunning && app.status.isSpecial !== "notif");

    setAppsContainers(
      appsRunning
        .map((app, index) => {
          return <AppTask key={`TaskBarApp${index}`} appName={app.name} />;
        })
        .reverse() // Reverse the array to have the last opened app on the right
    );
  }, [apps]);

  return <AppbarContainer>{appsContainers}</AppbarContainer>;
}
