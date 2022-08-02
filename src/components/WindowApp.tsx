/* eslint-disable react-hooks/exhaustive-deps */
import "../styles/WindowApp.css";
import WindowBar from "./WindowBar";

import { PointerEvent, ReactElement, useEffect, useRef, useState } from "react";
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

  const [cursor, setCursor] = useState<string>("default");
  const [zIndexValue, setZIndexValue] = useState<string>("1");

  const windowAppContainer = useRef<HTMLDivElement | null>(null);

  const switchCursor = (newCursor: string) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    cursor === newCursor ? null : setCursor(newCursor);
  }


  const handleMouseMove = (event: PointerEvent<HTMLDivElement>) => {
    const mouseOffset ={
      left: event.clientX - windowAppContainer.current!.offsetLeft,
      top: event.clientY - windowAppContainer.current!.offsetTop,
      bottom: windowAppContainer.current!.offsetHeight - (event.clientY - windowAppContainer.current!.offsetTop),
      right: windowAppContainer.current!.offsetWidth - (event.clientX - windowAppContainer.current!.offsetLeft),
    }

    if((mouseOffset.left < 10  && mouseOffset.bottom < 10) || (mouseOffset.right < 10 && mouseOffset.top < 10)){
      switchCursor("nesw-resize");
    }else if((mouseOffset.left < 10 && mouseOffset.top < 10) || (mouseOffset.right < 10 && mouseOffset.bottom < 10)){
      switchCursor("nwse-resize");
    }else if((mouseOffset.left < 10 && mouseOffset.top >= 10) || (mouseOffset.right < 10 && mouseOffset.bottom >= 10)){
      switchCursor("ew-resize");
    }else if((mouseOffset.left >= 10 && mouseOffset.top < 10)  || (mouseOffset.right >= 10 && mouseOffset.bottom < 10)){
      switchCursor("ns-resize");
    }else{
      switchCursor("default");
    }
  }

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
        cursor: cursor
      }}
      onPointerMove={(event) => handleMouseMove(event)}
    >
      <WindowBar  appName={appName} windowAppContainer={windowAppContainer.current} />
      {contentComponent}
    </div>
  );
}

export default WindowApp;
