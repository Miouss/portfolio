import { useState } from "react";
import {
  minimizeApp,
  toggleFullscreenApp,
  useAppDispatch,
} from "../../../../redux";
import { BarButtonGroupContainer, Button, CloseButtonContainer } from "./style";
import useAppStatus from "../../../../hooks/Store/useAppStatus";

import {
  MinimizeIcon,
  CloseIcon,
  FullscreenIcon,
  FullscreenExitIcon,
} from "../../../../assets/icons/icons";

interface Props {
  appName: string;
  refAppWindow: HTMLDivElement;
}

export default function BarButtonGroup({ appName, refAppWindow }: Props) {
  const [pointerWasDown, setPointerWasDown] = useState<boolean>(false);
  const { isFullscreen } = useAppStatus(appName);

  const dispatch = useAppDispatch();

  const handlePointerEvent = (event) => {
    if (event === "pointerEnter") {
      return event.type === 1
        ? setPointerWasDown(true)
        : setPointerWasDown(false);
    }

    if (!pointerWasDown) return event.stopPropagation();
  };

  return (
    <BarButtonGroupContainer
      color="inherit"
      onPointerEnter={(event) => handlePointerEvent(event)}
      onPointerDown={(event) => handlePointerEvent(event)}
      onDoubleClick={(event) => event.stopPropagation()}
    >
      <Button onClick={() => dispatch(minimizeApp(appName))}>
        <MinimizeIcon />
      </Button>
      <Button onClick={() => dispatch(toggleFullscreenApp(appName))}>
        {isFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
      </Button>
      <CloseButtonContainer
        onClick={() => {
          refAppWindow.style.animation =
            "despawnWindow 0.15s ease-out forwards";
        }}
      >
        <CloseIcon />
      </CloseButtonContainer>
    </BarButtonGroupContainer>
  );
}
