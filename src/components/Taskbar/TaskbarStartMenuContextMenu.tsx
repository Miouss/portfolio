import { TaskbarContextMenuPop, MenuList, MenuItem } from "../../styles";

import { useLangContext, useIsLoggedContext } from "../../hooks";

export default function ContextMenu({
  mousePosition,
}: {
  mousePosition: { x: number; y: number };
}) {
  const { lang } = useLangContext();
  const { setIsLogged } = useIsLoggedContext();

  return (
    <TaskbarContextMenuPop
      mouseX={mousePosition.x}
      mouseY={mousePosition.y}
      onMouseDown={(e: React.MouseEvent) => e.stopPropagation()}
    >
      <MenuList>
        <MenuItem onClick={() => setIsLogged(false)}>
          {lang.actions.logout}
        </MenuItem>
        <MenuItem onClick={() => setIsLogged("lock")}>
          {lang.actions.lock}
        </MenuItem>
      </MenuList>
    </TaskbarContextMenuPop>
  );
}
