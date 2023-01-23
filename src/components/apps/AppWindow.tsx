/* eslint-disable react-hooks/exhaustive-deps */
import Window from "./AppWindow/Window";
import MovableBar from "./AppWindow/Window/MovableBar";
import Content from "./AppWindow/Window/Content";


import { useEffect } from "react";
import { focusApp, useAppDispatch } from "../../redux";

interface Props {
  appName: string;
}

export default function AppWindow({ appName }: Props) {
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

      <Content appName={appName} />
    </Window>
  );
}
