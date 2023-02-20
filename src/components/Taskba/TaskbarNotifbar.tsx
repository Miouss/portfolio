import { NotifbarContainer } from "../../styles";
import AppNotif from "./TaskbarNotifbarAppNotif";
import { useDynamicComponents, useRunningAppsNotif } from "../../hooks";

export default function Notifbar() {
  const runningAppsNotif = useRunningAppsNotif();

  const notifAppsContainers = useDynamicComponents(runningAppsNotif, AppNotif);

  return <NotifbarContainer>{notifAppsContainers}</NotifbarContainer>;
}
