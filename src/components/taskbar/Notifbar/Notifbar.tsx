import { NotifbarContainer } from "../../../styles";
import AppNotif from "./AppNotif/AppNotif";
import { useDynamicComponents, useRunningAppsNotif } from "../../../hooks";

export default function Notifbar() {
  const runningAppsNotif = useRunningAppsNotif();

  const notifAppsContainers = useDynamicComponents(runningAppsNotif, AppNotif);

  return <NotifbarContainer>{notifAppsContainers}</NotifbarContainer>;
}
