import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState, focusApp, openApp, useAppDispatch } from "../../../redux";
import { AppDesktopIcon } from "../../Applications/AppWindow/Window/Contents/list";
import {
  BackgroundColorLayer,
  GridAppContainer,
  GridAppIcon,
  GridAppLabel,
} from "./style";

interface Props {
  appName: string;
}

export default function NormalApp({ appName }: Props) {
  const dispatch = useAppDispatch();
  const isRunning = useSelector((state: RootState) => {
    const app = state.apps.find((app) => app.name === appName);

    return app?.status.isRunning;
  });

  const [click, setClick] = useState(false);
  const [cursor, setCursor] = useState<"default" | "progress">("default");

  const handleDbCLick = () => {
    if (isRunning) dispatch(focusApp(appName));
    else {
      setCursor("progress");
      setTimeout(() => {
        setCursor("default");
        dispatch(openApp(appName));
      }, 300);
    }
  };

  const handleClick = () => {
    setClick(true);

    document.onpointerdown = () => {
      setClick(false);
      document.onpointerdown = null;
    };
  };

  return (
    <GridAppContainer
      click={click}
      cursor={cursor}
      onClick={handleClick}
      onDoubleClick={handleDbCLick}
    >
      <BackgroundColorLayer click={click} />
      <GridAppIcon style={{ fontSize: "4rem" }}>
        <AppDesktopIcon name={appName} /> 
      </GridAppIcon>
      <GridAppLabel>{appName}</GridAppLabel>
    </GridAppContainer>
  );
}
