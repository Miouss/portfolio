import { NotifbarContainer } from "./style";
import AppNotif from "./AppNotif/AppNotif";
import useRunningAppsNotif from "../../../hooks/Store/useRunningAppsNotif";
import useDynamicComponents from "../../../hooks/useDynamicComponents";

export default function Notifbar() {
  const runningAppsNotif = useRunningAppsNotif();

  const notifAppsContainers = useDynamicComponents(runningAppsNotif, AppNotif);

  return <NotifbarContainer>{notifAppsContainers}</NotifbarContainer>;
}
