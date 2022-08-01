/* eslint-disable react-hooks/exhaustive-deps */
import "../styles/WindowApp.css";
import WindowBar from "./WindowBar";

import { createRef, forwardRef, ReactElement, useEffect, useRef, useState } from "react";
import { focusApp, RootState, useAppDispatch } from "../redux";
import { useSelector } from "react-redux";

interface Props {
  appName: string;
  contentComponent: ReactElement;
}

function WindowApp({ appName, contentComponent }: Props) {
  const isFocused = useSelector(
    (state: RootState) => state.apps[appName].isFocused
  );
  const dispatch = useAppDispatch();

  const [zIndexValue, setZIndexValue] = useState<string>("1");

  const windowAppContainer = useRef(null);

  useEffect(() => {
    if (isFocused) {
      setZIndexValue("2");
    } else {
      setZIndexValue("1");
    }
  }, [isFocused]);

  useEffect(() => {
    dispatch(focusApp(appName));
  }, []);

  return (
    <div
      ref={windowAppContainer}
      className="window-app"
      tabIndex={-1}
      onFocus={() => {
        dispatch(focusApp(appName));
      }}
      style={{
        zIndex: zIndexValue,
      }}
    >
      <WindowBar  appName={appName} windowAppContainer={windowAppContainer.current} />
      {contentComponent}
    </div>
  );
}

export default WindowApp;
