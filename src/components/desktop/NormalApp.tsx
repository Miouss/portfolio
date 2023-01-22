import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState, focusApp, openApp, useAppDispatch } from "../../redux";
import { AppIcon } from "../apps/collection/Collection";
import simulateAppLoading from "./utils/simulateAppLoading";
import handlePointerEvent from "./utils/handlePointerEvent";
import { AppStyle } from "./AppGrid";

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

  const [appStyle, setAppStyle] = useState<AppStyle>({});

  const handleDbCLick = () => {
    if (isRunning) dispatch(focusApp(appName));
    else {
      simulateAppLoading(setAppStyle);
      dispatch(openApp(appName));
    }
  };

  return (
    <div
      className="desktop-app"
      style={{ ...appStyle, gridArea }}
      onPointerEnter={(event) => handlePointerEvent(event, setAppStyle)}
      onPointerLeave={(event) => handlePointerEvent(event, setAppStyle)}
      onClick={(event) => handlePointerEvent(event, setAppStyle)}
      onDoubleClick={handleDbCLick}
    >
      <span style={{ fontSize: "4rem" }}>
        <AppIcon appName={appName} />
      </span>
      <div>{appName}</div>
    </div>
  );
}
