import {
  PopOverMenuContainer,
  PopOverMenuHeaderBox,
  PopOverMenuHeaderIcon,
  PopOverMenuHeaderLabel,
  PopOverMenuItem,
  PopOverMenuItemIcon,
  PopOverMenuItemLabel,
} from "./style";
import {
  LockIcon,
  PopOverMenuIcon,
  SignoutIcon,
} from "../../../../assets/icons/icons";
import { useContext, useEffect, useState } from "react";

import { LoginDispathContext } from "../../../App";

export default function PopOverMenu() {
  const [displayAction, setDisplayAction] = useState(false);
  const [mouseOver, setMouseOver] = useState(false);
  const [mouseOverEnough, setMouseOverEnough] = useState(false);

  const setLoginContext = useContext(LoginDispathContext);

  const handleMouseEnter = () => {
    setMouseOver(true);
  };

  const handleMouseLeave = () => {
    setMouseOver(false);
    setDisplayAction(false);
  };

  const handleClick = (e) => {
    e.stopPropagation();
    return displayAction ? setLoginContext(false) : setDisplayAction(true);
  };

  useEffect(() => {
    if (mouseOver && !mouseOverEnough) {
      setTimeout(() => setMouseOverEnough(true), 400) as unknown;
      return;
    }
    if (mouseOver && mouseOverEnough) {
      setDisplayAction(true);
      return;
    }
    if (!mouseOver && mouseOverEnough) {
      setMouseOverEnough(false);
      return;
    }
  }, [mouseOver, mouseOverEnough]);

  return (
    <PopOverMenuContainer
      wrapped={!displayAction}
      onMouseLeave={handleMouseLeave}
      onAnimationStart={(e) => {
        e.currentTarget.onclick = (e) => {
          e.stopPropagation();
        };
      }}
      onAnimationEnd={(e) => {
        setTimeout(() => {
          e.currentTarget.onclick = null;
        }, 400);
      }}
    >
      <PopOverMenuHeaderBox
        onClick={() => setDisplayAction(!displayAction)}
        onMouseEnter={handleMouseEnter}
      >
        <PopOverMenuHeaderIcon>
          <PopOverMenuIcon />
        </PopOverMenuHeaderIcon>
        <PopOverMenuHeaderLabel>Start</PopOverMenuHeaderLabel>
      </PopOverMenuHeaderBox>
      <PopOverMenuItem onClick={handleClick} onMouseEnter={handleMouseEnter}>
        <PopOverMenuItemIcon>
          <LockIcon />
        </PopOverMenuItemIcon>
        <PopOverMenuItemLabel>Verrouiller</PopOverMenuItemLabel>
      </PopOverMenuItem>
      <PopOverMenuItem onClick={handleClick} onMouseEnter={handleMouseEnter}>
        <PopOverMenuItemIcon>
          <SignoutIcon />
        </PopOverMenuItemIcon>
        <PopOverMenuItemLabel>Se déconnecter</PopOverMenuItemLabel>
      </PopOverMenuItem>
    </PopOverMenuContainer>
  );
}
