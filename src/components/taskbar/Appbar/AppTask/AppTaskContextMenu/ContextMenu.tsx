import { MenuList, MenuItem, Popper } from "@mui/material";
import { ClickAwayListener } from "@mui/base";
import { closeApp, minimizeApp, useAppDispatch } from "../../../../../redux";

import CloseIcon from "@mui/icons-material/Close";
import MinimizeIcon from "@mui/icons-material/Minimize";

export default function ContextMenu({ anchorEl, setAnchorEl, appName }) {
  const dispatch = useAppDispatch();

  const onOverBgColor = "rgba(100,100,100, 0.5)";
  const defaultBgColor = "initial";

  const handleClick = (action: string) => {
    dispatch(action === "close" ? closeApp(appName) : minimizeApp(appName));
    setAnchorEl(null);
  };

  const handlePointerOver = (event) => {
    event.target.style.backgroundColor =
      event.type === "pointerover" ? onOverBgColor : defaultBgColor;
  };

  return (
    <Popper
      open={!!anchorEl}
      anchorEl={anchorEl}
      nonce={undefined}
      onResize={undefined}
      onResizeCapture={undefined}
    >
      <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
        <MenuList>
          <MenuItem
            onClick={() => handleClick("minimize")}
            onPointerOver={(event) => handlePointerOver(event)}
            onPointerOut={(event) => handlePointerOver(event)}
          >
            <MinimizeIcon /> Minimiser
          </MenuItem>
          <MenuItem
            onClick={() => handleClick("close")}
            onPointerOver={(event) => handlePointerOver(event)}
            onPointerOut={(event) => handlePointerOver(event)}
          >
            <CloseIcon /> Fermer
          </MenuItem>
        </MenuList>
      </ClickAwayListener>
    </Popper>
  );
}