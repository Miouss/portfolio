import { MenuList, MenuItem, Popper } from "@mui/material";
import { ClickAwayListener } from "@mui/base";
import { closeApp, minimizeApp, useAppDispatch } from "../../../../../redux";

import { CloseIcon, MinimizeIcon } from "../../../../../assets";

import { langs } from "../../../../../assets";
import { useLangContext } from "../../../../../hooks";
import { Dispatch, SetStateAction } from "react";

interface Props {
  anchorEl: HTMLElement | null;
  setAnchorEl: Dispatch<SetStateAction<HTMLElement | null>>;
  appName: string;
}

export default function ContextMenu({ anchorEl, setAnchorEl, appName }: Props) {
  const { lang } = useLangContext();
  const dispatch = useAppDispatch();

  const onOverBgColor = "rgba(255,255,255, 0.4)";
  const defaultBgColor = "initial";

  const handleClick = (action: string) => {
    dispatch(action === "close" ? closeApp(appName) : minimizeApp(appName));
    setAnchorEl(null);
  };

  const handlePointerOver = (e: React.PointerEvent<HTMLLIElement>) => {
    (e.target as HTMLLIElement).style.backgroundColor =
      e.type === "pointerover" ? onOverBgColor : defaultBgColor;
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
        width: "150px",
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
            <MinimizeIcon /> {langs[lang].actions.minimize}
          </MenuItem>
          <MenuItem
            onClick={() => handleClick("close")}
            onPointerOver={(event) => handlePointerOver(event)}
            onPointerOut={(event) => handlePointerOver(event)}
            style={itemListStyle}
          >
            <CloseIcon /> {langs[lang].actions.close}
          </MenuItem>
        </MenuList>
      </ClickAwayListener>
    </Popper>
  );
}
