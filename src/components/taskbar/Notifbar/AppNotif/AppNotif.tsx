/* eslint-disable react-hooks/exhaustive-deps */
import { Dispatch, SetStateAction, useEffect } from "react";
import { AppNotifButton } from "./AppNotifStyled";
import {
  AppComponent,
  AppNotifIcon,
} from "../../../apps/AppWindow/Window/Contents/list";
import { NotifWindow } from "../NotifbarStyled";
import { useSelector } from "react-redux";
import { RootState, focusApp, minimizeApp, useAppDispatch } from "../../../../redux";

interface Props {
  appName: string;
  setNotifWindowContent: Dispatch<SetStateAction<JSX.Element | null>>;
}
export default function AppNotif({ appName, setNotifWindowContent }: Props) {
  const dispatch = useAppDispatch();
  const notifWindow: JSX.Element = <NotifWindow><AppComponent name={appName} /></NotifWindow>;

  const {isMinimized, isFocused} = useSelector((store: RootState) => {
    const app = store.apps.find((app) => app.name === appName);
    return app?.status!;
  });

  const handleClick = () => {
    if(isMinimized) return dispatch(focusApp(appName));
    dispatch(minimizeApp(appName));
  };

  useEffect(() => {
    return () => setNotifWindowContent(null);
  }, []);

  useEffect(() => {
    if (isMinimized && !isFocused) return setNotifWindowContent(null);
    
    setNotifWindowContent((prevState: JSX.Element | null) => {
      if (prevState === notifWindow) return null;
      return notifWindow;
    }); 
  }, [isMinimized, isFocused]);

  return (
    <AppNotifButton onClick={handleClick}>
      <AppNotifIcon name={appName} />
    </AppNotifButton>
  );
}
