import { StartMenuContainer, WindowsIconBox } from "../../styles";
import { WindowsIcon } from "../../assets";
import { useRef, useState } from "react";
import ContextMenu from "./TaskbarStartMenuContextMenu";
import PopOverMenu from "./TaskbarStartMenuPopOverMenu";
import {
  useOpenOnLeftClick,
  useCloseOnClickAway,
  useCloseOnClick,
  useOpenContextMenuOnRightClick,
  useCloseOnPointerDown,
} from "../../hooks";
import { UndefinedBoolean } from "../../types";

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

  useCloseOnPointerDown(displayContextMenu, setDisplayContextMenu);

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
