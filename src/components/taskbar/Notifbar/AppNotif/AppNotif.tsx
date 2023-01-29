/* eslint-disable react-hooks/exhaustive-deps */
import { Dispatch, SetStateAction, useEffect } from "react";
import { AppNotifButton } from "./AppNotifStyled";
import {
  AppComponent,
  AppNotifIcon,
} from "../../../apps/AppWindow/Window/Contents/list";
import { NotifWindow } from "../NotifbarStyled";
import { useSelector } from "react-redux";
import {
  RootState,
  closeApp,
  focusApp,
  minimizeApp,
  useAppDispatch,
} from "../../../../redux";

interface Props {
  appName: string;
}
export default function AppNotif({ appName }: Props) {
  const dispatch = useAppDispatch();

  const { isMinimized, isFocused } = useSelector((store: RootState) => {
    const app = store.apps.find((app) => app.name === appName);
    return app?.status!;
  });

  const handleClick = () => {
    if (isFocused) return dispatch(minimizeApp(appName));
    dispatch(focusApp(appName));
  };

  const handleContextMenuClick = (e) => {
    e.preventDefault();
    dispatch(closeApp(appName));
  };

  useEffect(() => {
    dispatch(focusApp(appName));
  }, []);

  return (
    <>
      <NotifWindow visible={isFocused}>
        <AppComponent name={appName} />
      </NotifWindow>

      <AppNotifButton
        onClick={handleClick}
        onContextMenu={handleContextMenuClick}
      >
        <AppNotifIcon name={appName} />
      </AppNotifButton>
    </>
  );
}
