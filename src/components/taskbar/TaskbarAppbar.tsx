import AppbarItem from "./TaskbarAppbarItem";

import { AppbarContainer } from "../../styles";
import { useRunningAppsNonNotif, useDynamicComponents } from "../../hooks";

export default function Appbar() {
  const runningAppsNonNotif = useRunningAppsNonNotif();
  const runningAppsNonNotifContainers = useDynamicComponents(
    runningAppsNonNotif,
    AppbarItem
  );

  return <AppbarContainer>{runningAppsNonNotifContainers}</AppbarContainer>;
}
