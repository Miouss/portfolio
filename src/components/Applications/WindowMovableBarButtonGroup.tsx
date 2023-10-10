import { useState } from "react";
import { minimizeApp, toggleFullscreenApp, useAppDispatch } from "../../redux";
import {
  BarButtonGroupContainer,
  Button,
  CloseButtonContainer,
} from "../../styles";
import { useAppStatus } from "../../hooks";

import {
  MinimizeIcon,
  CloseIcon,
  FullscreenIcon,
  FullscreenExitIcon,
} from "../../assets";
import { Animation } from "./Window";

interface Props {
  appName: string;
  windowEl: HTMLDivElement | undefined;
}

export default function BarButtonGroup({ appName, windowEl }: Props) {
  const { isFullscreen } = useAppStatus(appName);

  const dispatch = useAppDispatch();

  const stopPropagation = (e: React.PointerEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const handleAnimation = () => {
    if (!windowEl) return;

    windowEl.style.animation = `${Animation.DESPAWN} 0.15s ease-out forwards`;
  };

  return (
    <BarButtonGroupContainer
      color="inherit"
      onPointerEnter={stopPropagation}
      onPointerDown={stopPropagation}
      onDoubleClick={stopPropagation}
    >
      <Button onClick={() => dispatch(minimizeApp(appName))}>
        <MinimizeIcon />
      </Button>
      <Button onClick={() => dispatch(toggleFullscreenApp(appName))}>
        {isFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
      </Button>
      <CloseButtonContainer onClick={handleAnimation}>
        <CloseIcon />
      </CloseButtonContainer>
    </BarButtonGroupContainer>
  );
}
