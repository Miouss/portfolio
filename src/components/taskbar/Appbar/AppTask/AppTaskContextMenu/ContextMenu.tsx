import { MenuList, MenuItem, Popper } from "@mui/material";
import { ClickAwayListener } from "@mui/base";
import { closeApp, minimizeApp, useAppDispatch } from "../../../../../redux";

import CloseIcon from "@mui/icons-material/Close";
import MinimizeIcon from "@mui/icons-material/Minimize";

import languages from "../../../../../assets/languages/languages.json";
import useLangContext from "../../../../../hooks/useLangContext";

export default function ContextMenu({ anchorEl, setAnchorEl, appName }) {
  const { lang } = useLangContext();
  const dispatch = useAppDispatch();

  const onOverBgColor = "rgba(255,255,255, 0.4)";
  const defaultBgColor = "initial";

  const handleClick = (action: string) => {
    dispatch(action === "close" ? closeApp(appName) : minimizeApp(appName));
    setAnchorEl(null);
  };

  const handlePointerOver = (event) => {
    event.target.style.backgroundColor =
      event.type === "pointerover" ? onOverBgColor : defaultBgColor;
  };

  const itemListStyle = {
    display: "flex",
    width: "140px",
    gap: "10px",
  };

  return (
    <Popper
      open={!!anchorEl}
      anchorEl={anchorEl}
      nonce={undefined}
      onResize={undefined}
      onResizeCapture={undefined}
      style={{
        backgroundColor: "rgba(0,0,0,0.5)",
        color: "white",
      }}
    >
      <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
        <MenuList>
          <MenuItem
            onClick={() => handleClick("minimize")}
            onPointerOver={(event) => handlePointerOver(event)}
            onPointerOut={(event) => handlePointerOver(event)}
            style={itemListStyle}
          >
            <MinimizeIcon /> {languages[lang].actions.minimize}
          </MenuItem>
          <MenuItem
            onClick={() => handleClick("close")}
            onPointerOver={(event) => handlePointerOver(event)}
            onPointerOut={(event) => handlePointerOver(event)}
            style={itemListStyle}
          >
            <CloseIcon /> {languages[lang].actions.close}
          </MenuItem>
        </MenuList>
      </ClickAwayListener>
    </Popper>
  );
}
