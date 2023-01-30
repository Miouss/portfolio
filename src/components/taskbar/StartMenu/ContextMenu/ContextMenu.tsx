import { ContextMenuPop, MenuList, MenuItem } from "./style";
import { LoginDispathContext } from "../../../App";
import { useContext } from "react";

export default function ContextMenu({
  displayContextMenu,
  mousePosition,
}: {
  displayContextMenu: boolean
  setDisplayContextMenu: (value: boolean) => void;
  mousePosition: { x: number; y: number };
}) {
  const LoginDispatchContext = useContext(LoginDispathContext);

  if (displayContextMenu) {
    return (
      <ContextMenuPop mouseX={mousePosition.x} mouseY={mousePosition.y}>
        <MenuList>
          <MenuItem>Desktop</MenuItem>
          <MenuItem onClick={() => LoginDispatchContext(false)}>
            Signout
          </MenuItem>
        </MenuList>
      </ContextMenuPop>
    );
  }

  return null;
}
