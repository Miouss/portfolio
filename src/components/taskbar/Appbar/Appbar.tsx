import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux";

import AppTask from "./AppTask/AppTask";

import { AppbarContainer } from "../StartMenu/styled/Appbar";

export default function Appbar() {
  const [appsContainers, setAppsContainers] = useState<JSX.Element[]>([]);

  const apps = useSelector((state: RootState) => state.apps);

  useEffect(() => {
    const appsRunning = apps.filter((app) => app.status.isRunning);

    setAppsContainers(
      appsRunning.map((app, index) => {
        return <AppTask key={`TaskBarApp${index}`} appName={app.name} />;
      })
    );
  }, [apps]);

  return <AppbarContainer>{appsContainers}</AppbarContainer>;
}
