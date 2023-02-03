import { StartMenuContainer, WindowsIconBox } from "./style";
import { WindowsIcon } from "../../../assets/icons/icons";
import { useRef, useState } from "react";
import ContextMenu from "./ContextMenu/ContextMenu";
import PopOverMenu from "./PopOverMenu/PopOverMenu";
import useOpenOnLeftClick from "../../../hooks/MouseEvents/useOpenOnLeftClick";
import useCloseOnClickAway from "../../../hooks/MouseEvents/useCloseOnClickAway";
import useCloseOnClick from "../../../hooks/MouseEvents/useCloseOnClick";
import useOpenContextMenuOnRightClick from "../../../hooks/MouseEvents/useOpenContextMenuOnRightClick";
import { UndefinedBoolean } from "../../../types/types";

export default function StartMenu() {
  const startMenuContainerRef = useRef<HTMLDivElement>(null);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [displayContextMenu, setDisplayContextMenu] =
    useState<UndefinedBoolean>(false);
  const [displayPopOverMenu, setDisplayPopOverMenu] =
    useState<UndefinedBoolean>(undefined);

  useOpenOnLeftClick(
    startMenuContainerRef,
    displayPopOverMenu,
    setDisplayPopOverMenu
  );
  useCloseOnClick(
    startMenuContainerRef,
    displayPopOverMenu,
    setDisplayPopOverMenu
  );
  useCloseOnClickAway(displayPopOverMenu, setDisplayPopOverMenu);

  useOpenContextMenuOnRightClick(
    startMenuContainerRef,
    displayContextMenu,
    setDisplayContextMenu,
    setMousePosition
  );
  useCloseOnClick(
    startMenuContainerRef,
    displayContextMenu,
    setDisplayContextMenu
  );
  useCloseOnClickAway(displayContextMenu, setDisplayContextMenu);

  return (
    <>
      {displayContextMenu && <ContextMenu mousePosition={mousePosition} />}

      <StartMenuContainer
        ref={startMenuContainerRef}
        popOverMenuDisplayed={displayPopOverMenu}
        rightclick={displayContextMenu}
      >
        <PopOverMenu displayPopOverMenu={displayPopOverMenu} />

        <WindowsIconBox>
          <WindowsIcon />
        </WindowsIconBox>
      </StartMenuContainer>
    </>
  );
}
