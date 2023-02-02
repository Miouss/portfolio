import { StartMenuBox } from "./style";
import { WindowsIcon } from "../../../assets/icons/icons";
import { useEffect, useState } from "react";
import ContextMenu from "./ContextMenu/ContextMenu";
import PopOverMenu from "./PopOverMenu/PopOverMenu";
import useCloseOnClickAwayEffect from "../../../hooks/useCloseOnClickAwayEffect";

export default function StartMenu() {
  const [color, setColor] = useState("white");

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [displayContextMenu, setDisplayContextMenu] = useState<boolean | undefined>(false);
  const [displayPopOverMenu, setDisplayPopOverMenu] = useState<boolean | undefined>(false);

  const openPopOverMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setDisplayPopOverMenu(!displayPopOverMenu);
  };

  const openContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setMousePosition({ x: e.pageX, y: e.pageY });
    setDisplayContextMenu(true);
  };

  useEffect(() => {
    if (!displayContextMenu) return;
    setDisplayPopOverMenu(false);
    setColor("dodgerblue");

    return () => {
      setColor("white");
    };
  }, [displayContextMenu]);

  useEffect(() => {
    if (!displayPopOverMenu) return;
    setDisplayContextMenu(false);
  }, [displayPopOverMenu]);

  useCloseOnClickAwayEffect(displayContextMenu, setDisplayContextMenu);
  useCloseOnClickAwayEffect(displayPopOverMenu, setDisplayPopOverMenu);

  return (
    <StartMenuBox
      popOverMenuDisplayed={displayPopOverMenu}
      onClick={openPopOverMenu}
      rightclick={displayContextMenu}
      onMouseEnter={() => setColor("dodgerblue")}
      onMouseLeave={() => {
        !displayContextMenu && setColor("white");
      }}
      onContextMenu={(e) => openContextMenu(e)}
    >
      {displayPopOverMenu && <PopOverMenu />}
      {displayContextMenu && (
        <ContextMenu
          setDisplayContextMenu={setDisplayContextMenu}
          mousePosition={mousePosition}
        />
      )}
      <WindowsIcon color={color} />
    </StartMenuBox>
  );
}
