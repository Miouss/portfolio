import AppTask from "./AppTask/AppTask";

import { AppbarContainer } from "./style";
import useRunningAppsNonNotif from "../../../hooks/Store/useRunningAppsNonNotif";
import useDynamicComponents from "../../../hooks/useDynamicComponents";

export default function Appbar() {
  const runningAppsNonNotif = useRunningAppsNonNotif();
  const runningAppsNonNotifContainers = useDynamicComponents(
    runningAppsNonNotif,
    AppTask
  );

  return <AppbarContainer>{runningAppsNonNotifContainers}</AppbarContainer>;
}
