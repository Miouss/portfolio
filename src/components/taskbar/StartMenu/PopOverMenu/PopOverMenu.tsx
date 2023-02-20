import {
  PopOverMenuContainer,
  PopOverMenuHeaderBox,
  PopOverMenuHeaderIcon,
  PopOverMenuHeaderLabel,
  PopOverMenuItem,
  PopOverMenuItemIcon,
  PopOverMenuItemLabel,
} from "../../../../styles";
import {
  LockIcon,
  PopOverMenuIcon,
  SignoutIcon,
  langs
} from "../../../../assets";
import { useEffect, useState } from "react";

import {useLangContext, useIsLoggedContext} from "../../../../hooks";

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

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, lock?: "lock") => {
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
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          e.stopPropagation();
          setDisplayAction(!displayAction);
        }}
        onMouseEnter={handleMouseEnter}
      >
        <PopOverMenuHeaderIcon>
          <PopOverMenuIcon />
        </PopOverMenuHeaderIcon>
        <PopOverMenuHeaderLabel>
          {langs[lang].actions.start}
        </PopOverMenuHeaderLabel>
      </PopOverMenuHeaderBox>
      <PopOverMenuItem
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleClick(e, "lock")}
        onMouseEnter={handleMouseEnter}
      >
        <PopOverMenuItemIcon>
          <LockIcon />
        </PopOverMenuItemIcon>
        <PopOverMenuItemLabel>
          {langs[lang].actions.lock}
        </PopOverMenuItemLabel>
      </PopOverMenuItem>
      <PopOverMenuItem onClick={handleClick} onMouseEnter={handleMouseEnter}>
        <PopOverMenuItemIcon>
          <SignoutIcon />
        </PopOverMenuItemIcon>
        <PopOverMenuItemLabel>
          {langs[lang].actions.logout}
        </PopOverMenuItemLabel>
      </PopOverMenuItem>
    </PopOverMenuContainer>
  );
}
