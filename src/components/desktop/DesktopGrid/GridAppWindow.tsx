import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState, focusApp, openApp, useAppDispatch } from "../../../redux";
import { AppIcon } from "../../apps/collection/Collection";
import {
  BackgroundColorLayer,
  GridAppContainer,
  GridAppIcon,
  GridAppLabel,
} from "../styled/GridApp";

interface Props {
  appName: string;
  gridArea: string;
}

export default function NormalApp({ appName, gridArea }: Props) {
  const dispatch = useAppDispatch();
  const isRunning = useSelector((state: RootState) => {
    const app = state.apps.find((app) => app.name === appName);

    return app?.status.isRunning;
  });

  const [clickEventHappened, setClickEventHappened] = useState(false);
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
    setClickEventHappened(true);

    document.onpointerdown = () => {
      setClickEventHappened(false);
      document.onpointerdown = null;
    };
  };

  return (
    <GridAppContainer
      clickEventHappened={clickEventHappened}
      cursor={cursor}
      className="desktop-app"
      style={{ gridArea }}
      onClick={handleClick}
      onDoubleClick={handleDbCLick}
    >
      <BackgroundColorLayer clickEventHappened={clickEventHappened} />
      <GridAppIcon style={{ fontSize: "4rem" }}>
        <AppIcon appName={appName} />
      </GridAppIcon>
      <GridAppLabel>{appName}</GridAppLabel>
    </GridAppContainer>
  );
}
