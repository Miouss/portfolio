import { useSelector } from "react-redux";
import { RootState, RunningApp } from "../../redux";
import { useEffect, useState } from "react";

export default function useRunningAppsNotif() {
  const [runningApps, setRunningApps] = useState<RunningApp[]>([]);

  const apps = useSelector((store: RootState) => store.apps);

  useEffect(() => {
    setRunningApps(
      apps.filter(
        (app) => app.status.isRunning && app.status.isSpecial === "notif"
      )
    );
  }, [apps]);

  return runningApps;
}
