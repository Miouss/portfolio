import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import AppbarContainer from "./AppbarContainer/AppbarContainer";

import { RootState } from "../../../redux";

export default function Appbar() {
  const [appsContainers, setAppsContainers] = useState<JSX.Element[]>([]);

  const apps = useSelector((state: RootState) => state.apps);

  useEffect(() => {
    const appsRunning = apps.filter((app) => app.status.isRunning);

    setAppsContainers(
      appsRunning.map((app, index) => {
        return <AppbarContainer key={`TaskBarApp${index}`} appName={app.name} />;
      })
    );
  }, [apps]);

  return <div id="windows-task-bar-apps-icons">{appsContainers}</div>;
}
