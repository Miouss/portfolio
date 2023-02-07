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
import { useEffect, useState } from "react";

import languages from "../../../../assets/languages/languages.json";
import useLangContext from "../../../../hooks/useLangContext";
import useIsLoggedContext from "../../../../hooks/useIsLoggedContext";

interface Props {
  displayPopOverMenu: boolean | undefined;
}

export default function PopOverMenu({ displayPopOverMenu }: Props) {
  const [displayAction, setDisplayAction] = useState(false);
  const [mouseOver, setMouseOver] = useState(false);
  const [mouseOverEnough, setMouseOverEnough] = useState(false);

  const { lang } = useLangContext();

  const { setIsLogged } = useIsLoggedContext();

  const handleMouseEnter = () => {
    setMouseOver(true);
  };

  const handleMouseLeave = () => {
    setMouseOver(false);
    setDisplayAction(false);
  };

  const handleClick = (e, lock?: "lock") => {
    e.stopPropagation();
    return displayAction ? setIsLogged(lock ?? false) : setDisplayAction(true);
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
      visible={displayPopOverMenu}
      wrapped={!displayAction}
      onMouseLeave={handleMouseLeave}
    >
      <PopOverMenuHeaderBox
        onClick={(e) => {
          e.stopPropagation();
          setDisplayAction(!displayAction);
        }}
        onMouseEnter={handleMouseEnter}
      >
        <PopOverMenuHeaderIcon>
          <PopOverMenuIcon />
        </PopOverMenuHeaderIcon>
        <PopOverMenuHeaderLabel>
          {languages[lang].actions.start}
        </PopOverMenuHeaderLabel>
      </PopOverMenuHeaderBox>
      <PopOverMenuItem
        onClick={(e) => handleClick(e, "lock")}
        onMouseEnter={handleMouseEnter}
      >
        <PopOverMenuItemIcon>
          <LockIcon />
        </PopOverMenuItemIcon>
        <PopOverMenuItemLabel>
          {languages[lang].actions.lock}
        </PopOverMenuItemLabel>
      </PopOverMenuItem>
      <PopOverMenuItem onClick={handleClick} onMouseEnter={handleMouseEnter}>
        <PopOverMenuItemIcon>
          <SignoutIcon />
        </PopOverMenuItemIcon>
        <PopOverMenuItemLabel>
          {languages[lang].actions.logout}
        </PopOverMenuItemLabel>
      </PopOverMenuItem>
    </PopOverMenuContainer>
  );
}
