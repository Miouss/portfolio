import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import {
  RootState,
  focusApp,
  toggleFullscreenApp,
  useAppDispatch,
} from "../../../../redux";
import useWindowMovingEffect from "../../hooks/useWindowMovingEffect";
import {
  MovableBarContainer,
  MovableBarIcon,
  MovableBarTitle,
} from "./style";
import { AppWindowIcon } from "./Contents/list";
import BarButtonGroup from "./MovableBar/BarButtonGroup";

interface Props {
  appName: string;
}

export default function MovableBar({ appName }: Props) {
  const dispatch = useAppDispatch();
  const windowBarRef = useRef<HTMLDivElement>() as any;
  const [mouseIsPressed, setMouseIsPressed] = useState<boolean>(false);

  const isFullscreen = useSelector(
    (store: RootState) =>
      store.apps.find((app) => app.name === appName)!.status.isFullscreen
  );

  const handlePointerDown = (event) => {
    event.stopPropagation();
    dispatch(focusApp(appName));
    setMouseIsPressed(true);
  };

  useWindowMovingEffect(
    windowBarRef.current,
    mouseIsPressed,
    setMouseIsPressed,
    isFullscreen
  );

  return (
    <MovableBarContainer
      ref={windowBarRef}
      style={{ cursor: "default" }}
      onPointerDown={(event) => handlePointerDown(event)}
      onDoubleClick={(event) => {
        event.stopPropagation();
        dispatch(toggleFullscreenApp(appName));
        setMouseIsPressed(false);
      }}
    >
      <MovableBarIcon>
        <AppWindowIcon name={appName} />
      </MovableBarIcon>
      <MovableBarTitle>{appName}</MovableBarTitle>

      <BarButtonGroup
        appName={appName}
        refAppWindow={windowBarRef.current?.offsetParent}
      />
    </MovableBarContainer>
  );
}
