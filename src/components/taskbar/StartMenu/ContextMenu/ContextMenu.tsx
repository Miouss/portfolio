import { ContextMenuPop, MenuList, MenuItem } from "./style";
import { LoginDispathContext } from "../../../App";
import { useContext } from "react";


import languages from "../../../../assets/languages/languages.json";
import { LanguageStateContext } from "../../../App";

export default function ContextMenu({
  mousePosition,
}: {
  setDisplayContextMenu: (value: boolean) => void;
  mousePosition: { x: number; y: number };
}) {
  const lang = useContext(LanguageStateContext);
  const LoginDispatchContext = useContext(LoginDispathContext);

  return (
    <ContextMenuPop onClick={(e) => e.stopPropagation()} mouseX={mousePosition.x} mouseY={mousePosition.y}>
      <MenuList>
        <MenuItem>{languages[lang].actions.desktop}</MenuItem>
        <MenuItem onClick={() => LoginDispatchContext(false)}>{languages[lang].actions.logout}</MenuItem>
        <MenuItem onClick={() => LoginDispatchContext("lock")}>{languages[lang].actions.lock}</MenuItem>
      </MenuList>
    </ContextMenuPop>
  );
}
