/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
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
import ContextMenu from "./ContextMenu";

interface Props {
  appName: string;
}
export default function AppNotif({ appName }: Props) {
  const [openContextMenu, setOpenContextMenu] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useAppDispatch();

  const { isFocused, isMinimized } = useSelector((store: RootState) => {
    const app = store.apps.find((app) => app.name === appName);
    return app?.status!;
  });

  const handleClick = (e) => {
    e.stopPropagation();
    if (openContextMenu)setOpenContextMenu(false);
    if(isVisible) dispatch(minimizeApp(appName));
    else dispatch(focusApp(appName));
  };

  const handleContextMenuClick = (e) => {
    e.preventDefault();
    setOpenContextMenu(!openContextMenu);
  };

  const handleCloseApp = () => {
    dispatch(closeApp(appName));
  };

  useEffect(() => {
    dispatch(focusApp(appName));

    const eventCallback = () => dispatch(minimizeApp(appName));

    document.addEventListener("click", eventCallback);

    return () => {
      document.removeEventListener("click", eventCallback);
    };
  }, []);

  useEffect(() => {
    if (openContextMenu) {
      if(isVisible) dispatch(minimizeApp(appName));

      const eventCallback = () => setOpenContextMenu(false);

      document.addEventListener("click", eventCallback);

      return () => {
        document.removeEventListener("click", eventCallback);
      };
    }
  }, [openContextMenu]);

  useEffect(() => {
    if (isMinimized) setIsVisible(false);
    else setIsVisible(true);
  }, [isMinimized]);

  useEffect(() => {
    if (isFocused) setIsVisible(true);
    else setIsVisible(false);
  }, [isFocused]);

  return (
    <>
      <NotifWindow visible={isVisible} onClick={(e) => e.stopPropagation() }>
        <AppComponent name={appName} />
      </NotifWindow>

      <AppNotifButton
        onClick={handleClick}
        onContextMenu={handleContextMenuClick}
      >
        <ContextMenu isOpen={openContextMenu} handleCloseApp={handleCloseApp} />
        <AppNotifIcon name={appName} />
      </AppNotifButton>
    </>
  );
}
