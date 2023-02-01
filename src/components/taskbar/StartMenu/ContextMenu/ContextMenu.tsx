import { ContextMenuPop, MenuList, MenuItem } from "./style";
import { LoginDispathContext } from "../../../App";
import { useContext } from "react";

export default function ContextMenu({
  mousePosition,
}: {
  setDisplayContextMenu: (value: boolean) => void;
  mousePosition: { x: number; y: number };
}) {
  const LoginDispatchContext = useContext(LoginDispathContext);

  return (
    <ContextMenuPop onClick={(e) => e.stopPropagation()} mouseX={mousePosition.x} mouseY={mousePosition.y}>
      <MenuList>
        <MenuItem>Desktop</MenuItem>
        <MenuItem onClick={() => LoginDispatchContext(false)}>Signout</MenuItem>
      </MenuList>
    </ContextMenuPop>
  );
}
