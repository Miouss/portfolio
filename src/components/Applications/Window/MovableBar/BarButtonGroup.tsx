import { useState } from "react";
import {
  minimizeApp,
  toggleFullscreenApp,
  useAppDispatch,
} from "../../../../redux";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CropFreeIcon from "@mui/icons-material/CropFree";
import MinimizeIcon from "@mui/icons-material/Minimize";
import { BarButtonGroupContainer, CloseButtonContainer } from "./style";

interface Props {
  appName: string;
  refAppWindow: HTMLDivElement;
}

export default function BarButtonGroup({ appName, refAppWindow }: Props) {
  const [pointerWasDown, setPointerWasDown] = useState<boolean>(false);

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
      variant="outlined"
      color="inherit"
      onPointerEnter={(event) => handlePointerEvent(event)}
      onPointerDown={(event) => handlePointerEvent(event)}
      onDoubleClick={(event) => event.stopPropagation()}
    >
      <Button onClick={() => dispatch(minimizeApp(appName))}>
        <MinimizeIcon />
      </Button>
      <Button onClick={() => dispatch(toggleFullscreenApp(appName))}>
        <CropFreeIcon />
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
