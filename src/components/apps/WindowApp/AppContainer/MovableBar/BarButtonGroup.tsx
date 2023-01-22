import { useState } from "react";
import {
  closeApp,
  minimizeApp,
  toggleFullscreenApp,
  useAppDispatch,
} from "../../../../../redux";
import { Button, ButtonGroup } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CropFreeIcon from "@mui/icons-material/CropFree";
import MinimizeIcon from "@mui/icons-material/Minimize";

interface Props {
  appName: string;
}

export default function BarButtonGroup({ appName }: Props) {
  const [pointerWasDown, setPointerWasDown] = useState<boolean>(false);

  const [closeButtonColor, setCloseButtonColor] = useState<string>("black");
  const [bgColor, setBgColor] = useState<string>("initial");

  const dispatch = useAppDispatch();

  const switchCloseButtonColor = (event) => {
    if (event.type === "mouseover") {
      setBgColor("red");
      setCloseButtonColor("white");
    } else {
      setBgColor("initial");
      setCloseButtonColor("initial");
    }
  };

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

  return (
    <ButtonGroup
      variant="outlined"
      color="inherit"
      onPointerEnter={(event) => handlePointerEvent(event)}
      onPointerDown={(event) => handlePointerEvent(event)}
    >
      <Button onClick={() => dispatch(minimizeApp(appName))}>
        <MinimizeIcon />
      </Button>
      <Button onClick={() => dispatch(toggleFullscreenApp(appName))}>
        <CropFreeIcon />
      </Button>
      <Button
        style={{ backgroundColor: bgColor }}
        onClick={() => dispatch(closeApp(appName))}
        onMouseOver={(event) => switchCloseButtonColor(event)}
        onMouseLeave={(event) => switchCloseButtonColor(event)}
      >
        <CloseIcon style={{ color: closeButtonColor }} />
      </Button>
    </ButtonGroup>
  );
}
