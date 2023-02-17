import { useState } from "react";
import { focusApp, openApp, useAppDispatch } from "../../../redux";
import {
  AppDesktopIcon,
  getAppGridPostion,
} from "../../Applications/Window/Contents/list";
import {
  BackgroundColorLayer,
  GridAppContainer,
  GridAppIcon,
  GridAppLabel,
} from "../../../styles";
import { useAppStatus } from "../../../hooks";

interface Props {
  appName: string;
}

export default function NormalApp({ appName }: Props) {
  const dispatch = useAppDispatch();
  const { isRunning } = useAppStatus(appName);

  const [click, setClick] = useState(false);
  const [cursor, setCursor] = useState<"default" | "progress">("default");

  const handleDbCLick = () => {
    if (isRunning) return dispatch(focusApp(appName));

    setCursor("progress");
    setTimeout(() => {
      setCursor("default");
      dispatch(openApp(appName));
    }, 300);
  };

  const handleClick = () => {
    setClick(true);

    document.onpointerdown = () => {
      setClick(false);
      document.onpointerdown = null;
    };
  };

  const gridPosition = getAppGridPostion(appName);

  return (
    <GridAppContainer
      click={click}
      cursor={cursor}
      onClick={handleClick}
      onDoubleClick={handleDbCLick}
      style={{
        gridColumn: gridPosition.column,
        gridRow: gridPosition.row,
      }}
    >
      <BackgroundColorLayer click={click} />
      <GridAppIcon>
        <AppDesktopIcon name={appName} />
      </GridAppIcon>
      <GridAppLabel>{appName}</GridAppLabel>
    </GridAppContainer>
  );
}
