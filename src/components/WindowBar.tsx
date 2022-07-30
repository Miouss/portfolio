/* eslint-disable react-hooks/exhaustive-deps */
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

import CloseIcon from "@mui/icons-material/Close";
import CropFreeIcon from "@mui/icons-material/CropFree";
import MinimizeIcon from "@mui/icons-material/Minimize";

import "../styles/WindowBar.css";

import { ReactElement, useState } from "react";

interface Props {
  windowTitle: string;
  setCloseApp: (param: string | null) => void;
  componentKey: string;
  handleMousePressed: (event: React.MouseEvent<HTMLDivElement>) => void;
  appIcon: ReactElement;
}

function WindowBar({
  windowTitle,
  setCloseApp,
  componentKey,
  handleMousePressed,
  appIcon,
}: Props) {
  let [closeButtonColor, changeCloseButtonColor] = useState<string>("black");
  let [bgColor, changeBgColor] = useState<string>("initial");

  return (
    <div className="window-bar">
      {appIcon}
      <Typography 
        style={{flexGrow : 1}}
        onMouseDown={handleMousePressed}
        onMouseUp={handleMousePressed}
      >
        {windowTitle}
      </Typography>

      <ButtonGroup variant="outlined" color="inherit">
        <Button>
          <MinimizeIcon />
        </Button>
        <Button>
          <CropFreeIcon />
        </Button >
        <Button style={{ backgroundColor: bgColor}}
          onClick={() => setCloseApp(componentKey)}
          onMouseOver={() => {
            changeBgColor("red"); changeCloseButtonColor("white")
          }}
          onMouseLeave={() => {
            changeBgColor("initial"); changeCloseButtonColor("initial") 
          }}
        >
          <CloseIcon style={{ color: closeButtonColor }} />
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default WindowBar;
