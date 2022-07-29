/* eslint-disable react-hooks/exhaustive-deps */

import CloseIcon from '@mui/icons-material/Close';
import CropFreeIcon from '@mui/icons-material/CropFree';
import MinimizeIcon from '@mui/icons-material/Minimize';

import "../styles/WindowBar.css";

import { ReactElement, useState } from "react";

interface Props {
  windowTitle: string,
  setCloseApp: (param: string | null) => void,
  componentKey: string,
  handleMousePressed: (event: React.MouseEvent<HTMLDivElement>) => void,
  appIcon : ReactElement
}

function WindowBar({ windowTitle, setCloseApp, componentKey, handleMousePressed, appIcon }: Props) {
  let [closeButtonColor, changeCloseButtonColor] = useState<string>("black");

  return (
    <div className="window-bar">
      <div className="window-bar-app-icon">
        {appIcon}
      </div>
      <div
        className="window-bar-title"
        onMouseDown={handleMousePressed}
        onMouseUp={handleMousePressed}
      >
        {windowTitle}
      </div>
      <div className="window-bar-functionnal-icons">
        <div className="minimize-button">
          <MinimizeIcon />
        </div>
        <div className="resize-button">
          <CropFreeIcon />
        </div>
        <div
          className="close-button"
          onMouseOver={() => changeCloseButtonColor("white")}
          onMouseLeave={() => changeCloseButtonColor("black")}
          onClick={() => setCloseApp(componentKey)}
        >
          <CloseIcon sx={{color: closeButtonColor}} />
        </div>
      </div>
    </div>
  );
}

export default WindowBar;
