import { useState } from "react";
import {
  minimizeApp,
  toggleFullscreenApp,
  useAppDispatch,
} from "../../../../../redux";
import {
  BarButtonGroupContainer,
  Button,
  CloseButtonContainer,
} from "../../../../../styles";
import { useAppStatus } from "../../../../../hooks";

import {
  MinimizeIcon,
  CloseIcon,
  FullscreenIcon,
  FullscreenExitIcon,
} from "../../../../../assets";

interface Props {
  appName: string;
  refAppWindow: HTMLDivElement;
}

export default function BarButtonGroup({ appName, refAppWindow }: Props) {
  const [pointerWasDown, setPointerWasDown] = useState<boolean>(false);
  const { isFullscreen } = useAppStatus(appName);

  const dispatch = useAppDispatch();

  const handlePointerEvent = (e: React.PointerEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <BarButtonGroupContainer
      color="inherit"
      onPointerEnter={handlePointerEvent}
      onPointerDown={handlePointerEvent}
      onDoubleClick={handlePointerEvent}
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
