import "../styles/WindowBar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTerminal,
  faXmark,
  faWindowMinimize,
  faMaximize,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function WindowBar(props: any) {

    const {windowTitle} = props;

  let [closeButtonColor, changeCloseButtonColor] = useState<string>("black");

  return (
    <>
      <div className="window-bar">
        <div className="window-bar-app-icon">
          <FontAwesomeIcon icon={faTerminal} />
        </div>
        <div className="window-bar-title">{windowTitle}</div>
        <div className="window-bar-functionnal-icons">
          <div className="minimize-button">
            <FontAwesomeIcon icon={faWindowMinimize} />
          </div>
          <div className="resize-button">
            <FontAwesomeIcon icon={faMaximize} />
          </div>
          <div
            className="close-button"
            onMouseOver={() => changeCloseButtonColor("white")}
            onMouseLeave={() => changeCloseButtonColor("black")}
          >
            <FontAwesomeIcon icon={faXmark} color={closeButtonColor} />
          </div>
        </div>
      </div>
    </>
  );
}

export default WindowBar;
