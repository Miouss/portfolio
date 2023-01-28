import { useState } from "react";
import {
  closeApp,
  minimizeApp,
  toggleFullscreenApp,
  useAppDispatch,
} from "../../../../../redux";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CropFreeIcon from "@mui/icons-material/CropFree";
import MinimizeIcon from "@mui/icons-material/Minimize";
import {
  BarButtonGroupContainer,
  CloseButtonContainer,
} from "../../../styled/BarButtonGroup";

interface Props {
  appName: string;
  refAppWindow: HTMLDivElement;
}

export default function BarButtonGroup({ appName, refAppWindow }: Props) {
  const [pointerWasDown, setPointerWasDown] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const handlePointerEvent = (event) => {
    if (event === "pointerEnter") {
      if (event.type === 1) {
        setPointerWasDown(true);
      } else {
        setPointerWasDown(false);
      }
    } else {
      if (!pointerWasDown) {
        event.stopPropagation();
      }
    }
  };
  console.log(refAppWindow);
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
