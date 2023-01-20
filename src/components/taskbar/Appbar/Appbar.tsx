import { ReactElement, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import AppContainer from "./AppContainer/AppContainer";

import { RootState } from "../../../redux";

export default function Appbar() {
  const [appsContainers, setAppsContainers] = useState<JSX.Element[]>([]);

  const apps = useSelector((state: RootState) => state.apps);

  useEffect(() => {
    setAppsContainers(
      apps
        .map((app, index) => {
          return app.status.isRunning ? (
            <AppContainer key={`AppContainer${index}`} appName={app.name} />
          ) : (
            <></>
          );
        })
        .reverse()
    );
  }, [apps]);

  return { appsContainers };
}
