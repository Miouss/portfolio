import { useSelector } from "react-redux";
import { RootState, RunningApp } from "../../redux";
import { useEffect, useState } from "react";

export default function useRunningAppsNonNotif() {
  const [runningApps, setRunningApps] = useState<RunningApp[]>([]);

  const apps = useSelector((store: RootState) => store.apps);

  useEffect(() => {
    setRunningApps(apps.filter((app) => app.status.isRunning && app.status.isSpecial !== "notif"));
  }, [apps]);

  return runningApps;
}
