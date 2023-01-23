/* eslint-disable react-hooks/exhaustive-deps */
import Window from "./AppWindow/Window";
import MovableBar from "./AppWindow/Window/MovableBar";

import { ReactElement, useEffect } from "react";
import { focusApp, useAppDispatch } from "../../redux";

interface Props {
  appName: string;
  contentComponent: ReactElement;
}

export default function AppWindow({ appName, contentComponent }: Props) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(focusApp(appName));
  }, []);

  return (
    <Window
      appName={appName}
      minWidth={800}
      minHeight={400}
    >
      <MovableBar appName={appName} />

      {contentComponent}
    </Window>
  );
}
