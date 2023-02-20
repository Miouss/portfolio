/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import {
  AppComponent,
  AppNotifIcon,
} from "../../../Applications/Window/Contents/list";
import { NotifWindow, AppNotifButton } from "../../../../styles";
import {
  closeApp,
  focusApp,
  minimizeApp,
  useAppDispatch,
} from "../../../../redux";
import ContextMenu from "./ContextMenu/ContextMenu";
import { UndefinedBoolean } from "../../../../types";
import { useAppStatus } from "../../../../hooks";

interface Props {
  appName: string;
}
export default function AppNotif({ appName }: Props) {
  const [openContextMenu, setOpenContextMenu] =
    useState<UndefinedBoolean>(false);
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useAppDispatch();

  const { isFocused, isMinimized } = useAppStatus(appName);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    if (openContextMenu) setOpenContextMenu(false);
    if (isVisible) dispatch(minimizeApp(appName));
    else dispatch(focusApp(appName));
  };

  const handleContextMenuClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
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
      if (isVisible) dispatch(minimizeApp(appName));

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
      <NotifWindow visible={isVisible} onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation()}>
        <AppComponent name={appName} />
      </NotifWindow>

      <AppNotifButton
        onClick={handleClick}
        onContextMenu={handleContextMenuClick}
      >
        <ContextMenu
          visible={openContextMenu}
          handleCloseApp={handleCloseApp}
        />
        <AppNotifIcon name={appName} />
      </AppNotifButton>
    </>
  );
}
