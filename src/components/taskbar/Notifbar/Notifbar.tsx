import { useEffect, useState } from "react";
import { NotifbarContainer } from "./NotifbarStyled";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux";
import AppNotif from "./AppNotif/AppNotif";

export default function Notifbar() {
  const [notifWindowContent, setNotifWindowContent] = useState<JSX.Element | null>(null);
  const [notifAppsContainers, setNotifAppsContainers] = useState<JSX.Element[]>([]);

  const apps = useSelector((store: RootState) => store.apps);

  useEffect(() => {
    const appsRunning = apps.filter((app) => app.status.isRunning && app.status.isSpecial === "notif");

    setNotifAppsContainers(
      appsRunning
        .map((app, index) => {
          return <AppNotif key={`AppNotif${index}`} appName={app.name} setNotifWindowContent={setNotifWindowContent} />;
        })
        .reverse() // Reverse the array to have the last opened app on the right
    );
  }, [apps]);

  return (
    <NotifbarContainer>
      {notifWindowContent}
      {notifAppsContainers}
    </NotifbarContainer>
  );
}
