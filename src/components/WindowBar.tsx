/* eslint-disable react-hooks/exhaustive-deps */

import "../styles/WindowBar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useState } from "react";

type Props = {
  windowTitle: string;
  setCloseApp: (param: boolean) => void;
  handleMousePressed: (event: React.MouseEvent<HTMLDivElement>) => void;
};

function WindowBar({
  windowTitle,
  setCloseApp,
  handleMousePressed,
}: Props) {
  let [closeButtonColor, changeCloseButtonColor] = useState<string>("black");

  return (
    <>
      <div className="window-bar">
        <div className="window-bar-app-icon">
          <FontAwesomeIcon icon="terminal" />
        </div>
        <div className="window-bar-title" onMouseDown={handleMousePressed}  onMouseUp={handleMousePressed}>{windowTitle}</div>
        <div className="window-bar-functionnal-icons">
          <div className="minimize-button">
            <FontAwesomeIcon icon="window-minimize" />
          </div>
          <div className="resize-button">
            <FontAwesomeIcon icon="maximize" />
          </div>
          <div
            className="close-button"
            onMouseOver={() => changeCloseButtonColor("white")}
            onMouseLeave={() => changeCloseButtonColor("black")}
            onClick={() => setCloseApp(true)}
          >
            <FontAwesomeIcon icon="xmark" color={closeButtonColor} />
          </div>
        </div>
      </div>
    </>
  );
}

export default WindowBar;
