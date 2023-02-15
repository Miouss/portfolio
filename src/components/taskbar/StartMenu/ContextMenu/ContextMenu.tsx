import { ContextMenuPop, MenuList, MenuItem } from "./style";

import languages from "../../../../assets/languages/languages.json";
import useLangContext from "../../../../hooks/useLangContext";
import useIsLoggedContext from "../../../../hooks/useIsLoggedContext";

export default function ContextMenu({
  mousePosition,
}: {
  mousePosition: { x: number; y: number };
}) {
  const { lang } = useLangContext();
  const { setIsLogged } = useIsLoggedContext();

  return (
    <ContextMenuPop
      mouseX={mousePosition.x}
      mouseY={mousePosition.y}
      onMouseDown={(e) => e.stopPropagation()}
    >
      <MenuList>
        <MenuItem onClick={() => setIsLogged(false)}>
          {languages[lang].actions.logout}
        </MenuItem>
        <MenuItem onClick={() => setIsLogged("lock")}>
          {languages[lang].actions.lock}
        </MenuItem>
      </MenuList>
    </ContextMenuPop>
  );
}
