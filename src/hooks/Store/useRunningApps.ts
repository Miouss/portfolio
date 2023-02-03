import { useSelector } from "react-redux";
import { RootState, RunningApp } from "../../redux";
import { useEffect, useState } from "react";

export default function useRunningApps() {
  const [runningApps, setRunningApps] = useState<RunningApp[]>([]);

  const apps = useSelector((store: RootState) => store.apps);

  useEffect(() => {
    setRunningApps(apps.filter((app) => app.status.isRunning));
  }, [apps]);

  return runningApps;
}
